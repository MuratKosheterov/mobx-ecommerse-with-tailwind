import React from "react";
import { observer } from "mobx-react";
import producStore from "../redux/productStore";
import SidebarProduct from "./SidebarProduct";
import cartStore from "../redux/cartStore";
import checkoutStore from "../redux/checkoutStore";

const Sidebar = observer(() => {
  const { cartItems, reset, amount } = producStore;
  const { cartOpen, isOpen } = cartStore;
  const { addCheckout } = checkoutStore;
  return (
    <div
      className={`w-[450px] bottom-0 fixed top-0 right-0  ${
        isOpen ? "right-0" : "right-[-450px]"
      }  bg-white flex flex-col transition-all duration-500 ease-in`}
    >
      <div className=" flex items-center justify-between p-6 shadow-md">
        <p>Items in your cart {amount}</p>
        <i
          onClick={() => cartOpen()}
          className="bi bi-door-closed text-2xl cursor-pointer "
        ></i>
      </div>
      <div className="overflow-auto">
        {cartItems.map((item) => {
          return <SidebarProduct key={item.id} item={item} />;
        })}
      </div>
      <div className=" grid grid-cols-2 ">
        <button onClick={() => reset()} className=" py-3  bg-gray-400  text-white">
          Reset
        </button>

        <button
          onClick={() => addCheckout()}
          className="bg-green-500  text-center text-white hover:text-orange-500">
          Checkout
        </button>
      </div>
    </div>
  );
});

export default Sidebar;
