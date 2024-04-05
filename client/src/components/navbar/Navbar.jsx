import React, { useEffect, useState } from "react";
import "../../App.css";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
} from "@nextui-org/react";

import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [login, setLogin] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);

  const navigate = useNavigate();

  // const menuItems = ["Home", "About", "Menu", "Contact"];

  // Login Handle
  const onLogin = () => {
    if (localStorage.getItem("token")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  // console.log(import.meta.env.VITE_ADMIN_LOGIN === 'admin@gmail.com');
  // Admin Login
  const onAdminLogin = () => {
    if (
      localStorage.getItem("userEmail") === import.meta.env.VITE_ADMIN_LOGIN
    ) {
      setAdminLogin(true);
    } else {
      setAdminLogin(false);
    }
  };

  // logout handle
  const logoutHandle = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    toast.info("User Loggedout Successfully..!");
    // navigate("/");
  };

  useEffect(() => {
    onLogin();
    onAdminLogin();
  }, [localStorage.getItem("token"), localStorage.getItem("userEmail")]);

  return (
    <Navbar
      className="bg-slate-200"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Mobile View  */}

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <NavLink to={"/"}>
            <p className="font-bold text-inherit tracking-widest">LOGO</p>
          </NavLink>
        </NavbarBrand>
        <NavbarMenu>
          <NavbarMenuItem className="menuText">
            <NavLink
              to={"/"}
              className="menu flex gap-2 items-center "
              onClick={() => setIsMenuOpen(false)}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              </span>
              <span>Home</span>
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem className="menuText">
            <NavLink
              to={"/about"}
              className="menu flex gap-2 items-center"
              onClick={() => setIsMenuOpen(false)}
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
                    d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>About</span>
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem className="menuText">
            <NavLink
              to={"/menu"}
              className="menu flex gap-2 items-center "
              onClick={() => setIsMenuOpen(false)}
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
                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                    clipRule="evenodd"
                  />
                  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                </svg>
              </span>
              <span>Menu</span>
            </NavLink>
          </NavbarMenuItem>

          {/* Admin Login  */}
          <div className=" rounded-xl">
            {adminLogin ? (
              <NavbarMenuItem className="menuText">
                <NavLink
                  to={"/dashboard"}
                  className="menu flex gap-2 items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                  </svg>

                  <span>Admin</span>
                </NavLink>
              </NavbarMenuItem>
            ) : (
              ""
            )}
          </div>

          <NavbarMenuItem className="menuText">
            <NavLink
              to={"/contact"}
              className="menu flex gap-2 items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                </svg>
              </span>
              <span>Contact Us</span>
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem className="flex gap-4 m-4">
            {login ? (
              <Button
                color="danger"
                className="font-bold text-[16px] tracking-wide"
              >
                <div className="flex gap-2 items-center justify-center tracking-wider">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Logout!</span>
                </div>
              </Button>
            ) : (
              <Button
                onClick={() => setIsMenuOpen(false)}
                color="success"
                className="px-0"
                variant="bordered"
              >
                <NavLink
                  to={"/signin"}
                  className=" p-4 w-full flex gap-2 font-bold text-[16px] tracking-wide"
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
                        d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>SignIn</span>
                </NavLink>
              </Button>
            )}
          </NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>

      {/* Desktop View  */}

      <NavbarContent className="hidden sm:flex gap-4  " justify="center">
        <NavbarBrand>
          <NavLink to={"/"}>
            <p className="font-bold text-inherit tracking-widest text-xl">
              LOGO
            </p>
          </NavLink>
        </NavbarBrand>
        <NavbarItem className="font-medium">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-[#594aff]" : "")}
            color="foreground"
          >
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem className="font-medium">
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "text-[#594aff]" : "")}
            color="foreground"
          >
            About
          </NavLink>
        </NavbarItem>
        <NavbarItem className="font-medium">
          <NavLink
            to={"/menu"}
            className={({ isActive }) => (isActive ? "text-[#594aff]" : "")}
            color="foreground"
          >
            Menu
          </NavLink>
        </NavbarItem>

        <NavbarItem className="font-medium">
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "text-[#594aff]" : "")}
            color="foreground"
          >
            Contact Us
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="" justify="end">
        <NavbarItem className=" lg:flex">
          {/* Testing for User Icon  */}

          <div>
            <Popover placement="bottom" showArrow={false}>
              <PopoverTrigger>
                <div className="flex gap-4 items-center ">
                  <Avatar
                    className="cursor-pointer"
                    showFallback
                    src="https://images.unsplash.com/broken"
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2 flex flex-col gap-2">
                  {/* Inside Content  */}

                  {/* Profile Button  */}

                  {/* Login / Logout Button  */}
                  <div className="text-small font-bold">
                    {login ? (
                      <>
                        <div className="flex flex-col gap-2">
                          <Button className="text-[16px] font-medium tracking-wider">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>Profile</span>
                          </Button>

                          {/* Admin Login  */}
                          <div className=" rounded-xl">
                            {adminLogin ? (
                              <Button
                                color="primary"
                                variant="flat"
                                className=" font-medium  tracking-wider text-[16px] "
                              >
                                <NavLink
                                  to={"/dashboard"}
                                  className={({ isActive }) =>
                                    isActive ? "text-[#594aff]" : ""
                                  }
                                  color="foreground"
                                >
                                  <div className="flex gap-2 items-center justify-center py-2 px-4  ">
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
                                          d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                                        />
                                      </svg>
                                    </span>
                                    <span>Admin</span>
                                  </div>
                                </NavLink>
                              </Button>
                            ) : (
                              ""
                            )}
                          </div>

                          <Button
                            onClick={() => {
                              logoutHandle();
                              setLogin(false);
                            }}
                            variant="flat"
                            color="danger"
                            className="px-0"
                          >
                            <div className=" p-2  w-full flex justify-center items-center gap-2 font-bold text-[16px] tracking-wide">
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
                                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                                  />
                                </svg>
                              </span>
                              <span>Logout!</span>
                            </div>
                          </Button>
                        </div>
                      </>
                    ) : (
                      <Button variant="flat" color="success" className="px-0">
                        <NavLink
                          to={"/signin"}
                          className=" p-4 w-full flex gap-2 font-bold text-[16px] tracking-wide"
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
                                d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span>LogIn</span>
                        </NavLink>
                      </Button>
                    )}
                  </div>
                  {/* <div className="text-tiny">This is the popover content</div> */}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
