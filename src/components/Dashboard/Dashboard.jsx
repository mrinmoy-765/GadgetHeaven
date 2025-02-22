import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList, getStoredWishList } from "../Utility/addToDB";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";

const Dashboard = () => {
  const [visibleDiv, setVisibleDiv] = useState("Cart"); // Set default to Cart
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

    const filteredWishList = allProducts.filter((product) =>
      storeWishList.includes(String(product.product_id))
    );

    setstoreCartlist(filteredCartList);
    setstoreWishlist(filteredWishList);
  }, [allProducts]);

  // Function to handle product removal(wish list)
  const handleRemoveProduct = (id) => {
    const updatedWishList = wishList.filter(
      (product) => product.product_id !== id
    );
    setstoreWishlist(updatedWishList);

    // Update local storage
    const storedWishList = JSON.parse(localStorage.getItem("wish-list")) || [];
    const updatedStoredWishList = storedWishList.filter(
      (productId) => productId !== String(id)
    );

    localStorage.setItem("wish-list", JSON.stringify(updatedStoredWishList));
  };

  // Function to handle product removal(cart list)
  const handleRemoveProduct2 = (id) => {
    const updatedCartList = cartList.filter(
      (product) => product.product_id !== id
    );
    setstoreCartlist(updatedCartList);

    // Update local storage
    const storedCartList = JSON.parse(localStorage.getItem("cart-list")) || [];
    const updatedStoredCartList = storedCartList.filter(
      (productId) => productId !== String(id)
    );

    localStorage.setItem("cart-list", JSON.stringify(updatedStoredCartList));
  };

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
          <div className="grid grid-cols-1 gap-6">
            {cartList.length > 0 ? (
              cartList.map((product) => (
                <Cart
                  key={product.product_id}
                  product={product}
                  onRemoveCart={handleRemoveProduct2}
                />
              ))
            ) : (
              <p className="text-2xl font-extrabold text-red-500 text-center">
                No items in cart
              </p>
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
                <WishList
                  key={product.product_id}
                  product={product}
                  onRemove={handleRemoveProduct}
                />
              ))
            ) : (
              <p className="text-2xl font-extrabold text-red-500 text-center">
                No items in wishlist
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
