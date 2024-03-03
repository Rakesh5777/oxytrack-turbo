import { WritableContact } from "@oxytrack/api-contract";
import { prisma } from "./../index";
import { Contact } from "@oxytrack/database";

export const createContact = async (contact: WritableContact): Promise<Contact> => {
  return await prisma.contact.create({
    data: contact,
  });
};

export const getContactPages = async (page: number, pageSize: number, query?: string): Promise<Contact[]> => {
  let where = {};
  if (query) {
    where = {
      OR: [
        {
          contactName: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          mobileNumber: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
    };
  }
  return await prisma.contact.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    where,
  });
};

export const getContactsCount = async (query?: string): Promise<number> => {
  let where = {};
  if (query) {
    where = {
      OR: [
        {
          contactName: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          mobileNumber: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
    };
  }

  return await prisma.contact.count({ where });
};
