"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TransactionType } from "@/entities/transaction/model/types";

export const columns = (): ColumnDef<TransactionType>[] => {
  return [
    {
      accessorKey: "TransactionID",
      header: "Transaction ID",
    },
    {
      accessorKey: "TransactionDate",
      header: "Date",
    },
    {
      accessorKey: "TransactionAmount",
      header: "Amount",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("TransactionAmount"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "AZN",
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
  ];
};
