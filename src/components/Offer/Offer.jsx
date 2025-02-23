import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import bundleOffer1 from "../../assets/offers/bundle-offer-01-400x400.webp";
import bundleOffer2 from "../../assets/offers/nagad-64-district-free-delivery-offer-400x400.webp";
import bundleOffer3 from "../../assets/offers/bkash-cashback-2025-400x400.webp";
import bundleOffer4 from "../../assets/offers/ocpc-gpu-offer-400x400.webp";
import bundleOffer5 from "../../assets/offers/gaming-chair-offer-400x400.webp";
import bundleOffer6 from "../../assets/offers/corsair-week-400x400.webp";
import { LiaCalendarSolid } from "react-icons/lia";
import { CiShop } from "react-icons/ci";
import useDocumentTitle from "../../useDocumentTitle";

const Offer = () => {
  useDocumentTitle("GadgetHeaven || Offer");
  return (
    <div>
      <div className="flex items-center mt-1.5 ml-2.5 gap-2 w-full">
        <span className="text-2xl text-pink-500">
          <BiSolidOffer />
        </span>
        <h1 className="text-lg font-bold text-gray-500">Offers</h1>
        <div className="divider divider-start w-screen pr-2.5"></div>
      </div>

      <div className="grid grid-cols-3 gap-6 place-items-center mt-3.5">
        {/* card-1 */}
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={bundleOffer1} alt="offers" />;
          </figure>
          <div className="mt-3 px-3.5 mb-7">
            <div className="flex justify-between">
              <div className="flex">
                <span className="text-2xl">
                  <LiaCalendarSolid />
                </span>
                <span className="text-sm mt-0.5 font-medium">
                  10 Feb 2025 - 25 Feb 2025
                </span>
              </div>
              <div className="flex">
                <span className="text-2xl">
                  <CiShop />
                </span>
                <p className="text-sm mt-0.5">Online Shop</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="text-center">
              <h1 className="font-semibold text-2xl">Bundle Offer</h1>
              <p className="text-base text-gray-500 my-3">
                Buy Together, Save More!
              </p>
              <button className="btn btn-outline btn-primary">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* card-2 */}
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={bundleOffer2} alt="offers" />;
          </figure>
          <div className="mt-3 px-3.5 mb-7">
            <div className="flex justify-between">
              <div className="flex">
                <span className="text-2xl">
                  <LiaCalendarSolid />
                </span>
                <span className="text-sm mt-0.5 font-medium">
                  10 Feb 2025 - 25 Feb 2025
                </span>
              </div>
              <div className="flex">
                <span className="text-2xl">
                  <CiShop />
                </span>
                <p className="text-sm mt-0.5">Online Shop</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="text-center">
              <h1 className="font-semibold text-lg">
                Nagad | 64 District Free Delivery Offer
              </h1>
              <p className="text-base text-gray-500 my-3">
                Pay with Nagad & Enjoy 64 District Free Delivery Offer!
              </p>
              <button className="btn btn-outline btn-primary">
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <img src={bundleOffer3} alt="offers" />
          <div className="mt-3 px-3.5 mb-7">
            <div className="flex justify-between">
              <div className="flex">
                <span className="text-2xl">
                  <LiaCalendarSolid />
                </span>
                <span className="text-sm mt-0.5 font-medium">
                  10 Feb 2025 - 25 Feb 2025
                </span>
              </div>
              <div className="flex">
                <span className="text-2xl">
                  <CiShop />
                </span>
                <p className="text-sm mt-0.5">Online Shop</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="text-center">
              <h1 className="font-semibold text-lg">
                bKash 10% Instant Cashback Offer!
              </h1>
              <p className="text-base text-gray-500 my-3">
                Pay with bKash & Enjoy 10% Instant Cashback!
              </p>
              <button className="btn btn-outline btn-primary">
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* card-4 */}
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={bundleOffer4} alt="offers" />;
          </figure>
          <div className="mt-3 px-3.5 mb-7">
            <div className="flex justify-between">
              <div className="flex">
                <span className="text-2xl">
                  <LiaCalendarSolid />
                </span>
                <span className="text-sm mt-0.5 font-medium">
                  10 Feb 2025 - 25 Feb 2025
                </span>
              </div>
              <div className="flex">
                <span className="text-2xl">
                  <CiShop />
                </span>
                <p className="text-sm mt-0.5">Online Shop</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="text-center">
              <h1 className="font-semibold text-2xl">
                OCPC Graphics Card Offer
              </h1>
              <p className="text-base text-gray-500 my-3">
                Get a Free OCPC LTR Mouse Pad with every OCPC GeForce RTX 3060
                Graphics Card
              </p>
              <button className="btn btn-outline btn-primary">
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* card-5 */}
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={bundleOffer5} alt="offers" />;
          </figure>
          <div className="mt-3 px-3.5 mb-7">
            <div className="flex justify-between">
              <div className="flex">
                <span className="text-2xl">
                  <LiaCalendarSolid />
                </span>
                <span className="text-sm mt-0.5 font-medium">
                  10 Feb 2025 - 25 Feb 2025
                </span>
              </div>
              <div className="flex">
                <span className="text-2xl">
                  <CiShop />
                </span>
                <p className="text-sm mt-0.5">Online Shop</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="text-center">
              <h1 className="font-semibold text-2xl">Gaming Chair Offer</h1>
              <p className="text-base text-gray-500 my-3">
                Buy Gaming Chair & Get Exciting Discount!
              </p>
              <button className="btn btn-outline btn-primary">
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* card-6 */}
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={bundleOffer6} alt="offers" />;
          </figure>
          <div className="mt-3 px-3.5 mb-7">
            <div className="flex justify-between">
              <div className="flex">
                <span className="text-2xl">
                  <LiaCalendarSolid />
                </span>
                <span className="text-sm mt-0.5 font-medium">
                  10 Feb 2025 - 25 Feb 2025
                </span>
              </div>
              <div className="flex">
                <span className="text-2xl">
                  <CiShop />
                </span>
                <p className="text-sm mt-0.5">Online Shop</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="text-center">
              <h1 className="font-semibold text-2xl">AOC Monitor Offer</h1>
              <p className="text-base text-gray-500 my-3">
                Buy Selected AOC Monitor & Get Exciting Gifts View Details
              </p>
              <button className="btn btn-outline btn-primary">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
