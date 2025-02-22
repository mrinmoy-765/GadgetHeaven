import React from "react";
import PropTypes from "prop-types";
import { CiCircleRemove } from "react-icons/ci";

const Cart = ({ product, onRemoveCart }) => {
  const { product_id, product_title, product_image, price, description } =
    product;

  return (
    <div>
      <div className="p-4 rounded-lg  bg-white flex relative">
        <div>
          <figure className=" py-2 flex justify-center">
            <img
              src={product_image}
              alt={product_title}
              className="h-[120px] object-cover rounded-md"
            />
          </figure>
        </div>

        <div className="ml-5">
          <h3 className="text-2xl font-bold mt-2">{product_title}</h3>
          <p className="text-base my-4 font-semibold text-gray-500">
            {description}
          </p>
          <p className="font-semibold text-lg">${price}</p>
        </div>

        <button
          onClick={() => onRemoveCart(product_id)}
          className="absolute top-2 right-2 text-2xl font-semibold text-red-400"
        >
          <CiCircleRemove />
        </button>
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  product: PropTypes.object,
  onRemoveCart: PropTypes.func.isRequired,
};
