import { Button } from "@/shared/ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export function CardMask({ cardNumber }: { cardNumber: string }) {
  const [isVisible, setVisible] = useState(false);
  const formattedCardNumber = cardNumber.replace(/(\d{4}(?!\s))/g, "$1 ");
  const maskedCardNumber = formattedCardNumber.replace(/\S/gi, "*");
  return (
    <div className="flex gap-2 items-center">
      <div>
        {!isVisible && maskedCardNumber}
        {isVisible && formattedCardNumber}
      </div>
      <div>
        <Button
          variant={"ghost"}
          onClick={() => setVisible(!isVisible)}
          className="h-8 w-8 p-0"
        >
          {isVisible && <EyeIcon className="w-4 h-4 text-slate-300" />}
          {!isVisible && <EyeOffIcon className="w-4 h-4 text-slate-300" />}
        </Button>
      </div>
    </div>
  );
}
