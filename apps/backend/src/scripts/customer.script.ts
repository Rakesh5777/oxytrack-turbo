import { CustomerType } from "@oxytrack/database";
import { AdditionalRecordKey, EntityRequirmentsKeyEnum } from "@oxytrack/api-contract";
import { prisma } from "../index";
import { Customer, WritableCustomer } from "@oxytrack/api-contract";
import { CustomError } from "../utils/middlewares";

export const createCustomerTransaction = async (customerData: WritableCustomer): Promise<Customer> => {
  const customer = await prisma.customers.create({
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
      entityRequirments: {
        create: customerData.entityRequirement?.map((entity) => entity),
      },
      additionalRecords: {
        create: customerData.additionalRecord?.map((record) => record),
      },
    },
  });

  return await getCustomerDetailsById(customer.id);
};

export const getCustomerDetailsById = async (customerId: string): Promise<Customer> => {
  const customer = await prisma.customers.findUnique({
    where: {
      id: customerId,
    },
    include: {
      entityRequirments: true,
      additionalRecords: true,
    },
  });

  if (!customer) throw new CustomError("Customer not found", 404);

  const contacts = await prisma.contact.findMany({
    where: {
      customersId: customerId,
    },
  });

  return {
    ...customer,
    type: customer.type as CustomerType,
    contacts: contacts,
    entityRequirements: customer.entityRequirments.map((entity) => ({ key: entity.key as EntityRequirmentsKeyEnum, value: entity.value })),
    additionalRecords: customer.additionalRecords.map((record) => ({ key: record.key as AdditionalRecordKey, value: record.value })),
  };
};
