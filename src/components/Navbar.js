import React from "react";
import { observer } from "mobx-react";
import cartStore from "../redux/cartStore";
import productStore from "../redux/productStore";

const Navbar = observer(() => {
  const {cartOpen} = cartStore
  const {amount} = productStore
  return (
    <div className="bg-gray-400 text-white">
      <nav className="nav flex justify-between items-center px-5 md:px-44">
        <div className="logo uppercase text-2xl py-5">Logo</div>
        <ul className=" flex justify-end items-center mx">
          <li className=" uppercase font-semibold ">
            <button onClick={() => cartOpen()} className="flex items-center">
              <i className="bi bi-bag text-2xl"></i>
              <p className="text-lg ms-1">{amount}</p>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
});

export default Navbar;
