import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getStoredCartList = () => {
  const storedListStr = localStorage.getItem("cart-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoreCartList = (id) => {
  const storedList = getStoredCartList();
  if (storedList.includes(id)) {
    // alert("Gadget already exists in your Cart!!!");
    toast.warning("Gadget already exists in your Cart!", {
      position: "top-right",
      autoClose: 2000,
    });
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storedListStr);
    // alert("Gadget added in your Cart!!!");
    toast.success("Gadget added in your Cart!", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};

const getStoredWishList = () => {
  const storedWishStr = localStorage.getItem("wish-list");
  if (storedWishStr) {
    const storedWish = JSON.parse(storedWishStr);
    return storedWish;
  } else {
    return [];
  }
};

const addToStoreWishList = (id) => {
  const storedWish = getStoredWishList();
  if (storedWish.includes(id)) {
    //alert("Gadget already exists in your wish list!");
    toast.warning("Gadget already exists in your WishList!", {
      position: "top-right",
      autoClose: 2000,
    });
  } else {
    storedWish.push(id);
    const storedWishStr = JSON.stringify(storedWish);
    localStorage.setItem("wish-list", storedWishStr);
    //alert("Gadget added in your WishList!!!");
    toast.success("Gadget added in your WishList!", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};

export {
  addToStoreCartList,
  addToStoreWishList,
  getStoredCartList,
  getStoredWishList,
};
