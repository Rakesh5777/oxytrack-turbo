import { Customer, WritableCustomer } from "@oxytrack/api-contract";
import { createCustomerTransaction } from "../scripts/customer.script";

export const createCustomer = async (ambulanceData: WritableCustomer): Promise<Customer> => {
  return await createCustomerTransaction(ambulanceData);
};
