import { Customer, CustomerPage, WritableCustomer } from "@oxytrack/api-contract";
import { createCustomerTransaction, getCustomersCount, getCustomersPage } from "../scripts/customer.script";

export const createCustomer = async (customerData: WritableCustomer): Promise<Customer> => {
  return await createCustomerTransaction(customerData);
};

export const getCustomers = async (pageIndex: number, pageSize: number, query?: string, type?: string[]): Promise<CustomerPage> => {
  const customers = await getCustomersPage(pageIndex, pageSize, query, type);
  const customersCount = await getCustomersCount(query, type);
  return { items: customers, totalItemCount: customersCount, pageSize, pageIndex };
};
