import { observer } from "mobx-react";
import React from "react";
import checkoutStore from "../redux/checkoutStore";
import productStore from "../redux/productStore";

const Checkout = observer(() => {
  const { cartItems, total, tax } = productStore; 
  const { addCheckout } = checkoutStore;
  return (
    <>
      <h1 className="text-center py-10 font-semibold text-5xl uppercase ">
        Checkout page
      </h1>
      <div className=" grid xl:grid-cols-2 md:px-32 py-10  ">
        <div>
          <form>
            <div className="flex flex-col px-14 ">
              <h1 className=" font-medium text-2xl py-5">
                Contact information
              </h1>
              <label className=" mb-2">Email adress</label>
              <input
                className=" border rounded-md py-3"
                type="email"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col px-14 ">
              <h1 className=" font-medium text-2xl py-5">Payment detail</h1>
              <label className=" mb-2">Card number</label>
              <input
                className=" border rounded-md py-3"
                type="number"
                name=""
                id=""
              />
            </div>
            <div className=" flex px-12 py-1">
              <div className="flex flex-col px-2 w-[70%]">
                <label className=" mb-2">Expiration date (MM/YY)</label>
                <input
                  className=" border rounded-md py-3"
                  type="date"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col px-2 w-[30%] ">
                <label className=" mb-2">CVC</label>
                <input
                  className=" border rounded-md py-3"
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="flex flex-col px-14 py-5 ">
              <h1 className=" font-medium text-2xl py-5">Shipping adress</h1>
              <label className=" mb-2">Adress</label>
              <input
                className=" border rounded-md py-3"
                type="adress"
                name=""
                id=""
              />
            </div>
            <div className="flex items-center justify-between px-14 gap-16 ">
              <div>
                <label className=" mb-2">City</label>
                <input
                  className=" border rounded-md py-3  w-32"
                  type="adress"
                  name=""
                  id=""
                />
              </div>
              <div>
                <label className=" mb-2">State/Province</label>
                <input
                  className=" border rounded-md py-3 w-32"
                  type="adress"
                  name=""
                  id=""
                />
              </div>
              <div>
                <label className=" mb-2">Postal code</label>
                <input
                  className=" border rounded-md py-3 w-32"
                  type="adress"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="mt-10 flex justify-between px-20 ">
              <button className="px-5 py-2 bg-teal-700 text-white w-44">
                Pay
              </button>
              <button
                onClick={() => addCheckout()}
                className=" px-5 py-2 bg-gray-800 text-white w-44"
              >
                Back
              </button>
            </div>
          </form>
        </div>
        <div className=" p-14 flex flex-col border-l-2">
          {cartItems.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex items-center bg-white justify-between px-5 my-1">
                  <div className="  py-2 flex  space-x-5">
                    <img className=" w-[80px] " src={item.image} alt="" />
                    <div className=" flex flex-col justify-between ">
                      <p className=" uppercase font-semibold mb-2 ">
                        {item.category}
                      </p>
                      <p>{item.title}</p>
                      <p className=" font-semibold"> Piece: {item.amount}</p>
                    </div>
                  </div>
                  <div className=" font-semibold">${item.price}</div>
                </div>
              </div>
            );
          })}
          <div>
            <div className="py-5 ">
              <div className=" flex items-center justify-between">
                <p>Subtotal</p>
                <p>$ {total}</p>
              </div>
              <div className=" flex items-center justify-between">
                <p className="">Taxes</p>
                <p>$ {tax.toFixed(2)}</p>
              </div>
            </div>
            <div className=" flex items-center justify-between border-t-2 mt-5">
              <p className="text-2xl">Total</p>
              <p className=" text-2xl"> $ {(total + tax).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Checkout;
