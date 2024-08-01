import { useContext } from "react";
import { BasketContext } from "./store/Basket";

export function EmptyCart() {
  return (
    <div className="bg-white h-[350px] lg:h-[300px] lg:w-80 rounded-xl px-8 mb-10">
      <p className="pt-10 mb-20 text-xl font-bold md:mb-5 text-redHsl">
        Your Cart (0)
      </p>
      <div className="flex flex-col items-center justify-center ">
        <img
          src="../src/assets/images/illustration-empty-cart.svg"
          alt=""
          className="h-36"
        />
        <p className="mt-5 text-sm font-semibold opacity-40 text-rose-950">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}

export function CartItem({ data }) {
  const { removeFromBasket } = useContext(BasketContext);
  return (
    <div className="">
      <div className="flex items-center justify-between border-b-2">
        <div className="py-4">
          <h5 className="font-bold text-rose-950">{data.name}</h5>
          <div className="flex items-center pt-1 pb-4">
            <p className="pr-4 font-bold text-redHsl">{data.quantity}x</p>
            <p className="pr-3 text-sm font-semibold opacity-30 text-rose-950">
              @ {data.price.toFixed(2)}
            </p>
            <p className="text-sm font-bold opacity-50 text-rose-950">
              ${(data.price * data.quantity).toFixed(2)}
            </p>
          </div>
        </div>
        <button
          className="p-1 border-2 rounded-full border-sodlid "
          onClick={() => removeFromBasket(data)}
        >
          <img src="/src/assets/images/icon-remove-item.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

function CartCard() {
  const {  getBasketItems, getTotalItemsInTheCart } =
    useContext(BasketContext);
  return (
    <div className="self-auto px-8 pb-8 mb-10 bg-white md:self-start lg:w-80 rounded-xl">
      <p className="pt-10 text-xl font-bold mb-7 md:mb-5 text-redHsl">
        Your Cart ({getTotalItemsInTheCart()})
      </p>
      {getBasketItems().map((item) => {
        return <CartItem key={item.id} data={item} />;
      })}

    <OrderTotal />

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center gap-2 py-3 rounded-md bg-rose-50">
          <img src="/src/assets/images/icon-carbon-neutral.svg" alt="" />
          <p className="md:text-sm">
            This is a <strong className="">carbon-neutral</strong> delivery
          </p>
        </div>

        <ConfirmOrderBtn />
      </div>
    </div>
  );
}

export function OrderTotal() {
  const {getCartTotal} = useContext(BasketContext)
   return (
     <div className="flex items-center justify-between py-6 text-rose-950">
       <p className="text-sm font-semibold opacity-70">Order Total</p>
       <p className="text-xl font-bold">${getCartTotal()}</p>
     </div>
   );
}

export function ConfirmOrderBtn() {
  return (
    <button className="py-3 font-bold rounded-full bg-redHsl text-rose-50">
      Confirm Order
    </button>
  );
}

export default CartCard;
