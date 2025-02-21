import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, product_title, product_image, price } = gadget;

  return (
    <div className="card bg-base-100 w-96  ">
      <figure className="w-full h-64 p-4">
        <img
          src={product_image}
          alt={product_title}
          className="w-full h-full object-cover rounded"
        />
      </figure>

      <div className="card-body">
        <h2 className="text-2xl font-bold">{product_title}</h2>

        <p className="text-gray-500 font-semibold mb-2">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/Gadgets/${product_id}`}>
            <button className="border border-purple-500 border-b-pink-500 px-6 py-2 rounded-3xl font-semibold text-lg text-purple-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ✅ Define PropTypes for validation
Gadget.propTypes = {
  gadget: PropTypes.shape({
    product_id: PropTypes.string.isRequired,
    product_title: PropTypes.string.isRequired,
    product_image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    Specification: PropTypes.arrayOf(PropTypes.string),
    availability: PropTypes.bool,
    rating: PropTypes.number,
  }).isRequired,
};

export default Gadget;
