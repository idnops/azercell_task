import { CustomerType } from "../model/types";

class CustomerRepository {
  getCustomerList = async (): Promise<CustomerType[]> => {
    const res = await fetch(
      "https://mocki.io/v1/cdc186c9-5131-423a-bdaf-5c190d39c5b5",
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };
}

export const customerRepository = new CustomerRepository();
