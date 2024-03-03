import { WritableContact } from "@oxytrack/api-contract";
import { prisma } from "./../index";
import { Contact } from "@oxytrack/database";

export const createContact = async (contact: WritableContact): Promise<Contact> => {
  return await prisma.contact.create({
    data: contact,
  });
};
