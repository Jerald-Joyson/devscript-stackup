import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";

function Practicing() {
  const [image, setImage] = useState("");
  //const [Images, setImages] = useState([]);

  const addImage = () => {
    console.log(image);
    setImage(image);
  };

  //   const [car, setCar] = useState({
  //     name: "Nexon",
  //     color: "red",
  //   });

  return (
    <div className="flex justify-center mt-20 border-2 border-black">
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files);
        }}
      />
      <br />
      <button
        className="border-2 border-black rounded w-24 h-8 font-bold"
        onClick={addImage}
      >
        Upload
      </button>
      <img src={URL.createObjectURL(image)} alt="images" width="100px" height="100px" />

      {/* Spread Operator */}
      {/* {car.name} <br />
      {car.color}
      <button
        onClick={() => {
          setCar({...car,color: "blue" });
        }}
        className="bg-red-500"
      >
        Click Me
      </button>  */}

      {/* <div className="flex items-center justify-center">
        <div className="main bg-black  mt-6">
          <div className="grid bg-black m-5 rounded text-center relative">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ">
              Upload Image <br />
              (Size should be less than 2MB)
            </span>

            <button className="bg-blue-200 border-2 border-black w-10 h-10 absolute bottom-0 left-0">
              <BiImageAdd className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Practicing;
