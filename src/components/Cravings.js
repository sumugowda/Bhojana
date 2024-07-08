import React from "react";
import crave from "../assets/briyani.png";
function Cravings() {
  return (
    <>
      <h2 className="text-3xl my-10">Are you craving for...</h2>
      <div className="w-100 my-10 flex ">
        <div className="w-36"> 
            <img src={crave} alt="" className="h-36 w-36 rounded-full shadow-md" /> 
          <div className="flex justify-center">
            <h3 className="text-xl m-2 py-2 ">Biriyani</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cravings;
