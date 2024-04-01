import { Customer, CustomerPage, WritableCustomer } from "@oxytrack/api-contract";
import { createCustomerTransaction, getCustomersCount, getCustomersPage } from "../scripts/customer.script";

export const createCustomer = async (ambulanceData: WritableCustomer): Promise<Customer> => {
  return await createCustomerTransaction(ambulanceData);
};

export const getCustomers = async (pageIndex: number, pageSize: number, query?: string): Promise<CustomerPage> => {
  const customers = await getCustomersPage(pageIndex, pageSize, query);
  const customersCount = await getCustomersCount(query);
  return { items: customers, totalItemCount: customersCount, pageSize, pageIndex };
};
