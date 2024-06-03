"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import { Input } from "@/shared/ui/input";
import { useContext, useState } from "react";
import { CustomerType } from "@/entities/customer/model/types";
import { DrawerContext } from "@/app/providers/drawer-provider";
import { ConsoleLogger } from "@/app/logger/logger";

const FormSchema = z.object({
  type: z.enum(["frontOfficeAgent", "callCenterAgent", "custom"], {
    required_error: "You need to select a reason.",
  }),
});

export function DeleteCardForm({
  onCardDelete,
  customer,
}: {
  onCardDelete: (CustomerID: string) => CustomerType;
  customer: CustomerType;
}) {
  const logger = new ConsoleLogger();
  const { setCustomer } = useContext(DrawerContext);
  const [inputVal, setInputVal] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const customerWithoutCard = onCardDelete(customer.CustomerID);
    setCustomer(customerWithoutCard);
    logger.warn(
      `card of user ${customer.Name} ${customer.Surname} has been deleted.`,
    );
    if (data.type !== "custom") {
      logger.warn(`delete reason ${data.type}`);
    } else {
      logger.warn(`delete reason ${data.type} - ${inputVal}`);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Tell the reason</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="frontOfficeAgent" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Front office agent
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="callCenterAgent" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Call center agent
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="custom" />
                    </FormControl>
                    <Input
                      onChange={(e) => setInputVal(e.target.value)}
                      disabled={field.value !== "custom"}
                      className="w-full"
                      placeholder="your custom reason"
                    />
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
