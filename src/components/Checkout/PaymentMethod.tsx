import Input from "@components/Input";
import { PaymentMethodInterface } from "@utils/types";
import { CreditCard, Plus } from "lucide-react";
import Image from "next/image";
import { ChangeEventHandler } from "react";

interface PropsInterface {
  handleInput: ChangeEventHandler<HTMLInputElement>;
  paymentDetail: PaymentMethodInterface;
}

export default function PaymentMethod({
  handleInput,
  paymentDetail: { cardNumber, ccv, expiryDate },
}: PropsInterface) {
  return (
    <div className="my-4 rounded-xl bg-gray-800 p-6">
      <div className="flex items-center gap-2 border-gray-500  py-2">
        <CreditCard />
        <p>Payment Method</p>
      </div>
      <div className="my-4 grid grid-cols-4 gap-2">
        <div className="grid aspect-video grid-cols-2 grid-rows-2 rounded bg-white p-0.5">
          <div className="flex aspect-video justify-center p-0.5">
            <Image
              src={"/images/mc-logo-52.svg"}
              width={1800}
              height={300}
              alt="Mastercard logo"
              className="h-full w-auto"
            />
          </div>
          <div className="flex aspect-video items-center justify-center">
            <Image
              src={"/images/visa.svg"}
              width={300}
              height={300}
              alt="Visa logo"
              className="h-full w-auto"
            />
          </div>
          <div className="flex aspect-video justify-center">
            <Image
              src={"/images/jcb_emblem.svg"}
              width={300}
              height={300}
              alt="JCB logo"
              className="h-full w-auto"
            />
          </div>
          <div className="flex aspect-video justify-center">
            <Image
              src={"/images/american-express-1.svg"}
              width={300}
              height={300}
              alt="amex logo"
              className="h-full object-cover"
            />
          </div>
        </div>
        <div className="aspect-video rounded bg-white px-1">
          <Image
            src={"/images/paypal-3.svg"}
            width={300}
            height={300}
            alt="paypal logo"
            className="h-full w-auto"
          />
        </div>
        <div className="aspect-video rounded bg-white">
          <Image
            src={"/images/sofort.svg"}
            width={300}
            height={300}
            alt="sofort logo"
            className="h-full w-auto"
          />
        </div>
        <div className="aspect-video rounded bg-white p-1">
          <Image
            src={"/images/twint-logo.svg"}
            width={300}
            height={300}
            alt="twint logo"
            className="h-full w-auto"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          <span>Show more payment methods</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="my-2  grid gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="cardNumber">
              Card number
            </label>
            <Input
              id="cardNumber"
              placeholder="1234567890123456"
              required
              onChange={handleInput}
              value={cardNumber}
              data-field="payment"
              type="number"
            />
          </div>
        </div>
        <div className="my-2 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="expiryDate">
              Expiry Date
            </label>
            <Input
              id="expiryDate"
              placeholder=""
              type="date"
              required
              onChange={handleInput}
              value={expiryDate}
              data-field="payment"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="ccv">
              CVC / CVV
            </label>
            <Input
              id="ccv"
              placeholder="123"
              required
              onChange={handleInput}
              value={ccv}
              data-field="payment"
              type="number"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
