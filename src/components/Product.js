import React from "react";
import { observer } from "mobx-react";
import productStore from "../redux/productStore";

const Product = observer(({ item }) => {
  const { price, image, title } = item;
  const { addToCart } = productStore;

  return (
    <div className=" h-[350px] flex flex-col items-center justify-between p-5  border  border-gray-400">
      <img className=" w-[160px]  h-[200px] " src={image} alt={title} />
      <div className="gap-5  px-10 ">
        <p className=" font-semibold text-gray-400">{title.slice(0, 20)}</p>
        <div className=" flex justify-between items-center">
          <p>price:</p>
          <p className=" font-semibold">${price.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={() => addToCart(item)}
        className=" px-5 py-2 rounded-md bg-gray-400 text-white w-full"
      >
        add to cart
      </button>
    </div>
  );
});

export default Product;
