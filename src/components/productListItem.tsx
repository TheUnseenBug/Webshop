import Produce from "@/types";
import { FC } from "react";
import { create } from "zustand";



type Props = {
  produce: Produce
};

const ProductListItem: FC<Props> = ({ produce }) => {

  const useStore = create((set) => ({
    //Adds new item to cart with all its properties
    addToCart: () => set((produce:Produce) => ({ cart: {amount: 1, name:produce.name, image:produce.image, price:produce.price, id:produce.id  } })),
    //Increases amount of produce in the cart
    increaseCart: () => set((state:number) => ({ cart: {amount: state + 1} })),
    //Decreases amount of produce in the cart
    DecreaseCart: () => set((state:number) => ({ cart: {amount: state - 1} })),
    //Removes selected item from cart
    RemoveFromCart: () => set(() => ({ cart: {amount: undefined} })),
  }))

  return (
    <div className="mx-4">
      <picture>
        <img src={produce.image} alt="" />
      </picture>
      <div className="flex justify-between">
        <p>{produce.name}</p>
        <p>{produce.price} kr per styck </p>
      </div>
    </div>
  );
};

export default ProductListItem;
