import { AdditionalRecordKey, Customer, EntityRequirementsKeyEnum, WritableCustomer } from "@oxytrack/api-contract";
import { CustomerType, LocationEntityTypes } from "@oxytrack/database";
import { prisma } from "../index";
import { CustomError } from "../utils/middlewares";

//TODO: need to handle contacts and entityRequirements
export const createCustomerTransaction = async (customerData: WritableCustomer): Promise<Customer> => {
  let createdCustomer;
  await prisma.$transaction(async (prismaClient) => {
    createdCustomer = await prismaClient.customers.create({
      data: {
        type: customerData.type,
        name: customerData.name,
        number: customerData.number,
        emailAddress: customerData.emailAddress,
        address: customerData.address,
        description: customerData.description,
        contacts: {
          create: customerData.contactIds?.map((id) => ({ contactId: id })),
        },
        entityRequirements: {
          create: customerData.entityRequirement?.map((entity) => entity),
        },
        additionalRecords: {
          create: customerData.additionalRecord?.map((record) => record),
        },
      },
    });

    await prismaClient.location.create({
      data: {
        entityId: createdCustomer.id,
        entityType: LocationEntityTypes.CUSTOMER,
        latitude: 0,
        longitude: 0,
      },
    });
  });

  return await getCustomerDetailsById(createdCustomer!.id);
};

export const getCustomerDetailsById = async (customerId: string): Promise<Customer> => {
  const customer = await prisma.customers.findUnique({
    where: {
      id: customerId,
    },
    include: {
      entityRequirements: true,
      additionalRecords: true,
    },
  });

  if (!customer) throw new CustomError(404, "Customer not found");

  return {
    ...customer,
    type: customer.type as CustomerType,
    contacts: [],
    entityRequirements: customer.entityRequirements.map((entity) => ({ key: entity.key as EntityRequirementsKeyEnum, value: entity.value })),
    additionalRecords: customer.additionalRecords.map((record) => ({ key: record.key as AdditionalRecordKey, value: record.value })),
  };
};

export const getCustomersPage = async (page: number, pageSize: number, query?: string, type?: string[]): Promise<Customer[]> => {
  let where = {};
  if (query) {
    where = {
      name: {
        contains: query,
        mode: "insensitive",
      },
    };
  }
  if (type) {
    where = {
      ...where,
      type: {
        in: type,
      },
    };
  }
  const customers = await prisma.customers.findMany({
    where,
    skip: page * pageSize,
    take: pageSize,
    include: {
      entityRequirements: true,
      additionalRecords: true,
    },
  });

  return customers.map((customer) => {
    return {
      ...customer,
      contacts: [],
      entityRequirements: customer.entityRequirements.map((entity) => ({ key: entity.key as EntityRequirementsKeyEnum, value: entity.value })),
      additionalRecords: customer.additionalRecords.map((record) => ({ key: record.key as AdditionalRecordKey, value: record.value })),
    };
  });
};

export const getCustomersCount = async (query?: string, type?: string[]): Promise<number> => {
  let where = {};
  if (query) {
    where = {
      name: {
        contains: query,
        mode: "insensitive",
      },
    };
  }
  if (type) {
    where = {
      ...where,
      type: {
        in: type,
      },
    };
  }
  return await prisma.customers.count({ where });
};
