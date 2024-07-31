import React from "react";
import imgBody from "/imageB.png";
import imgPeople from "/imageP.png";

const Main = () => {
  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto">
        <div className="flex mt-20">
          <div className="flex items-center mx-5">
            <img src={imgBody} alt="Logo" className="w-1/2" />
            <div>
              <h1 className="text-5xl mb-5">
                Over 1M+ Students <br />
                get’s job
              </h1>
              <p className="text-sm mb-5">
                Non-disclosure agreement seed round seed money <br />
                accelerator influencer. Growth hacking return nondis <br />
                sure .
              </p>
              <p className="text-sm mb-5">
                Non-disclosure agreement seed round seed money <br />
                accelerator influencer.
              </p>
              <button className=" border border-green-400 hover:bg-green-400 hover:text-white text-green-400 font-bold py-2 px-4 rounded-md">
                Click me
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <div className="text-center mt-20">
          <h1 className="text-5xl font-bold">How it works</h1>
          <p className="text-2xl font-thin mt-5 text-gray-500">
            Non-disclosure agreement seed round seed <br /> money accelerator
            influencer.
          </p>
        </div>
        <div className="flex mt-20 ">
          <div className="flex items-center mx-5 justify-between">
            <div className="">
              <div className="w-full h-46 rounded-md bg-slate-100 px-8 py-8 my-5 drop-shadow-2xl">
                <div>
                  <div className="flex items-center">
                    <img src="/docs.png " className=" w-15 h-8" alt="" />
                    <h1 className="text-4xl font-bold  mx-4">
                      Select a course
                    </h1>
                  </div>
                  <h1 className="text-sm text-gray-400 mx-12 my-4">
                    Non-disclosure agreement seed round seed <br />
                    money accelerator influencer.
                  </h1>
                </div>
              </div>

              <div className="w-full h-46 rounded-md bg-slate-100 px-8 py-8">
                <div>
                  <div className="flex items-center">
                    <img src="/docs.png " className=" w-15 h-8" alt="" />
                    <h1 className="text-4xl font-bold  mx-4">
                      Fill it up & give payment
                    </h1>
                  </div>
                  <h1 className="text-sm text-gray-400 mx-12 my-4">
                    Non-disclosure agreement seed round seed <br />
                    money accelerator influencer.
                  </h1>
                </div>
              </div>

              <div className="w-full h-46 rounded-md bg-slate-100 px-8 py-8">
                <div>
                  <div className="flex items-center">
                    <img src="/docs.png " className=" w-15 h-8" alt="" />
                    <h1 className="text-4xl font-bold  mx-4">
                      Start build yourself
                    </h1>
                  </div>
                  <h1 className="text-sm text-gray-400 mx-12 my-4">
                    Non-disclosure agreement seed round seed <br />
                    money accelerator influencer.
                  </h1>
                </div>
              </div>
            </div>
            <img src={imgBody} alt="Logo" className="w-1/2" />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20">
        <div className="bg-green-400 w-full h-28 rounded-md"></div>
      </section>

      <section className="max-w-6xl mx-auto mt-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Our popular courses</h1>
          <p className="text-2xl font-thin mt-5 text-gray-500">
            Non-disclosure agreement seed round seed <br /> money accelerator
            influencer.
          </p>
        </div>
        <div className="flex mt-20 mx-5 my-5 justify-between">
            <div className="border border-green-400 w-48 rounded-md py-2 px-2">
                <img src="/imageG.png" alt="" />
                <h1>Grapich Design</h1>
                <div className="flex justify-between">
                    <h2>Rating</h2>
                    <h2>Price</h2>
                </div>

                <div className="flex justify-start">
                    <h2>People</h2>
                    <h2>25k++</h2>
                </div>
                
            </div>
            <div className="border border-green-400 w-48 h-28 rounded-md"></div>
            <div className="border border-green-400 w-48 h-28 rounded-md"></div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20">
      <div className="flex mt-20">
          <div className="flex items-center mx-5">
            <img src={imgPeople} alt="Logo" className="w-1/2" />
            <div>
              <h1 className="text-5xl mb-5">
              Do you have any query?
              </h1>
              <p className="text-sm mb-5">
                Non-disclosure agreement seed round seed money <br />
                accelerator influencer. Growth hacking return nondis <br />
                sure .
              </p>
              <p className="text-sm mb-5">
                Non-disclosure agreement seed round seed money <br />
                accelerator influencer.
              </p>
              <button className=" border border-green-400 hover:bg-green-400 hover:text-white text-green-400 font-bold py-2 px-4 rounded-md">
                Click me
              </button>
            </div>
          </div>
          <img src="/imageA.png" alt="" />
        </div>
      </section>

      <section className="max-w-full mx-auto mt-20">
        <div className="bg-gray-800 w-full rounded-md">
            <div className="flex mt-20 justify-between py-4 px-4 text-white">
                <div>
                    <h1>SpyTech</h1>
                    <p>Non-disclosure agreement seed <br />
                     round seed money accelerator influencer. <br />
                     Growth hacking return nondis sure agreement .</p>

                     <div>
                        <ul  className="flex">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>LinkInd</li>
                        </ul>
                     </div>
                </div>

                <div>
                    Hello
                </div>

                <div>
                    Hello
                </div>

                <div>
                    Hello
                </div>


            </div>

        </div>

      </section>
    </main>
  );
};

export default Main;
