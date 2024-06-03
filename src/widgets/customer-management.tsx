"use client";

import { useCustomers } from "@/entities/customer/api/use-customers";
import { CustomerType } from "@/entities/customer/model/types";
import { useTransaction } from "@/entities/transaction/api/use-transactions";
import { TransactionType } from "@/entities/transaction/model/types";
import { CreateCustomerDialog } from "@/features/cutomer-create/create-customer-dialog";
import { CustomerProfile } from "@/features/customer-profile/customer-profile";
import { CustomerTable } from "@/features/customer-table/customer-table";

export function CustomerManagement({
  customerList,
  transactionList,
}: {
  customerList: CustomerType[];
  transactionList: TransactionType[];
}) {
  const { customers, createCustomer, deleteCustomer, deleteCustomerCard } =
    useCustomers(customerList);

  const { getTransactionsByCustomerID } = useTransaction(transactionList);

  return (
    <div>
      <div className="flex justify-between mb-12">
        <h1 className="text-3xl font-semibold">Customer list</h1>
        <CreateCustomerDialog onCreate={createCustomer} />
      </div>

      <CustomerTable
        customers={customers}
        onDelete={deleteCustomer}
        onCardDelete={deleteCustomerCard}
      />

      <CustomerProfile
        onCardDelete={deleteCustomerCard}
        getTransactionsByCustomerID={getTransactionsByCustomerID}
      />
    </div>
  );
}
