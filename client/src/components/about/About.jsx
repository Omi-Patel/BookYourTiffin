import { Button, Image } from "@nextui-org/react";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import om from "../../../public/om.jpg";
import dhruv from "../../../public/Dhruv.jpeg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-full">
      {/* About Hero  */}
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
            {/* <Image
              isZoomed
              className="object-cover object-center rounded"
              width={500}
              alt="NextUI hero Image"
              src="https://dummyimage.com/720x600"
            /> */}
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
                Welcome to BookYourMeal-Online !
              </h1>
              <p className="mb-8 leading-relaxed tracking-wider text-[17px]">
                At BookYourMeal-Online, we believe in providing more than just
                meals; we deliver experiences that delight your taste buds and
                nourish your soul. With a passion for cooking and a commitment
                to quality, we strive to make every meal a memorable one for our
                customers. Our journey began with a simple idea: to offer
                convenient, nutritious, and delicious meals to busy individuals
                and families. What started as a small venture has now grown into
                a thriving community of food enthusiasts who trust us to provide
                wholesome meals made with love and care.
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
                    <span>Explore Menu!</span>
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr />

      {/* Features  */}
      <div className="">
        {/* Features Section */}
        <h1 className="text-center mt-4 sm:text-4xl text-2xl mb-6 font-medium text-gray-900">
          Features Provided By Us.
        </h1>

        <div className="mx-auto my-16 max-w-7xl px-10 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-9 w-9 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p className="mt-4 text-sm tracking-wide text-gray-600">
                We partner with trusted payment gateways to offer a seamless and
                secure payment experience. We support a variety of payment
                methods to accommodate your preferences.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                <svg
                  className="h-9 w-9 text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Fast & Easy to Load
              </h3>
              <p className="mt-4 tracking-wide text-sm text-gray-600">
                With a user-friendly interface and intuitive design, finding
                what you need is quick and effortless. We believe that your time
                is valuable, so we've prioritized performance to deliver a
                hassle-free browsing experience.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-9 w-9 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Light & Dark Version
              </h3>
              <p className="mt-4 tracking-wide text-sm text-gray-600">
                Giving you the flexibility to customize your browsing experience
                according to your preferences. Whether you're browsing during
                the day or night, we've got you covered with our light and dark
                mode options.
              </p>
            </div>
            {/* <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-9 w-9 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Filter Blocks
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <hr />

      {/* How It Works  */}
      <div className="bg-[#212121]">
        <section className="text-gray-100 body-font">
          <div className="container px-12 py-16 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center ">
              <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-100">
                How It Works ?
              </h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-300">
                Let’s follow these simple steps to understand our ordering
                process
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg bg-slate-300 ">
                  <div className="w-24 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <h1 className="font-bold tracking-wider">Step : 1</h1>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Register / create account on our website
                  </h2>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg bg-slate-300">
                  <div className="w-24 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <h1 className="font-bold tracking-wider">Step : 2</h1>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Log in through E-mail ID and Password.
                  </h2>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg bg-slate-300 ">
                  <div className="w-24 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <h1 className="font-bold tracking-wider">Step : 3</h1>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Select your menu for the same day.
                  </h2>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg bg-slate-300 ">
                  <div className="w-24 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <h1 className="font-bold tracking-wider">Step : 4</h1>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Pay through Debit Card, Credit Card, NetBanking ,UPI or
                    PayTM.
                  </h2>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg bg-slate-300  ">
                  <div className="w-24 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <h1 className="font-bold tracking-wider">Step : 5</h1>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Yummy meals delivered to your Doorstep.
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
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
                  <span>Explore Menu!</span>
                </NavLink>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <hr />

      {/* Statistics  */}
      {/* <div>
        <section className="text-gray-600 body-font">
          <div className="container px-16 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 px-4 mb-6">
                <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                  Moon hashtag pop-up try-hard offal truffaut
                </h1>
                <div className="leading-relaxed">
                  Pour-over craft beer pug drinking vinegar live-edge gastropub,
                  keytar neutra sustainable fingerstache kickstarter.
                </div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.8K
                </h2>
                <p className="leading-relaxed">Subscribes</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  35
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  4
                </h2>
                <p className="leading-relaxed">Products</p>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img
                className="object-cover object-center w-full h-full"
                src="https://dummyimage.com/600x300"
                alt="stats"
              />
            </div>
          </div>
        </section>
      </div>
      <hr /> */}

      {/* Our Team  */}
      <div className="">
        <section className="text-gray-600 body-font">
          <div className="container  px-16 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
                OUR TEAM
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base tracking-wide">
                Behind every line of code and every technical solution, our
                developers and engineers work tirelessly to bring ideas to life.
                With their expertise in various programming languages and
                technologies, they ensure that our products and services meet
                the highest standards of quality and innovation.
              </p>
            </div>
            <div className="flex flex-wrap bg-blue-200 rounded -m-4 ">
              <div className="p-4 flex items-center justify-center lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Image
                    width={200}
                    isZoomed
                    alt="team"
                    className="object-cover object-center rounded"
                    src={om}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      OM PATEL
                    </h2>
                    <h3 className="text-gray-500 mb-3">IT Student</h3>
                    <p className="mb-4">Currently Pursuing Bachelor's in IT.</p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-center lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Image
                    width={200}
                    isZoomed
                    alt="team"
                    className="object-cover object-center rounded"
                    src={dhruv}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      DHRUV PATEL
                    </h2>
                    <h3 className="text-gray-500 mb-3">Software Engineer</h3>
                    <p className="mb-4">
                      Serving @TCS as a Software Developer.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              {/* <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Image
                    width={200}
                    isZoomed
                    alt="team"
                    className="object-cover object-center rounded"
                    src="https://dummyimage.com/206x206"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Atticus Finch
                    </h2>
                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Image
                    width={200}
                    isZoomed
                    alt="team"
                    className="object-cover object-center rounded"
                    src="https://dummyimage.com/206x206"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Henry Letham
                    </h2>
                    <h3 className="text-gray-500 mb-3">Designer</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
