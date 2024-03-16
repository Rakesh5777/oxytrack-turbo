import { Customer, CustomerPage, WritableCustomer } from "@oxytrack/api-contract";
import { createCustomerTransaction, getCustomersCount, getCustomersPage } from "../scripts/customer.script";

export const createCustomer = async (ambulanceData: WritableCustomer): Promise<Customer> => {
  return await createCustomerTransaction(ambulanceData);
};

export const getCustomers = async (page: number, pageSize: number, query?: string): Promise<CustomerPage> => {
  const customers = await getCustomersPage(page, pageSize, query);
  const customersCount = await getCustomersCount(query);
  return { items: customers, totalItemCount: customersCount, pageSize, page };
};
