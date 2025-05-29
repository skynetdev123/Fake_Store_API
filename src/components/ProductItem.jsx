import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppDispatchContext } from "../App";

import bolt from "../assets/bolt.svg";
import star from "../assets/star.svg";
import addcart from "../assets/add-cart.svg";

const ProductItem = ({ product }) => {
  const { id, image, title, price, rating } = product;
  const appDispatch = useContext(AppDispatchContext);

  // add item handler
  const addItem = () => {
    appDispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: { productId: product.id },
    });
  };

  return (
    <div className="flex flex-col justify-between gap-5 rounded-sm border border-gray-300 p-2 sm:p-3 md:p-4 lg:p-5">
      {/* product details */}
      <Link role="button" to={`/products/${id}`}>
        <div>
          <div className="flex items-center justify-center p-1 sm:p-2 md:p-3 lg:p-4">
            <img className="h-32" src={image} alt="product image" />
          </div>
          <div className="md:text-md text-sm font-semibold lg:text-lg">
            {`${title.slice(0, 30)}...`}
          </div>
          <div className="md:text-md flex justify-between gap-2 text-sm lg:text-lg">
            <div>₹{price}</div>

            <div className="md:text-md flex w-fit gap-1 text-sm lg:text-lg">
              <img src={star} alt="" />
              {rating.rate}
            </div>
          </div>
        </div>
      </Link>

      {/* product buttons */}
      <div className="md:text-md text-sm lg:text-lg">
        <Link
          role="button"
          onClick={addItem}
          to={`/cart`}
          className="flex w-full items-center justify-center gap-2 rounded-sm border border-gray-300 px-3 py-1 hover:bg-gray-100 sm:px-4 sm:py-2"
        >
          <img src={bolt} alt="bolt icon" className="text-white" />
          Buy Now
        </Link>
        <button
          onClick={addItem}
          className="my-1 flex w-full items-center justify-center gap-2 rounded-sm border border-orange-500 bg-orange-500 px-3 py-1 text-white hover:bg-orange-600/90 hover:text-white  sm:px-4 sm:py-2"
        >
          <img src={addcart} alt="cart icon" className="text-white" />
          <span className="hidden sm:block">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
