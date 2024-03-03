import { CustomerType } from "@oxytrack/database";
import { prisma } from "./../index";
import { Ambulance, WritableAmbulance } from "@oxytrack/api-contract";

export const createAmbulanceTransaction = async (ambulanceData: WritableAmbulance): Promise<string> => {
  const ambulanceId = await prisma.$transaction(async (prismaInstance) => {
    const ambulance = await prismaInstance.ambulance.create({
      data: {
        ambulanceName: ambulanceData.ambulanceName,
        ambulanceNumber: ambulanceData.ambulanceNumber,
        emailAddress: ambulanceData.emailAddress,
        description: ambulanceData.description,
      },
    });

    await prismaInstance.contactToCustomer.createMany({
      data: ambulanceData.contactIds.map((id) => {
        return {
          contactId: id,
          customer: CustomerType.AMBULANCE,
          customerId: ambulance.id,
        };
      }),
    });
    return ambulance.id;
  });
  return ambulanceId;
};

export const getAmbulanceDetailsById = async (ambulanceId: string): Promise<Ambulance | null> => {
  const ambulance = await prisma.ambulance.findUnique({
    where: {
      id: ambulanceId,
    },
  });

  if (!ambulance) {
    return null;
  }

  const contactToCustomer = await prisma.contactToCustomer.findMany({
    where: {
      customerId: ambulanceId,
      customer: CustomerType.AMBULANCE,
    },
  });

  const contacts = await prisma.contact.findMany({
    where: {
      id: {
        in: contactToCustomer.map((contact) => contact.contactId),
      },
    },
  });

  const ambulanceDetails: Ambulance = {
    ...ambulance,
    contacts,
  };

  return ambulanceDetails;
};
