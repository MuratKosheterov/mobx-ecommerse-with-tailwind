import { observer } from "mobx-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Shop from "./pages/Shop";
import checkoutStore from "./redux/checkoutStore";
import Checkout from "./components/Checkout";

const App = observer(() => {
  const { openChekout } = checkoutStore;

  return (
    <div className=" App overflow-hidden">
      {openChekout ? 
        <Checkout />
       : 
        <>
          <Navbar />

          <Routes>
            <Route index element={<Shop />} />
          </Routes>
          <Sidebar />
          <Footer />
        </>
      }
    </div>
  );
});

export default App;