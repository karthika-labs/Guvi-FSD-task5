import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

function Cart({ product, handleRemove }) {
  // state to hold cart open ,close
  const [cart, setCart] = useState(false);

  // state to add quantity
  const [add, setAdd] = useState({});

  // state to hold total
  const [total, setTotal] = useState(0);

  // state to check discount >1000 only for styling
  const [isTotalMore1000, setIsTotalMore1000] = useState(false);

  // alert popup open
  const [alert, setAlert] = useState(false);

  //  state to hold discount
  const [discounPrice, setDiscountPrice] = useState(0);

  // alert popup fr close (BACK-btn)
  const [CloseAlert, setCloseAlert] = useState(false);

  // alert open
  let handleCartAlert = () => setAlert(true);

  // close  alert & cart
  let handleAlertClose = () => {
    setAlert(false);
    setCart(false);
  };

  // close  alert & open cart
  let handleAlertConfirm = () => {
    setAlert(false);
    setCart(true);
  };

  // open  alert (back)
  let handleCartCloseAlert = () => setCloseAlert(true);

  //   alert (back)==>close alert & cart
  let handleCartCloseAlert_CLOSE = () => {
    setCloseAlert(false);
    setCart(false);
  };

  //   alert (back)==>open cart  (back button)
  let handleCartCloseAlert_NO_CLOSE = () => {
    setCart(true);
    setCloseAlert(false);
  };

  // quantity +
  let handleAdd = (id) => {
    setAdd((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  // quantity -
  let handlesub = (id) => {
    setAdd((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) - 1,
    }));
  };

  // calc total
  useEffect(() => {
    let total = product.reduce((acc, item) => {
      const quantity = add[item.id] || 1;
      return acc + item.price * quantity;
    }, 0);
    setTotal(total.toFixed(2));
  }, [add, product]);

  // discount state to check discount applied if applied, it will be true always and never again discount applied
  useEffect(() => {
    if (total > 1000 && !isTotalMore1000) {
      setIsTotalMore1000(true);
      setDiscountPrice(total * 0.1);
    } else if (total <= 1000) {
      //we put state ("IsTotalMore1000") always true so if total>1000 to apply style again it is mandatory
      setDiscountPrice(0);
      setIsTotalMore1000(false);
    }
  }, [total]);

  return (
    <>
      <NavBar handleCartAlert={handleCartAlert} product={product} />

      {/* Confirm Open Cart Alert */}
      {alert && (
        <div className="fixed inset-0 flex items-start justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">
              Do you want to open the cart?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleAlertConfirm}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Yes
              </button>
              <button
                onClick={handleAlertClose}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {cart && (
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto h-auto lg:h-screen bg-gray-50 dark:bg-gray-900 mt-16 rounded-2xl shadow-lg overflow-hidden">
          {/* Cart Items */}
          <div className="flex-1 p-4 md:p-6 overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Your Shopping Cart
              </h2>
              <button
                onClick={handleCartCloseAlert}
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-800 transition transition duration-500 ease-in-out transform hover:scale-x-110"
              >
                ← Back
              </button>
            </div>

            {CloseAlert && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full text-center">
                  <h2 className="text-lg font-semibold mb-3 text-gray-800">
                    Do you want to close the cart?
                  </h2>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={handleCartCloseAlert_CLOSE}
                      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      Yes
                    </button>
                    <button
                      onClick={handleCartCloseAlert_NO_CLOSE}
                      className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}

            {product.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">
                Your cart is empty 🛒
              </p>
            ) : (
              <div className="overflow-x-auto bg-[#E0E0E0]">
                <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300 bg-[#E0E0E0]">
                  <thead className="text-xs uppercase  text-gray-700 dark:text-gray-400">
                    <tr>
                      <th className="px-4 py-3">Image</th>
                      <th className="px-4 py-3">Product</th>
                      <th className="px-4 py-3">Qty</th>
                      <th className="px-4 py-3">Price</th>
                      <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((item) => (
                      <tr
                        key={item.id}
                        className="bg-white dark:bg-gray-900 border-b hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <td className="p-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-16 object-contain rounded"
                          />
                        </td>
                        <td className="px-4 py-3 font-medium">{item.title}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                add[item.id] > 1 && handlesub(item.id)
                              }
                              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 border rounded-lg bg-gray-50 dark:bg-gray-700">
                              {add[item.id] || 1}
                            </span>
                            <button
                              onClick={() => handleAdd(item.id)}
                              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-3 font-semibold">
                          ₹{item.price}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex justify-center gap-2">
                            <button className="px-4 py-1.5 text-sm rounded-lg border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition">
                              Save for Later
                            </button>
                            <button
                              onClick={() => handleRemove(item)}
                              className="px-4 py-1.5 text-sm rounded-lg border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {product.length > 0 && (
              <div className="flex justify-end mt-6">
                <button className="transition duration-500 ease-in-out transform hover:scale-x-110 px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                  Checkout →
                </button>
              </div>
            )}
          </div>

          {/* Price Summary */}
          <aside className="w-full lg:w-1/3 bg-white dark:bg-gray-800 p-6 border-t lg:border-l border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Price Details
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Items ({product.length})</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between">
                <span
                  className={`${
                    isTotalMore1000
                      ? "text-green-600"
                      : "text-red-500 line-through"
                  }`}
                >
                  Discount (10%)
                </span>
                <span>
                  {isTotalMore1000 ? (
                    <div className="  text-green-500 ">
                      <span>-</span> ₹{discounPrice.toFixed(2)}
                    </div>
                  ) : (
                    <div className="text-red-500 ">₹ 0.00</div>
                  )}
                </span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-3">
                <span>Total</span>
                <span>₹{(total - discounPrice).toFixed(2)}</span>
              </div>
            </div>
            {isTotalMore1000 && (
              <p className="mt-3 text-sm text-green-600">
                You save ₹{discounPrice.toFixed(2)} on this order 🎉
              </p>
            )}
            <button className="transition duration-500 ease-in-out transform hover:scale-x-110 w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2 transition">
              Proceed to Checkout
            </button>
          </aside>
        </div>
      )}
    </>
  );
}
export default Cart;
