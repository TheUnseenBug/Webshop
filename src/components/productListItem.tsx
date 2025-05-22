"use client";
import Produce from "@/types";
import { FC } from "react";
import { create } from "zustand";

type Props = {
  produce: Produce;
};

type Store = {
  cart: {
    amount: number,
    name: string,
    image: string,
    price: number,
    id: string
  } | undefined;
  addToCart: (produce:Produce) => void;
  increaseCart: () => void;
  decreaseCart: () => void;
  removeFromCart: () => void;
  
}

const ProductListItem: FC<Props> = ({ produce }) => {
  const useStore = create<Store>((set) => ({
    cart: undefined,
    //Adds new item to cart with all its properties
    addToCart: (produce:Produce) =>
      set(() => ({
        cart: {
          amount: 1,
          name: produce.name,
          image: produce.image,
          price: produce.price,
          id: produce.id,
        },
      })),
    //Increases amount of produce in the cart
    increaseCart: () =>
      set((state: number) => ({ cart: { amount: state + 1 } })),
    //Decreases amount of produce in the cart
    decreaseCart: () =>
      set((state: number) => ({ cart: { amount: state - 1 } })),
    //Removes selected item from cart
    removeFromCart: () => set(() => ({ cart: { amount: undefined } })),
  }));
  const { cart, addToCart, increaseCart, decreaseCart, removeFromCart } =
    useStore();
  console.log(cart);
  return (
    <div className="mx-4">
      <picture>
        <img src={produce.image} alt="" />
      </picture>
      <div className="flex justify-between">
        <p>{produce.name}</p>
        <p>{produce.price} kr per styck </p>
      </div>
      <button
        type="button"
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        -
      </button>
      <button
        type="button"
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => {  addToCart(produce)}}
      >
        +
      </button>
    </div>
  );
};

export default ProductListItem;
