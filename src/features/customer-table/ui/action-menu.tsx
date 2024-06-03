"use client";

import { MoreHorizontal } from "lucide-react";
import { DeleteDialog } from "./delete-dialog";
import { useContext, useState } from "react";
import { CustomerType } from "@/entities/customer/model/types";

import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/shared/ui/dropdown-menu";
import { DrawerContext } from "@/app/providers/drawer-provider";

export function ActionMenu({
  customer,
  onDelete,
}: {
  customer: CustomerType;
  onDelete: (CustomerID: string) => void;
}) {
  const [isOpen, setOpen] = useState(false);
  const closeMenu = () => {
    setOpen(false);
  };
  const { setOpen: openDrawer, setCustomer } = useContext(DrawerContext);
  return (
    <DropdownMenu open={isOpen} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => {
            setCustomer(customer);
            openDrawer(true);
          }}
        >
          View customer
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DeleteDialog
          label="Delete Customer"
          handleMenuClose={closeMenu}
          customer={customer}
          onDelete={onDelete}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
