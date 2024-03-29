import React from "react";
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

  const menuItems = ["Home", "About", "Menu", "Contact Us"];

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
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NavLink
                to={`${index == 0 ? "/" : `/${item.toLowerCase()}`} `}
                onClick={() => setIsMenuOpen(false)}
                className="w-full"
                color={"foreground"}
                size="lg"
              >
                {item}
              </NavLink>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="flex gap-4">
            <Button
              onClick={() => setIsMenuOpen(false)}
              color="success"
              className="px-0"
              variant="bordered"
            >
              <NavLink
                to={"/signin"}
                className=" p-4 w-full font-bold text-[16px] tracking-wide"
              >
                SignIn
              </NavLink>
            </Button>
            <Button
              color="danger"
              className="font-bold text-[16px] tracking-wide"
            >
              Logout
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
              className=" p-4 w-full font-bold text-[16px] tracking-wide"
            >
              LogIn
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
