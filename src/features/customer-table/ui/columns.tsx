"use client";

import { CustomerType } from "@/entities/customer/model/types";
import { ColumnDef } from "@tanstack/react-table";
import { ActionMenu } from "./action-menu";
import { CardMask } from "./card-mask";

export const columns = ({
  onDelete,
  onCardDelete,
}: {
  onDelete: (CustomerID: string) => void;
  onCardDelete: (CustomerID: string) => void;
}): ColumnDef<CustomerType>[] => {
  return [
    {
      accessorKey: "Name",
      header: "Name",
    },
    {
      accessorKey: "Surname",
      header: "Surname",
    },
    {
      accessorKey: "BirthDate",
      header: "Birth Date",
    },
    {
      accessorKey: "GSMNumber",
      header: "Mobile Number",
    },
    {
      accessorKey: "CardNumber",
      header: "Card Number",
      cell: ({ row }) => {
        const cardNumber: string = row.getValue("CardNumber");
        return cardNumber ? (
          <CardMask cardNumber={cardNumber} />
        ) : (
          <div className="inline-block rounded-md text-xs bg-slate-300 px-2 py-1">
            No card issued
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        return <ActionMenu customer={row.original} onDelete={onDelete} />;
      },
    },
  ];
};
