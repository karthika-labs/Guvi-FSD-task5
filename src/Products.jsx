import { useState } from "react";
import Rating from "./Rating";
import AddToCart from "./AddToCart";
function Products({ product, handleCart,cart }) {

  // state for overview cards
  const [overview, setOverview] = useState(null);

  // state for overview cards alert popup
  const [alert, setAlert] = useState(false);

  // handle alert open 
  let handleOverview = () => {
    setAlert(true);
  };


  // // handle  open product overview when clicks confirm
  let handleConfirm = () => {
    setAlert(false);
    setOverview(product);
  };

  // // handle  dont product overview when clicks close
  let handleCancel = () => {
    setAlert(false);
  };

  return (
    <>
      <div className="righteous-regular  ">
        {/* <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> */}
        <div className="bg-[#E0E0E0] rounded-lg shadow-md p-4 flex flex-col items-center justify-center gap-1 h-full">
          <div className="flex flex-1 grow flex-wrap flex-col gap-2 px-4 justify-items-center  ">
            <img
              src={product.image}
              className="w-full grow  aspect-square rounded-lg  object-contain group-hover:opacity-75 xl:aspect-7/8"
              onClick={() => handleOverview()}
            ></img>
            {alert && (
              <div className="fixed poppins-bold righteous-regular   flex items-center p-4 mb-4 text-blue-800 border-t-4 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800">
                <svg
                  className="shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div className="ms-3 text-sm font-medium">
                  Are you sure you want to view this product?
                  <div className="mt-2 space-x-2">
                    <button
                      onClick={handleConfirm}
                      className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
            {overview === product && (
              // <div className="flex max-w-4/5 mx-auto  mt-16 h-screen  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 absolute right-0 top-0 left-0 mt-12 text-white ">
              <div className=" poppins-bold  fixed inset-0 z-50 flex items-center justify-center bg-black/80   overflow-auto">
                <div class="w-full max-w-sm overflow-auto hide-scrollbar h-full flex flex-col gap-8 items-center    mx-auto bg-[#D4AF37] border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700">
                  <a href="#">
                    <img
                      class="p-8 rounded aspect-square w-100 h-100"
                      src={product.image}
                      alt="Overview image"
                    />
                  </a>
                  <div class="px-5 pb-5">
                    <a href="#">
                      <h5 class="  text-xl font-semibold tracking-tight text-[#4B2E00] ">
                        {product.title}
                      </h5>
                    </a>
                    <a href="#">
                      <h5 class="text-s font-[14px] tracking-tight text-gray-900 dark:text-white">
                        {product.description}
                      </h5>
                    </a>
                    <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold  text-[#4B2E00]">
                        ₹{product.price}
                      </span>
                      <div class="flex items-center justify-center mt-2.5 mb-5">
                        <div class="flex items-center justify-center space-x-1 rtl:space-x-reverse"></div>
                        <span class="flex items-center justify-center  bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                          <Rating  product={product}></Rating>
                        </span>
                      </div>
                    </div>
                    <div className="flex  gap-18 items-center justify-center">
                      <a
                        onClick={() => handleCart(product)}
                        href="#"
                        class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add to cart
                      </a>

                      <button
                        onClick={() => setOverview(null)}
                        type="button"
                        class=" flex mt-2 cursor-pointer  items-center justify-center text-blue-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                      >
                        Back
                        <svg
                          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!(product.category === "jewelery") && (
              <div className="grow flex flex-row gap-2 justify-center items-center">
                <button className="  aspect-square w-3 h-3 rounded-full bg-rose-900 border border-white"></button>

                <button className="aspect-square w-3 h-3 rounded-full bg-black border border-white"></button>

                <button className="aspect-square w-3 h-3 rounded-full bg-green-700 border border-white"></button>
              </div>
            )}

            <div className="text-center grow text-blue-600 poppins-bold font-[700]">₹{product.price}</div>
            <div className="text-start poppins-bold grow ">{product.title}</div>
            {/* RATING COMPONENt */}
            <Rating product={product}></Rating>

            {/* ADD TO CART */}
            <AddToCart className="grow" product={product} handleCart={handleCart} cart={cart}></AddToCart>

           
          </div>
        </div>
       
      </div>
    </>
  );
}
export default Products;
