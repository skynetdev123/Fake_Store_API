import { Link } from "react-router-dom";

const ProductShimmer = () => {
  return (
    <div className="flex flex-col justify-between gap-5 rounded-sm border border-gray-300 p-2 sm:p-3 md:p-4 lg:p-5">
      {/* product details */}
      <Link>
        <div>
          <div className="flex items-center justify-center p-1 sm:p-2 md:p-3 lg:p-4">
            <svg
              className="h-32 w-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
            </svg>
          </div>
          <div className="mb-4 h-2.5 w-24   bg-gray-400"></div>
          <div className="mb-2.5 h-2 bg-gray-200"></div>
          <div className="mb-2.5 h-2 bg-gray-200"></div>
          <div className="mb-2.5 h-2 bg-gray-200"></div>
        </div>
      </Link>

      {/* product buttons */}
      <div className="md:text-md text-sm lg:text-lg">
        <div className="mb-2.5 h-8 bg-gray-200"></div>
        <div className="bg-gray-20 mb-2.5 h-8 bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ProductShimmer;
