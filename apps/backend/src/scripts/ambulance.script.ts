import { CreateAmbulance } from "@oxytrack/api-contract";
import { ContactPerson, CustomerType } from "@oxytrack/database";
import { prisma } from "./../index";

export const createAmbulanceTransaction = async (
  ambulanceData: CreateAmbulance,
) => {
  await prisma.$transaction(async (prismaInstance) => {
    const ambulance = await prismaInstance.ambulance.create({
      data: {
        ambulanceName: ambulanceData.ambulanceName,
        ambulanceNumber: ambulanceData.ambulanceNumber,
        emailAddress: ambulanceData.emailAddress,
        description: ambulanceData.description,
      },
    });

    let contactPersons: ContactPerson[] = [];

    await Promise.all(
      ambulanceData.contactPersons!.map(async (contactPerson, index) => {
        contactPersons[index] = await prismaInstance.contactPerson.create({
          data: {
            contactName: contactPerson.contactName,
            mobileNumber: contactPerson.mobileNumber,
            active: contactPerson.active,
          },
        });
      }),
    );

    await prismaInstance.contactPersonToCustomer.createMany({
      data: contactPersons.map((contactPerson) => {
        return {
          contactPersonId: contactPerson.id,
          customer: CustomerType.AMBULANCE,
          customerId: ambulance.id,
        };
      }),
    });

    return { ...ambulance, contactPersons: contactPersons };
  });
};
