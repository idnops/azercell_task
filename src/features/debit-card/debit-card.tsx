import { CustomerType } from "@/entities/customer/model/types";
import { CardMask } from "../customer-table/ui/card-mask";

export function DebitCard({ customer }: { customer: CustomerType }) {
  return (
    <div className="w-[324px] h-[204px] rounded-lg relative">
      <img
        className="relative object-cover w-full h-full rounded-xl"
        src="https://i.imgur.com/kGkSg1v.png"
      ></img>
      <div className="w-full absolute left-0 bottom-0 p-8 text-white flex flex-col gap-2 ">
        <div className="text-lg">
          {customer.Name} {customer.Surname}
        </div>
        <div className="font-mono">
          <CardMask cardNumber={customer.CardNumber!} />
        </div>
      </div>
    </div>
  );
}
