import React from "react";
import { observer } from "mobx-react";
import productStore from "../redux/productStore";

const SidebarProduct = observer(({ item }) => {
  const { image, price, title, id, amount } = item;
  const {removeFromCart, increment, decrement} = productStore
  return (
    <div  className="  py-3 px-3 flex items-center justify-between  shadow-lg ">
      <img className=" w-24 h-28" src={image} alt="" />
      <div className=" flex flex-col justify-between  gap-7">
        <div>
          <p>{title.slice(0, 25)}</p>
        </div>
        <div>
          <div className=" flex items-center justify-center  ">
            <button onClick={()=> decrement(id)} className=" w-8 h-8 bg-gray-400 rounded-full text-xl flex items-center justify-center">
              -
            </button>
            <p className="px-2">{(amount)}</p>
            <button  onClick={()=> increment(id)} className="w-8 h-8 bg-gray-400 rounded-full text-xl flex items-center justify-center">
              +
            </button>
            <p className="px-5">${(price).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col text-center justify-between">
        <div onClick={()=> removeFromCart(id)} className="pb-5 cursor-pointer">X</div>
        <div>Total ${(amount*price).toFixed(2)}</div>
        
      </div>
    </div>
  );
})

export default SidebarProduct;