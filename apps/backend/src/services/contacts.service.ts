import { Contact, WritableContact } from "@oxytrack/api-contract";
import { createContact } from "../scripts/contacts.script";

export const createContactFn = async (
  contact: WritableContact,
): Promise<Contact> => {
  return await createContact(contact);
};
