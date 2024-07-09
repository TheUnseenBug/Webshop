import { FC } from "react";


type Props = {
  produce: {
    name: string;
    image: string;
    price: number;
  };
};

const ProductListItem: FC<Props> = ({ produce }) => {
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
