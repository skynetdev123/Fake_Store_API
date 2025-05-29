import { Link, useParams } from "react-router-dom";
import { useContext } from "react";

import Header from "../components/Header";
import BackArrowIcon from "../assets/back.svg";
import star from "../assets/star.svg";
import cart from "../assets/add-cart.svg";
import bolt from "../assets/bolt.svg";
import { AppContext, AppDispatchContext } from "../App";

const Product = () => {
  // get app context
  const appContext = useContext(AppContext);
  const appDispatch = useContext(AppDispatchContext);

  // get product id from URL
  const { productId } = useParams();
  const currentProduct = appContext.products[Number(productId)];

  // add item handler
  const addItem = () => {
    appDispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: { productId: Number(productId) },
    });
  };

  return (
    <>
      {/* header */}
      <Header />

      {/* product */}
      <main className="mx-4 md:mx-16 lg:mx-24 2xl:mx-auto 2xl:max-w-[1024px]">
        {/* back button */}
        <div className="my-5 flex items-center gap-2">
          <Link role="button" to="/">
            <img src={BackArrowIcon} alt="back arrow" />
          </Link>
          <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl">
            Product Details
          </h1>
        </div>

        {/* product details */}
        {appContext.isLoading ? (
          <>Loading...</>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* product image */}
            <div className="border">
              <div className="flex h-80 items-center justify-center p-10">
                <img
                  className="h-full"
                  src={currentProduct?.image}
                  alt="image"
                />
              </div>
            </div>

            {/* product description */}
            <div className="flex flex-col justify-between gap-5">
              <div className="flex flex-col gap-2">
                <h1 className="text font-semibold md:text-xl lg:text-2xl">
                  {currentProduct?.title}
                </h1>
                <div className="flex items-center gap-2">
                  <p className="md:text-md text-sm lg:text-lg">
                    ₹{currentProduct?.price}
                  </p>
                  <div className="md:text-md flex w-fit gap-1 text-sm lg:text-lg">
                    <img src={star} alt="star" />
                    {currentProduct?.rating.rate}
                  </div>
                  <div className="py lg:text-md w-fit rounded-full bg-blue-500 px-3 text-sm font-semibold text-white">
                    {currentProduct?.category}
                  </div>
                </div>
                <p className="lg:text-md text-sm">
                  {currentProduct?.description}
                </p>
              </div>
              <div className="md:text-md flex gap-2 text-sm lg:text-lg">
                <button
                  onClick={addItem}
                  className="my-1 flex w-full items-center justify-center gap-2 rounded-sm border border-orange-500 bg-orange-500 px-3 py-1 text-white hover:bg-orange-600/90 hover:text-white  sm:px-4 sm:py-2"
                >
                  <img src={cart} alt="cart icon" className="text-white" />
                  <span>Add to Cart</span>
                </button>
                <Link
                  role="button"
                  onClick={addItem}
                  to={`/cart`}
                  className="flex w-full items-center justify-center gap-2 rounded-sm border border-gray-300 px-3 py-1 hover:bg-gray-100 sm:px-4 sm:py-2"
                >
                  <img src={bolt} alt="bolt icon" className="text-white" />
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Product;
