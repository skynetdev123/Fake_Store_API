import { useContext, useId } from "react";

import ProductShimmer from "../components/ProductShimmer";
import ProductItem from "../components/ProductItem";
import Header from "../components/Header";
import { AppContext } from "../App";
import { toPascalCase } from "../utils/helpers";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Home = () => {
  // get app context
  const appContext = useContext(AppContext);

  return (
    <>
      {/* header */}
      <Header />

      {/* all products */}
      <main className="mx-4 md:mx-16 lg:mx-24 2xl:mx-auto 2xl:max-w-[1024px]">
        {categories.map((currentCategory) => {
          return (
            <div key={useId()}>
              <h2 className="text-md my-5 font-semibold sm:text-lg md:text-xl lg:text-2xl">
                {toPascalCase(currentCategory)}
              </h2>
              {/* while loading display shimmer */}
              {appContext.isLoading ? (
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {Array(8)
                    .fill("")
                    .map((item, index) => (
                      <ProductShimmer key={index} />
                    ))}
                </div>
              ) : (
                // after loading display products
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {appContext.products?.length !== 0 ? (
                    Object.values(appContext.products)
                      .filter((product) => product.category === currentCategory)
                      .map((currentProduct) => {
                        return (
                          // Product Item
                          <ProductItem
                            key={currentProduct.id}
                            product={currentProduct}
                          />
                        );
                      })
                  ) : (
                    // if products item show message
                    <p>No Items Found</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Home;
