import { useContext } from "react";
import { BasketContext } from "./store/Basket";

function AddToCartButton({ data }) {
  const { addToBasket } = useContext(BasketContext);

  function handleAddToCart() {
    addToBasket(data);
  }

  return (
    <div className="">
      <button
        className="z-10 flex items-center justify-center gap-2 p-2 mx-auto -mt-5 transition-all bg-white border border-solid rounded-full shadow-md px-7 border-rose-950 hover:border-redHsl"
        onClick={handleAddToCart}
      >
        <img src="../src/assets/images/icon-add-to-cart.svg" alt="" />
        <h5 className="text-sm font-extrabold text-rose-950 hover:text-redHsl">
          Add to Cart
        </h5>
      </button>
    </div>
  );
}

export function AddToCartButtonActive({ data }) {
  const { addToBasket, removeFromBasket, getTotalItemsInTheCart } =
    useContext(BasketContext);

  function decrement() {
   
    removeFromBasket(data);
  }

  return (
    <div className="z-10 flex items-center justify-center p-2 px-6 mx-auto -mt-5 font-bold rounded-full shadow-md gap-9 bg-redHsl">
      <button onClick={decrement}>
        <img
          src="../src/assets/images/icon-decrement-quantity.svg"
          alt="minus"
          className="border border-white border-solid rounded-full py-[5px] px-[1px]"
        />
      </button>

      <p className="text-white">{getTotalItemsInTheCart()}</p>

      <button onClick={() => addToBasket(data)}>
        <img
          src="../src/assets/images/icon-increment-quantity.svg"
          alt="plus"
          className="bg-white border rounded-full p-[1px]"
        />
      </button>
    </div>
  );
}

export default AddToCartButton;
