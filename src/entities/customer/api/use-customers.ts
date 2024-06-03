"use client";

import { useState } from "react";
import { CustomerType } from "../model/types";

export const useCustomers = (customerList: CustomerType[]) => {
  const [customers, setCustomers] = useState<CustomerType[]>(customerList);

  const createCustomer = (customer: CustomerType) => {
    setCustomers([customer, ...customers]);
  };

  const deleteCustomer = (CustomerID: string) => {
    const filteredCustomers = customers.filter((customer) => {
      return customer.CustomerID !== CustomerID;
    });
    setCustomers([...filteredCustomers]);
  };

  const deleteCustomerCard = (CustomerID: string): CustomerType => {
    const customerOwner = customers.find(
      (customer) => customer.CustomerID === CustomerID,
    );
    if (customerOwner) {
      const filteredCustomers = customers.filter((customer) => {
        return customer !== customerOwner;
      });
      const { CardNumber, ...rest } = customerOwner;
      setCustomers([rest, ...filteredCustomers]);
      return rest;
    } else {
      return customers[0];
    }
  };

  return { customers, createCustomer, deleteCustomer, deleteCustomerCard };
};
