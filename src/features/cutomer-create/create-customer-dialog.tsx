"use client";

import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { CreateCustomerForm } from "./create-customer-form";
import { CustomerType } from "@/entities/customer/model/types";
import { useCustomers } from "@/entities/customer/api/use-customers";
import { useState } from "react";

export function CreateCustomerDialog({
  onCreate,
}: {
  onCreate: (customer: CustomerType) => void;
}) {
  const [isOpen, setOpen] = useState(false);
  const dialogHandler = (val: boolean) => {
    setOpen(val);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Create</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[840px]">
        <DialogHeader>
          <DialogTitle>Create new Customer</DialogTitle>
          <DialogDescription>
            Fill the form below to create new customer
          </DialogDescription>
        </DialogHeader>
        <CreateCustomerForm onCreate={onCreate} dialogHandler={dialogHandler} />
      </DialogContent>
    </Dialog>
  );
}
