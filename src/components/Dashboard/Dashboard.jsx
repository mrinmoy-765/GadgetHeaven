import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList, getStoredWishList } from "../Utility/addToDB";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import { LiaSortAmountDownSolid } from "react-icons/lia";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import successIcon from "../../assets/Group.png";
import useDocumentTitle from "../../useDocumentTitle";

const Dashboard = () => {
  useDocumentTitle("GadgetHeaven || Dashboard");

  const [visibleDiv, setVisibleDiv] = useState("Cart"); // Set default to Cart
  const [cartList, setstoreCartlist] = useState([]);
  const [wishList, setstoreWishlist] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotalPrice(getTotalPrice(cartList)); // Update total price when cartList changes
  }, [cartList]);

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

  const sortByPrice = () => {
    console.log("trigger");
    const sortedList = [...cartList].sort((a, b) => b.price - a.price);
    setstoreCartlist(sortedList);
  };

  const getTotalPrice = (cartList) => {
    if (!Array.isArray(cartList) || cartList.length === 0) return 0;
    return cartList.reduce((sum, product) => sum + product.price, 0).toFixed(2);
  };

  const purchase = () => {
    // Remove cart data from local storage
    localStorage.removeItem("cart-list");

    // Clear the cart state
    setstoreCartlist([]);

    const ToastContent = ({ closeToast }) => (
      <div className="flex flex-col items-center text-center w-full">
        <img src={successIcon} alt="Success" className="w-12 h-12 mb-2" />

        <p className="text-lg font-semibold text-green-700">
          Payment Successful!!
        </p>

        <hr className="w-full my-2 border-gray-300" />

        <p className="text-sm text-gray-600 my-3.5">Thanks for Purchasing</p>
        <p className="text-sm font-bold">Total: ${totalPrice}</p>

        <button
          onClick={() => {
            closeToast();
            navigate("/");
          }}
          className="mt-7 px-6 py-2 bg-gray-700 text-white font-bold rounded-2xl hover:bg-red-500"
        >
          Close
        </button>
      </div>
    );

    toast(<ToastContent />, {
      position: "top-center",
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      className: "flex justify-center items-center w-full", // Centers content
      bodyClassName: "text-center", // Centers text inside body
      toastId: "custom-toast", // Prevents duplicates
    });
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
          <div className="mb-3 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Cart</h1>
            </div>
            <div className="flex items-center gap-4">
              {" "}
              {/* Ensures proper alignment */}
              <span className="text-base font-bold">
                Total Price: ${totalPrice}
              </span>
              <button
               // disabled={cartList.length === 0 || 1}
                onClick={sortByPrice}
                className={`bg-white text-lg text-purple-500 border border-purple-500 border-b-pink-500 rounded-3xl px-4 py-1.5 flex items-center ${
                  cartList.length <= 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Sort by Price
                <LiaSortAmountDownSolid className="ml-2" />
              </button>
              <button
                type="button"
                onClick={purchase}
                // disabled={cartList.length === 0}
                className={`text-white bg-gradient-to-b from-purple-500 via-pink-300 to-pink-500 hover:bg-gradient-to-br font-medium rounded-3xl text-lg px-4 py-1.5 text-center me-2 mb-2 border-0 mt-1.5 ${
                  cartList.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Purchase
              </button>
            </div>
          </div>
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
          <p className="text-2xl text-gray-500 font-bold">Wishlist</p>
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
