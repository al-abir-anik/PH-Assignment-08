import { useState } from "react";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("Cart");
  const productData = useLoaderData();
  

  return (
    <main className="bg-[#f6f6f6]">
      <div className="w-full h-fit py-10 bg-[#9538e2] text-center space-y-4">
        <h2 className="font-bold text-3xl text-white">Product Details</h2>
        <p className="font-normal text-base text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="space-x-10 pt-3">
          <button
            onClick={() => setActiveComponent("Cart")}
            className={`btn rounded-full px-10 text-lg ${
              activeComponent === "Cart"
                ? "bg-white font-bold text-[#9538e2] hover:bg-white hover:border-white"
                : "btn-outline border border-white text-white hover:bg-white hover:border-white hover:text-[#9538e2]"
            }`}
          >
            Cart{productData.product_title}
          </button>
          <button
            onClick={() => setActiveComponent("Wishlist")}
            className={`btn rounded-full px-10 text-lg ${
              activeComponent === "Wishlist"
                ? "bg-white font-bold text-[#9538e2] hover:bg-white"
                : "btn-outline border border-white text-white hover:bg-white hover:border-white hover:text-[#9538e2]"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div>
        {activeComponent === "Cart" && <Cart productData={productData}></Cart>}
        {activeComponent === "Wishlist" && (
          <Wishlist productData={productData}></Wishlist>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
