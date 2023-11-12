import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "../Css/Upload.css";
import { BiImageAdd } from "react-icons/bi";

function Uploaded() {
  const [imageSrc, setImageSrc] = useState(null);
  const [postDetails, setPostDetails] = useState({
    title: "",
    details: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (event) => {
    setPostDetails({
      ...postDetails,
      title: event.target.value,
    });
  };

  const handleDetailsChange = (event) => {
    setPostDetails({
      ...postDetails,
      details: event.target.value,
    });
  };

  const handleUpload = () => {
    // You can handle the upload logic here, such as sending the data to a server
    // For now, let's just log the details to the console
    console.log("Uploaded Details:", postDetails);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="main bg-black  mt-6">
          <div className="Image grid bg-white m-5 rounded text-center relative">
            <label className="bg-blue-200 border-2 border-black w-10 h-10 absolute bottom-0 left-0 cursor-pointer">
              <BiImageAdd className="w-8 h-8" />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Uploaded"
                className="w-full object-contain"
              />
            ) : (
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500">
                Attach your image
                <br />
                (Size should be less than 2MB)
              </span>
            )}
          </div>

          <label className="text-white font-bold text-xl ml-5">Title</label>
          <input
            type="text"
            placeholder="Post title.."
            className="title rounded-md ml-5 mb-5 p-2"
            value={postDetails.title}
            onChange={handleTitleChange}
          />
          <label className="text-white font-bold text-xl ml-5">Details</label>
          <textarea
            placeholder="Post details..."
            className="details rounded p-2 ml-5"
            value={postDetails.details}
            onChange={handleDetailsChange}
          ></textarea>

          <button
            className="Btn text-white ml-5 font-bold text-xl bg-blue-950 hover:bg-blue-900 mt-5 mb-6 rounded-md border-2  border-white"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
      {/* Display uploaded details in a card format
      {postDetails.title && postDetails.details && (
        <div className="card mt-4 bg-white rounded p-4">
          <h2 className="text-xl font-bold">{postDetails.title}</h2>
          <p className="mt-2">{postDetails.details}</p>
        </div>
      )} */}
    </div>
  );
}

export default Uploaded;
