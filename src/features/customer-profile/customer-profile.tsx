import { CustomerType } from "@/entities/customer/model/types";
import { DrawerContext } from "@/app/providers/drawer-provider";
import { useContext, useState } from "react";

import { Button } from "@/shared/ui/button";
import { DebitCard } from "../debit-card/debit-card";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/shared/ui/drawer";
import { DeleteCardForm } from "./ui/delete-card-form";
import { TransactionType } from "@/entities/transaction/model/types";
import { TransactionTable } from "../transaction-table/transaction-table";

export function CustomerProfile({
  onCardDelete,
  getTransactionsByCustomerID,
}: {
  onCardDelete: (CustomerID: string) => CustomerType;
  getTransactionsByCustomerID: (CustomerID: string) => TransactionType[];
}) {
  const { isOpen, setOpen, customer } = useContext(DrawerContext);
  const [isFormOpen, setFormOpen] = useState(false);

  const customerTransactions = getTransactionsByCustomerID(customer.CustomerID);

  return (
    <Drawer
      open={isOpen}
      onOpenChange={setOpen}
      onClose={() => setFormOpen(false)}
    >
      <DrawerContent className="min-h-[800px]">
        <div className="container mx-auto">
          <div>
            <DrawerHeader>
              <DrawerTitle>
                {customer.Name} {customer.Surname}
              </DrawerTitle>
              <DrawerDescription>{customer.GSMNumber}</DrawerDescription>
            </DrawerHeader>
          </div>
          <div className="flex gap-4">
            <div>
              {customer.CardNumber && (
                <div>
                  <div>
                    <DebitCard customer={customer} />
                  </div>
                  <div className="mt-4 flex flex-col gap-4">
                    {!isFormOpen && (
                      <div className="inline-block">
                        <Button
                          variant={"outline"}
                          onClick={() => setFormOpen(true)}
                        >
                          Delete card
                        </Button>
                      </div>
                    )}
                    {isFormOpen && (
                      <DeleteCardForm
                        onCardDelete={onCardDelete}
                        customer={customer}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className=" w-full">
              <TransactionTable transactions={customerTransactions} />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
