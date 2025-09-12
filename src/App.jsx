import { useEffect, useState } from "react";
import Products from "./Products";
import Category from "./Category";
import Cart from "./Cart";

function App() {
  // State to hold the displayed products (can be filtered)
  const [products, setProducts] = useState([]);

  // State to hold the original full list of products from the API
  const [allProducts, setAllProducts] = useState([]);

  // state to hold the category open close
  const [categoryMenu, setCategoryMenu] = useState(false);

  // state for cart items
  const [cart, setCart] = useState([]);

  // Fetch products from the API and store in both states
  let getProducts = async () => {
    let data = await fetch("https://fakestoreapi.com/products");
    if (data.ok) {
      let resultData = await data.json();
      setProducts(resultData);
      setAllProducts(resultData);
      console.log("data fetched");
    }
  };

  useEffect(() => {
    console.log("fetched data 1"); // Fetch products once when the component mounts
    getProducts();
  }, []);

  // Show all products by resetting the displayed list from the original full list
  let handleShowAll = () => {
    console.log("category");
    setProducts(allProducts);
  };

  // Filter products based on the selected category from allProducts
  let handleCategory = (category) => {
    console.log("category", category);
    const filteredProducts = allProducts.filter(
      (product) => product.category === category
    );

    console.log("category", category);
    console.log("filteredProducts", filteredProducts);

    setProducts(filteredProducts);
  };


  // Add to Cart
  let handleCart = (product) => {
    let isCart = cart.some((item) => item.id === product.id);
    if (isCart) {
      return console.log("Item already in the cart");
    } else {
      console.log("cart product:", cart);
      setCart([...cart, product]);
    }
  };

  // Remove from Cart
  let handleRemove = (product) => {
    let index = cart.findIndex((item) => item.title == product.title);
    console.log("remove index:", index);
    cart.splice(index, 1);
     console.log("remove",cart)
    setCart([...cart]);
   
  };

  
  return (
    <div className="max-w-7xl mx-auto bg-[#D4AF37] ">
      <div  className="">
      <Cart product={cart} handleRemove={handleRemove}></Cart>
       </div>
      <div className=" grid grid-cols-[auto_1fr] ">
        <aside className="  cursor-pointer  p-4 rounded shadow transition-all duration-1000">
          <div
            onClick={() =>
              categoryMenu ? setCategoryMenu(false) : setCategoryMenu(true)
            }
 className="mt-2 text-white hover:text-blue-800 transition duration-500 ease-in-out transform hover:scale-x-110 text-center"

          >
           <span className="bona-nova-sc-bold text-[20px]">Category</span> 
          </div>
          {categoryMenu && (
            <div>
              <Category
                products={allProducts}
                handleCategory={handleCategory}
                handleShowAll={handleShowAll}
                onClick={() => setCategoryMenu(true)}
              ></Category>
            </div>
          )}
        </aside>

        <section className="grid  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 px-6 py-6  gap-8 transition-all duration-1000">
          {products.map((product) => {
            return (
              <Products
                key={product.id}
                product={product}
                cart={cart}
                handleCart={handleCart}
              ></Products>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
