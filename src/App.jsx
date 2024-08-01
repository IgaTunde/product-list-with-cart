import { useContext } from "react";
import ProductList from "./Product";
import CartCard from "./Cart";
import { EmptyCart } from "./Cart";
import BasketProvider, { BasketContext } from "./store/Basket";
import ModalView from "./ModalView";

function App() {
  return (
    <BasketProvider>
      <main className="flex flex-col w-full gap-8 pt-10 md:justify-between md:flex-row md:py-20 font-redHat px-7 md:px-20 bg-red-50 ">
        <div className="md:w-8/12">
          <h1 className="mb-10 text-5xl font-extrabold text-rose-950">
            Desserts
          </h1>
          <ProductList />
        </div>
        <CartSection />
        <ModalView />
      </main>
    </BasketProvider>
  );
}

function CartSection() {
  const { getTotalItemsInTheCart } = useContext(BasketContext);
  return getTotalItemsInTheCart() === 0 ? <EmptyCart /> : <CartCard />;
}

export default App;
