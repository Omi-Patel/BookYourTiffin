import { Button } from "@nextui-org/react";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-screen">
      {/* <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full text-center md:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Get full access to Platform
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nesciunt eos facilis debitis voluptas iure consectetur odit fugit
              voluptate recusandae?
            </p>
          </div>
          <form action="#" method="POST" className="mx-auto mt-12 max-w-xl">
            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                  type="email"
                  placeholder="Email"
                />
                <Button
                  color="primary"
                  variant="ghost"
                  className="inline-flex text-white border-0 py-2 px-0 bg-blue-500 hover:bg-blue-600 rounded-xl text-lg"
                >
                  <NavLink
                    to={"/"}
                    className=" p-8  flex justify-center items-center font-bold text-[16px] tracking-wide"
                  >
                    Subscribe!
                  </NavLink>
                </Button>
              </div>
            </div>
          </form>
          <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm text-gray-600">
              Your data is complely secured with us. We don&apos;t share with
              anyone.
            </span>
          </div>
        </div>
      </section> */}

      <div className="flex flex-wrap m-6 gap-10 justify-center items-center">
        {/* Card  */}
        <div className="">
          <div className="w-[300px] rounded-md border-2">
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Laptop"
              className="h-[200px] w-full  object-cover p-2 rounded-xl overflow-hidden"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                About Macbook
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Macbook
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Apple
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Laptop
                </span>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Read
              </button>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Menu;
