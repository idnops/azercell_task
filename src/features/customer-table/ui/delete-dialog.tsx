"use client";

import { ConsoleLogger } from "@/app/logger/logger";
import { CustomerType } from "@/entities/customer/model/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/ui/alert-dialog";
import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";
import { useState } from "react";

export function DeleteDialog({
  label,
  customer,
  handleMenuClose,
  onDelete,
}: {
  label: string;
  customer: CustomerType;
  handleMenuClose: () => void;
  onDelete: (CustomerID: string) => void;
}) {
  const logger = new ConsoleLogger();
  const [isOpen, setOpen] = useState(false);
  const handleDelete = () => {
    onDelete(customer.CustomerID);
    handleMenuClose();
    logger.warn(
      `customer ${customer.Name} ${customer.Surname} has been deleted`,
    );
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          {label}
        </DropdownMenuItem>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure to delete {customer.Name} {customer.Surname} ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete{" "}
            {customer.Name} {customer.Surname}'s account and remove his/her data
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => handleMenuClose()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
