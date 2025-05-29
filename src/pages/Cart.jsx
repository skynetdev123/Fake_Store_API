import { Link } from "react-router-dom";
import { useContext } from "react";

import { AppContext } from "../App";
import BackArrowIcon from "../assets/back.svg";
import CartItem from "../components/CartItem";
import Header from "../components/Header";

import plan from "../assets/plan.svg";
import add from "../assets/add-circle.svg";

const Cart = () => {
  // get app context
  const appContext = useContext(AppContext);

  return (
    <>
      <Header />
      {/* cart */}
      <main className="mx-4 md:mx-16 lg:mx-24 2xl:mx-auto 2xl:max-w-[1024px]">
        <div className="my-5 flex items-center gap-2">
          <Link role="button" to="/">
            <img src={BackArrowIcon} alt="back arrow" />
          </Link>
          <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl">Cart</h1>
        </div>

        {/* cart details */}
        <div className="grid grid-cols-1 gap-5  md:grid-cols-[auto_250px]">
          {/* while loading display Loading... */}
          {appContext.isLoading ? (
            "Loading..."
          ) : (
            // after loading display cart items
            <ul className="flex flex-col items-center justify-center gap-2 md:mx-0">
              {appContext.cart?.products?.length !== 0 ? (
                appContext.cart?.products?.map((item) => {
                  return (
                    // Cart Item
                    <CartItem
                      key={item.productId}
                      product={appContext.products[item.productId]}
                      quantity={item.quantity}
                    />
                  );
                })
              ) : (
                // if no cart item found show message
                <p>No Item In Cart</p>
              )}

              <Link
                to={"/"}
                className="my-1 flex w-fit items-center justify-center gap-2 rounded-sm border border-gray-300 px-3 py-1 hover:bg-gray-100 sm:px-4 sm:py-2"
              >
                <img src={add} alt="bolt icon" className="text-white" />
                <span>Buy More</span>
              </Link>
            </ul>
          )}

          {/* checkout  details*/}
          <section className="sticky bottom-0 flex h-36 flex-col justify-between border bg-white px-6 py-5 drop-shadow md:h-56  ">
            <ul>
              <li className="flex justify-between">
                <span>Subtotal</span>{" "}
                <span>${Math.round(appContext?.cart?.subtotal)}</span>
              </li>
              <li className="flex justify-between">
                <span>Discount</span> <span>-$100</span>
              </li>
              <li className="flex justify-between font-semibold">
                <span>Total</span>{" "}
                <span>
                  ${Math.max(Math.round(appContext?.cart?.subtotal - 100), 0)}
                </span>
              </li>
            </ul>
            <button
              disabled
              className="my-1 flex w-full items-center justify-center gap-2 rounded-sm border border-gray-300 px-3 py-1 hover:bg-gray-100 sm:px-4 sm:py-2"
            >
              <img src={plan} alt="bolt icon" className="text-white" />
              <span>Checkout</span>
            </button>
          </section>
        </div>
      </main>
    </>
  );
};

export default Cart;
