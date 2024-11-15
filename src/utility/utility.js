import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Add to Cart Function
const getStoredCartList = () => {
  const storedListStr = localStorage.getItem("cart-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredCartList = (id) => {
  const storedList = getStoredCartList();
  if (storedList.includes(id)) {
    toast.warning("You have already added this product in your Cart");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storedListStr);
    toast.success("Product successfully added in your Cart");
  }
};

// Add to WishList Function
const getStoredWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    toast.warning("This Product has already in your Wishlist");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
    toast.success("Product successfully added in your Wishlist");
  }
};

export {
  addToStoredCartList,
  addToStoredWishList,
  getStoredCartList,
  getStoredWishList,
};
