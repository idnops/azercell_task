"use client";

import { DataTable } from "@/shared/ui/data-table";
import { TransactionType } from "@/entities/transaction/model/types";
import { columns } from "./ui/columns";

export function TransactionTable({
  transactions,
}: {
  transactions: TransactionType[];
}) {
  return <DataTable columns={columns()} data={transactions} />;
}
