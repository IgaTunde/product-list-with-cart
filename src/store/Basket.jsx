import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext({
  addToBasket: () => {},
  removeFromBasket: () => {},
  getBasketItems: () => {},
  clearCart: () => {},
  getCartTotal: () => {},
  getTotalItemsInTheCart: () => {},
  totalItems: 0,
});

export default function BasketProvider({ children }) {
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  function addToBasket(item) {
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setTotalItems((prevValue) => prevValue + 1);
    } else {
      setItems((prevItems) => {
        const updatedItem = { ...item, quantity: 1 };
        setTotalItems(1);
        return [...prevItems, updatedItem];
      });
    }
  }

  function removeFromBasket(item) {
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity -= 1;
      setTotalItems((p) => p - 1);
    } else {
      setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
      setTotalItems(0);
    }
  }

  function getBasketItems() {
    return items;
  }

  function clearCart() {
    setItems([]);
  }

  function getCartTotal() {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

function getTotalItemsInTheCart() {
   return items.reduce((total, item) => total + item.quantity, 0);
}

  // useEffect(() => {
  //   const storedIitems = localStorage.getItem("items");
  //   setItems(storedIitems ? JSON.parse(storedIitems) : []);
  // }, []);

  return (
    <BasketContext.Provider
      value={{
        addToBasket,
        removeFromBasket,
        getBasketItems,
        clearCart,
        getCartTotal,
        getTotalItemsInTheCart,
        totalItems,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
