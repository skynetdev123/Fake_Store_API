import star from "../assets/star.svg";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";
import { useContext } from "react";
import { AppDispatchContext } from "../App";
import { Link } from "react-router-dom";

const CartItem = ({ product, quantity }) => {
  const appDispatch = useContext(AppDispatchContext);

  // add item handler
  const addItem = () => {
    appDispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: { productId: product.id },
    });
  };

  //remove item handler
  const removeItem = () => {
    appDispatch({
      type: "REMOVE_PRODUCT_FROM_CART",
      payload: { productId: product.id },
    });
  };

  return (
    <div className="grid w-full grid-cols-[80px_auto] items-center border p-2 md:grid-cols-[150px_auto] lg:grid-cols-[150px_auto_150px]">
      {/* product image */}
      <Link role="button" to={`/products/${product.id}`}>
        <div className="flex h-24 items-center justify-center p-3 md:h-36 md:p-4 lg:h-40 lg:p-5">
          <img className="h-full" src={product.image} alt="image" />
        </div>
      </Link>

      {/* product description */}
      <div className="flex flex-col justify-between gap-3 md:gap-4 lg:gap-5">
        <div>
          <h1 className="text-md font-semibold md:text-lg lg:text-xl">
            {product.title}
          </h1>
          <div className="flex items-center gap-2">
            <p className="md:text-md text-sm lg:text-lg">₹{product.price}</p>
            <div className="md:text-md flex w-fit gap-1 text-sm lg:text-lg">
              <img src={star} alt="star" />
              {product.rating.rate}
            </div>
            <div className="lg:text-md hidden w-fit rounded-full bg-blue-500 px-3 text-xs font-semibold text-white md:block">
              {product.category}
            </div>
          </div>
        </div>

        <p className="lg:text-md hidden text-sm md:block">{`${product.description.slice(
          0,
          50,
        )}...`}</p>
      </div>

      {/* product quantity buttons */}
      <div className="col-start-1 col-end-3 flex w-fit items-center justify-center gap-3 place-self-end border p-1 md:gap-4 md:p-2 lg:col-start-auto lg:col-end-auto lg:w-auto lg:gap-5">
        <button
          className="flex h-5 w-5 items-center justify-center bg-orange-500 text-white md:h-8 md:w-8 lg:h-10 lg:w-10"
          onClick={removeItem}
        >
          <img src={minus} alt="minus" />
        </button>
        <span>{quantity}</span>
        <button
          className="flex h-5 w-5 items-center justify-center bg-orange-500 text-white md:h-8 md:w-8 lg:h-10 lg:w-10"
          onClick={addItem}
        >
          <img src={plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
