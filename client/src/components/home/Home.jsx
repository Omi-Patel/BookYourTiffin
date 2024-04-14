import { Button, Image } from "@nextui-org/react";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-full bg-[#212121] ">
      <div>
        <section className="text-gray-300 body-font">
          <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              {/* <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            /> */}
              <Image
                isZoomed
                className="object-cover object-center rounded"
                // width={300}
                alt="NextUI hero Image"
                src="https://i.pinimg.com/474x/85/4f/8d/854f8db3caa2f3a52daea45a74748756--note-your-favorite.jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <div className="mb-8 bg-green-200 text-black font-bold tracking-wider p-1 px-3 rounded-full">
                <p>FREE DELIVERY</p>
              </div>
              <h1 className="title-font tracking-widest sm:text-4xl text-3xl mb-6 font-medium text-gray-100">
                <span className="text-blue-500 font-bold">HOMEMADE </span>
                <br className="hidden lg:inline-block" />
                <span>Tiffin Service.</span>
              </h1>
              <p className="mb-8 leading-7 text-[17px] tracking-wider ">
                Our Mission is to Offer all the Indian dishes freshly prepared
                and cooked by our experienced chefs to our Consumers through our
                Homemade Tiffin Service to satiate all our Consumer's Craving.
                We deliver fresh and quality Homemade food at affordable prices.
              </p>
              <div className="flex justify-center">
                <Button
                  color="primary"
                  variant="shadow"
                  className="inline-flex text-white border-0 py-2 px-0  hover:bg-blue-600 rounded-xl text-lg"
                >
                  <NavLink
                    to={"/menu"}
                    className=" p-6 w-full flex gap-2 font-bold text-[18px] tracking-wide"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                          clipRule="evenodd"
                        />
                        <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                      </svg>
                    </span>
                    <span>Order Now!</span>
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <div className="relative isolate z-0 bg-gray-300 px-6 pt-4 lg:px-8">
          <div className="relative mx-auto max-w-2xl py-16">
            <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
              <svg
                className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Why <span className="text-red-600">Us</span>.
              </h1>
              {/* Grid  */}
              <div className=" ">
                <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-4 ">
                  <div className="flex flex-col justify-center  items-center ">
                    {/* <Copy className="h-9 w-9 text-gray-700" /> */}
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-24 h-24 "
                      >
                        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                      </svg>
                    </span>
                    <div className="ml-5">
                      <h3 className="text-xl font-semibold text-black">
                        NO DAILY HASSLES
                      </h3>
                      <p className="mt-3 text-base text-gray-600">
                        No headache of planning what to cook or order daily..
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center  items-center">
                    {/* <Code className="h-9 w-9 text-gray-700" /> */}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-24 h-24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.253 2.292a.75.75 0 0 1 .955.461A28.123 28.123 0 0 1 21.75 12c0 3.266-.547 6.388-1.542 9.247a.75.75 0 1 1-1.416-.494c.94-2.7 1.458-5.654 1.458-8.753s-.519-6.054-1.458-8.754a.75.75 0 0 1 .461-.954Zm-14.227.013a.75.75 0 0 1 .414.976A23.183 23.183 0 0 0 3.75 12c0 3.085.6 6.027 1.69 8.718a.75.75 0 0 1-1.39.563c-1.161-2.867-1.8-6-1.8-9.281 0-3.28.639-6.414 1.8-9.281a.75.75 0 0 1 .976-.414Zm4.275 5.052a1.5 1.5 0 0 1 2.21.803l.716 2.148L13.6 8.246a2.438 2.438 0 0 1 2.978-.892l.213.09a.75.75 0 1 1-.584 1.381l-.214-.09a.937.937 0 0 0-1.145.343l-2.021 3.033 1.084 3.255 1.445-.89a.75.75 0 1 1 .786 1.278l-1.444.889a1.5 1.5 0 0 1-2.21-.803l-.716-2.148-1.374 2.062a2.437 2.437 0 0 1-2.978.892l-.213-.09a.75.75 0 0 1 .584-1.381l.214.09a.938.938 0 0 0 1.145-.344l2.021-3.032-1.084-3.255-1.445.89a.75.75 0 1 1-.786-1.278l1.444-.89Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div className="ml-5">
                      <h3 className="text-xl font-semibold text-black">
                        DAILY VARIETY
                      </h3>
                      <p className="mt-3 text-base text-gray-600">
                        Our daily changing menu adds the variety you deserve.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center  items-center">
                    {/* <Heart className="h-9 w-9 text-gray-700" /> */}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-24 h-24"
                      >
                        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                        <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                        <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                      </svg>
                    </span>
                    <div className="ml-5">
                      <h3 className="text-xl font-semibold text-black">
                        ZERO TIME CRUNCH
                      </h3>
                      <p className="mt-3 text-base text-gray-600">
                        Your food is ready to eat daily, before you're hungry..
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center  items-center">
                    {/* <Heart className="h-9 w-9 text-gray-700" /> */}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-24 h-24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div className="ml-5">
                      <h3 className="text-xl font-semibold text-black">
                        COMPLETE FLEXIBILITY
                      </h3>
                      <p className="mt-3 text-base text-gray-600">
                        Pause, skip or swap meal plans any day you want..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-2">
                <Button
                  color="primary"
                  variant="shadow"
                  className="inline-flex text-white border-0 py-2 px-0  hover:bg-blue-600 rounded-xl text-lg"
                >
                  <NavLink
                    to={"/about"}
                    className=" p-6 w-full flex gap-2 font-bold text-[18px] tracking-wide"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </span>
                    <span>Know More!</span>
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
