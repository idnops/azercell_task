"use client";

import { useState } from "react";
import { TransactionType } from "../model/types";

export const useTransaction = (transactionList: TransactionType[]) => {
  const [transactions, setTransactions] =
    useState<TransactionType[]>(transactionList);

  const getTransactionsByCustomerID = (CustomerID: string) => {
    const customerTransactions = transactions.filter((transaction) => {
      return transaction.CustomerID === CustomerID;
    });

    return customerTransactions;
  };

  return { getTransactionsByCustomerID };
};
