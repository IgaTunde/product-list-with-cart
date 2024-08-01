import { useContext } from "react";
import { BasketContext } from "./store/Basket";
import { OrderTotal } from "./Cart";

function ModalItem({ data }) {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center gap-3">
        <img src={data.image.thumbnail} alt="" className="h-16 rounded-md " />
        <div className="text-sm ">
          <h5 className="font-bold text-rose-950">{data.name}</h5>
          <div className="flex items-center pt-1">
            <p className="pr-4 font-bold text-redHsl">{data.quantity}x</p>
            <p className="pr-3 font-semibold opacity-30 text-rose-950">
              @ ${data.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-sm font-bold text-rose-950 ">
          ${(data.price * data.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

function NewOrderBtn() {
  return (
    <div className="flex items-center justify-center">
      <button className="justify-center w-full py-3 rounded-full wfont-bold bg-redHsl text-rose-50">
        Start New Order
      </button>
    </div>
  );
}

function ModalItems() {
  const { getBasketItems } = useContext(BasketContext);
  return (
    <div className="flex flex-col gap-4 p-4 my-6 rounded-lg bg-rose-50">
      {getBasketItems().map((item) => {
        return <ModalItem key={item.id} data={item} />;
      })}
    </div>
  );
}

function ModalCard() {
  return (
    <div className="self-auto p-8 mb-10 bg-white md:self-start lg:w-80 rounded-xl">
      <img src="/src/assets/images/icon-order-confirmed.svg" alt="" />
      <p className="pt-6 mb-2 text-3xl font-bold">Order Confirmed</p>
      <p className="text-xs">We hope you enjoy your food</p>
      <ModalItems />
      <OrderTotal />
      <NewOrderBtn />
    </div>
  );
}

export default ModalCard;
