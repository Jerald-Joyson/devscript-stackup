import { Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import BackgroundImg from "../../assets/images/home.jpg";
import Blogicon from "../../assets/images/blogIcon.png";
import { primaryColor } from "../../assets/colors";

function HeroSection() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <section
      style={{ background: mode === "dark" ? "rgb(30, 41, 59)" : primaryColor }}
    >
      {/* Hero Section  */}
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* Main Content  */}
        <main>
          <div className="text-center ">
            <div className="mb-2 flex flex-col items-center justify-center">
              {/* Image  */}
              <div
                className="flex justify-center items-center"
                style={{ width: "200px", height: "200px" }}
              >
                <img src={Blogicon} alt="image" />
              </div>

              {/* Text  */}
              <h1 className="text-4xl text-white font-bold">DevScript</h1>
            </div>

            {/* Paragraph  */}
            <p
              style={{ color: mode === "dark" ? "white" : "white" }}
              className="sm:text-2xl text-xl font-extralight sm:mx-auto "
            >
              "Blogging is not just writing, <br /> it's sharing your knowledge with the world."
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}

export default HeroSection;
