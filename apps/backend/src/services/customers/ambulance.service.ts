import { ContactPerson, CustomerType } from "@oxytrack/database";
import { prisma } from "./../../index";
import { Ambulance, WritableAmbulance } from "@oxytrack/api-contract";

export const createAmbulance = async (
  ambulanceData: WritableAmbulance,
): Promise<WritableAmbulance> => {
  const transaction = await prisma.$transaction(async (prismaInstance) => {
    const ambulance = await prismaInstance.ambulance.create({
      data: {
        ambulanceName: ambulanceData.ambulanceName,
        ambulanceNumber: ambulanceData.ambulanceNumber,
        emailAddress: ambulanceData.emailAddress,
        description: ambulanceData.description,
      },
    });

    await prismaInstance.contactPersonToCustomer.createMany({
      data: ambulanceData.contactPersonIds.map((contactPersonId) => {
        return {
          contactPersonId: contactPersonId,
          customer: CustomerType.AMBULANCE,
          customerId: ambulance.id,
        };
      }),
    });

    return { ...ambulanceData };
  });

  return transaction;
};
