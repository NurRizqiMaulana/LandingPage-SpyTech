import React from "react";
import imgHeader from "/imageH.png";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex mt-20">
          <div className="flex items-center justify-between">
            <div className="">
              <p className="text-2xl text-green-400 mb-5">
                Grow yourself with us
              </p>
              <h1 className="text-5xl mb-5">
                Grow your skill & <br /> get world class <br />
                job’s
              </h1>
              <p className="text-sm mb-5">
                Non-disclosure agreement seed round seed money <br />
                accelerator influencer. Growth hacking return nondis sure <br />
                agreement seed round seed .
              </p>
              <button className=" border border-green-400 hover:bg-green-400 hover:text-white text-green-400 font-bold py-2 px-4 rounded-md">Get Started</button>
            </div>

            <img src={imgHeader} alt="Logo" className="w-1/2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
