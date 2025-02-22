import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList, getStoredWishList } from "../Utility/addToDB";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";

const Dashboard = () => {
  const [visibleDiv, setVisibleDiv] = useState("Cart");
  const [cartList, setstoreCartlist] = useState([]);
  const [wishList, setstoreWishlist] = useState([]);

  const allProducts = useLoaderData();

  useEffect(() => {
    if (!allProducts || !Array.isArray(allProducts)) return;

    const storeCartlist = getStoredCartList();
    const storeWishList = getStoredWishList();

    const filteredCartList = allProducts.filter((product) =>
      storeCartlist.includes(String(product.product_id))
    );

    const filteredWishtList = allProducts.filter((product) =>
      storeWishList.includes(String(product.product_id))
    );

    setstoreCartlist(filteredCartList);
    setstoreWishlist(filteredWishtList);
  }, [allProducts]);

  return (
    <div>
      <div className="text-center bg-purple-500 pt-7 pb-10">
        <h1 className="text-3xl font-extrabold text-white">Dashboard</h1>
        <p className="text-white font-base mt-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-5">
          <button
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              visibleDiv === "Cart"
                ? "bg-white text-purple-500 font-extrabold"
                : "bg-purple-500 text-white font-semibold"
            }`}
            onClick={() => setVisibleDiv("Cart")}
          >
            Cart
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              visibleDiv === "WishList"
                ? "bg-white text-purple-500 font-extrabold"
                : "bg-purple-500 text-white font-semibold"
            }`}
            onClick={() => setVisibleDiv("WishList")}
          >
            WishList
          </button>
        </div>
      </div>

      {/* Cart Section */}
      {visibleDiv === "Cart" && (
        <div className="p-4 bg-base-200 shadow-md">
          <p>This is your cart</p>
          <div className="grid grid-cols-1 gap-6">
            {cartList.length > 0 ? (
              cartList.map((product) => (
                <Cart key={product.product_id} product={product} />
              ))
            ) : (
              <p>No items in cart</p>
            )}
          </div>
        </div>
      )}

      {/* Wishlist Section */}
      {visibleDiv === "WishList" && (
        <div className="p-4 bg-base-200 shadow-md">
          <p>This is your wishlist</p>
          <div className="grid grid-cols-1 gap-6">
            {wishList.length > 0 ? (
              wishList.map((product) => (
                <WishList key={product.product_id} product={product} />
              ))
            ) : (
              <p>No items in wishlist</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
