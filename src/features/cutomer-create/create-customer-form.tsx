"use client";

import { v4 as uuidv4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CustomerType } from "@/entities/customer/model/types";
import { generateDebitNumbers } from "@/shared/ui/utils";
import { useState } from "react";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { ConsoleLogger } from "@/app/logger/logger";

const FormSchema = z.object({
  Name: z.string().min(3, {
    message: "Customer name must be at least 3 characters.",
  }),
  Surname: z.string().min(5, {
    message: "Customer surname must be at least 5 characters.",
  }),
  BirthDate: z.string().min(8, {
    message: "Customer birthdate must be at least 8 characters.",
  }),
  GSMNumber: z.string().min(9, {
    message: "Customer mobile number must be at least 9  characters.",
  }),
  CardNumber: z.string().optional().or(z.literal("")),
});

export function CreateCustomerForm({
  onCreate,
  dialogHandler,
}: {
  onCreate: (customer: CustomerType) => void;
  dialogHandler: (val: boolean) => void;
}) {
  const logger = new ConsoleLogger();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Name: "",
      Surname: "",
      BirthDate: "",
      GSMNumber: "",
      CardNumber: "",
    },
  });

  const [hasDebitCard, setHasDebitCard] = useState(false);

  const handleAddCard = () => {
    setHasDebitCard(true);
    form.setValue("CardNumber", generateDebitNumbers().toString());
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    onCreate({
      CustomerID: uuidv4(),
      ...data,
    });
    dialogHandler(false);
    logger.log("new customer created", data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-4 justify-between w-1/2">
            <div>
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Customer name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="BirthDate"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Birth date</FormLabel>
                    <FormControl>
                      <Input placeholder="Birth date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="inline-block">
              <Button
                onClick={() => handleAddCard()}
                type="button"
                variant={"outline"}
                disabled={hasDebitCard}
              >
                Add Debit Card
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/2">
            <div>
              <FormField
                control={form.control}
                name="Surname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Surname</FormLabel>
                    <FormControl>
                      <Input placeholder="Customer surname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="GSMNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>GSM number</FormLabel>
                    <FormControl>
                      <Input placeholder="Mobile number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              {hasDebitCard && (
                <FormField
                  control={form.control}
                  name="CardNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Mobile number"
                          {...field}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button
            variant={"outline"}
            onClick={() => dialogHandler(false)}
            type="button"
          >
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Form>
  );
}
