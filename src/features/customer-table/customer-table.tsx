"use client";

import { CustomerType } from "@/entities/customer/model/types";
import { DataTable } from "@/shared/ui/data-table";
import { columns } from "./ui/columns";

export function CustomerTable({
  customers,
  onDelete,
  onCardDelete,
}: {
  customers: CustomerType[];
  onDelete: (CustomerID: string) => void;
  onCardDelete: (CustomerID: string) => void;
}) {
  return (
    <DataTable columns={columns({ onDelete, onCardDelete })} data={customers} />
  );
}
