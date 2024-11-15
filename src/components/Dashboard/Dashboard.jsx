import { useEffect, useState } from "react";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList, getStoredWishList } from "../../utility/utility";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const productData = useLoaderData();
  const [activeComponent, setActiveComponent] = useState("Cart");

  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    const storedCartList = getStoredCartList();
    const productCartList = productData.filter((product) =>
      storedCartList.includes(product.product_id)
    );
    setCartList(productCartList);
  }, []);
  const handleRemoveFromCart = (id) => {
    const storedCartList = getStoredCartList();
    const updateCartList = storedCartList.filter(
      (productId) => productId !== id
    );
    localStorage.setItem("cart-list", JSON.stringify(updateCartList));
    setCartList((prevCartList) =>
      prevCartList.filter((product) => product.product_id !== id)
    );
    toast.info("Product removed from Cart");
  };

  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const storedWishList = getStoredWishList();
    const productWishList = productData.filter((product) =>
      storedWishList.includes(product.product_id)
    );
    setWishList(productWishList);
  }, []);
  const handleRemoveFromWishlist = (id) => {
    const storedWishList = getStoredCartList();
    const updateWishList = storedWishList.filter(
      (productId) => productId !== id
    );
    localStorage.setItem("wish-list", JSON.stringify(updateWishList));
    setWishList((prevWishList) =>
      prevWishList.filter((product) => product.product_id !== id)
    );
    toast.info("Product removed from Wishlist");
  };

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
        {activeComponent === "Cart" && (
          <Cart
            handleRemoveFromCart={handleRemoveFromCart}
            cartList={cartList}
            setCartList={setCartList}
          ></Cart>
        )}
        {activeComponent === "Wishlist" && (
          <Wishlist
            handleRemoveFromWishlist={handleRemoveFromWishlist}
            wishList={wishList}
          ></Wishlist>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </main>
  );
};

export default Dashboard;
