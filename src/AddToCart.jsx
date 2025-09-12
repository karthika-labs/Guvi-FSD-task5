import React, { useState } from "react";
function AddToCart({ product, handleCart,cart }) {


 
 

  // state to hold alert popup
  const [alert, setAlert] = useState(false);

  
  


   // state to hold items added already toast
  const [showToast, setShowToast] = useState(false);

  // state to hold items added successfully toast
  const [ShowToastSuccess, setShowToastSuccess] = useState(false);


 //1.when add to card clicked it will setAlert=true ask,...Do you want to add this product to cart?
 // 2 .."handleAlertConfirm" confirm=> add items,(setShowToastSuccess=true)success toast, alreadyInCart state true,
// 3. if we again click add to card call "handleAlert" checks "alreadyInCart" ,if it is true ("ShowToast=true(items added already toast)  ,  ShowToastSuccess=false") pop "items added already toast"


  let handleAlert = () => { 
    //  to check items added already in cart
    const alreadyInCart = cart.some(itemInCart => itemInCart.title === product.title);
    if (alreadyInCart) {
      setShowToastSuccess(false);   // show "already added"
      setShowToast(true);
    } else {
      setAlert(true);  // show confirmation alert
    }
  };
  // close
  let handleAlertClose = () => {
    setAlert(false);
  };
//  confirm
  let handleAlertConfirm = (item) => {
    

      handleCart(product);

      setShowToastSuccess(true);
      setShowToast(false);
       setAlert(false);
  };

  let handleAdded = () => {
      //close two toast
   
    setShowToast(false);
    setShowToastSuccess(false);
  };
  return (
    <>
    
      <button
        className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-500 transform hover:scale-105 dark:focus:ring-blue-800"
        onClick={() => handleAlert()}
      >
        Add to Cart
      </button>
      {showToast && (
        <div
          id="toast-warning"
          className="toast-zoom fixed left-1/4 top-1/4 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
            <span className="sr-only">Warning icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">
            Already added to the cart
          </div>
          <button
            onClick={() => handleAdded()}
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-warning"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
      {ShowToastSuccess && (
        <div
          id="toast-success"
          className="toast-zoom flex fixed left-1/4 top-1/4 items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-sm font-normal ">
            Item added successfully.
          </div>
          <button
            onClick={() => handleAdded()}
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}

      {/* 1st ALERT */}
      {alert && (
        <div
          class="fixed left-1/4 top-1/4 z-[1000] flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
          role="alert"
        >
          <svg
            class="shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>

          <div>Do you want to add this product to cart?</div>
          <div>
            <button
              onClick={handleAlertConfirm}
              class="ms-4 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Yes
            </button>
            <button
              onClick={handleAlertClose}
              class="ms-2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 hover:text-blue-700 focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddToCart;


