import React from "react";
import { useState } from "react";
function Rating({product}){
    const rate = product.rating ? product.rating.rate : 0;
    return(
        <>
        {rate > 4.0 ? (
            <div className=" flex items-center justify-center gap-1 roboto-font">
             
              <svg
                className="w-4 h-4 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                  clip-rule="evenodd"
                />
              </svg>
                <div className="text-center flex items-center justify-center gap-2  ">
              <span className="roboto-font text-[#4B2E00]">{rate}</span>
              <span className="  text-[#4B2E00]">({product.rating.count})</span>
              </div>
            </div>
           ) : rate > 3.0 ? (
            <div className=" flex items-center justify-center gap-2 roboto-font">
              <svg
                className="w-4 h-4 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className=" flex items-center justify-start gap-2 ">
              <span className=" text-[#4B2E00]">{rate}</span>
              <span className="  text-[#4B2E00]">({product.rating.count})</span>
              </div>
            </div>
           ) : (
            <div className=" flex items-center justify-center gap-2 roboto-font">
              <svg
                className="w-4 h-4 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                  clip-rule="evenodd"
                />
              </svg>
                <div className=" flex items-center justify-center gap-2 text-[#222222]">
              <span className="  text-[#4B2E00]">{rate}</span>
              <span className="  text-[#4B2E00]">({product.rating.count})</span>
              </div>
            </div>
          )}

        </>
    )
}export default Rating;