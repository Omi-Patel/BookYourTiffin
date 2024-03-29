import React from "react";
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
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const menuItems = ["Home", "About", "Menu", "Contact"];

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
                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                    clipRule="evenodd"
                  />
                  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                </svg>
              </span>
              <span>Menu</span>
            </NavLink>
          </NavbarMenuItem>
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
            <Button
              color="danger"
              className="font-bold text-[16px] tracking-wide"
            >
              <div className="flex gap-2 items-center justify-center">
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
                <span>Logout</span>
              </div>
            </Button>
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
        </NavbarItem>
        {/* <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
}
