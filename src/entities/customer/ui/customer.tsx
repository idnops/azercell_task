"use client";

import { Button } from "@/shared/ui/button";
import { CustomerType } from "../model/types";

export function Customer({
  customer,
  onDelete,
}: {
  customer: CustomerType;
  onDelete: (CustomerID: string) => void;
}) {
  return (
    <div className="flex items-center justify-between p-4 ring-1 ring-slate-200  rounded-md">
      <div>{customer.Name}</div>
      <div>{customer.Surname}</div>
      <div>{customer.BirthDate}</div>
      <div>{customer.GSMNumber}</div>
      <div>{customer.CardNumber}</div>
      <div>
        <Button
          size={"sm"}
          variant={"outline"}
          onClick={() => onDelete(customer.CustomerID)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
