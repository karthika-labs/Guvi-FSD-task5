function Category({ products, handleCategory, handleShowAll }) {

  // collects all categories
  let filteredCategories = [];
  products.forEach((productCategory) => {
    if (!filteredCategories.includes(productCategory.category)) {  //to remove duplicates
      filteredCategories.push(productCategory.category);
    }
  });

  // images in category menu bar 
  const categoryImage={
 "men's clothing":  
"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  "jewelery": 
"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
  "electronics": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
  "women's clothing": 
"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png"


  }

  return (
    <>
      <div className="righteous-regular flex flex-col gap-4 mt-4 roboto-font">
        <button className="flex gap-2 items-center px-4 py-2 bg-gray-800 text-white rounded-sm border border-transparent hover:bg-white hover:text-gray-800 hover:border-white transition duration-300 ease-in-out" onClick={() => handleShowAll()}>
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
          className=" object-contain aspect-square w-10 h-10 rounded-sm"
          ></img>
          <span className="righteous-regular">show all</span></button>

          

        {filteredCategories.map((category) => {
          
          return (
          
              <button
              className=" flex gap-2 items-center px-4 py-2 bg-gray-800 text-white rounded-sm border border-transparent hover:bg-white hover:text-gray-800 hover:border-white transition duration-300 ease-in-out"
                href="#"
                key={category}
                onClick={() => handleCategory(category)}
              >
                <img src={categoryImage[category]}  className=" object-contain aspect-square w-10 h-10 rounded-sm" ></img>
                <span className="righteous-regular">{category}</span>
              </button>
            
          );
        })}
      </div>
    </>
  );
}
export default Category;



