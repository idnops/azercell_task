"use client";

import { CustomerType } from "@/entities/customer/model/types";
import { ReactNode, createContext, useState } from "react";

type DrawerContextType = {
  isOpen: boolean;
  setOpen: (val: boolean) => void;
  customer: CustomerType;
  setCustomer: (customer: CustomerType) => void;
};

export const DrawerContext = createContext<DrawerContextType>({
  isOpen: false,
  setOpen: () => {},
  customer: {} as CustomerType,
  setCustomer: () => {},
});

export default function DrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [customer, setCustomer] = useState<CustomerType>({} as CustomerType);

  const setOpen = (val: boolean) => {
    setIsOpen(val);
  };

  const setCurrentCustomer = (customer: CustomerType) => {
    setCustomer(customer);
  };

  return (
    <DrawerContext.Provider
      value={{ isOpen, setOpen, customer, setCustomer: setCurrentCustomer }}
    >
      {children}
    </DrawerContext.Provider>
  );
}
