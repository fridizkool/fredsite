import { useState, type ReactNode } from "react";
import { MenuIcon } from "../Icons/MenuIcon";
import { NavLink } from "react-router";
import { SiteRoutes } from "../../routes/SiteRoutes";
import Bonzai from "../Widgets/Bonzai/Bonzai";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  function NavMenu() {
    return (
      <button className="" onClick={() => setOpen(!open)}>
        <MenuIcon
          className="stroke-white object-contain"
          height="36px"
          width="36px"
        />
      </button>
    );
  }

  return (
    <div className="sticky top-0 w-full z-10 drop-shadow-xl/20">
      <div className="flex w-full bg-trimary-bg shadow-2xl h-12 justify-between">
        <span className="pr-5">
          <Bonzai />
        </span>
        <span className="flex">
          <NavMenu />
        </span>
      </div>
      {open && (
        <div className="grid grid-cols-8 w-full absolute z-10">
          <div className="col-span-1 col-start-8 bg-secondary-bg">
            {SiteRoutes.map((route) => {
              return (
                <MenuLink to={route.to} onClick={() => setOpen(false)}>
                  {route.linkText}
                </MenuLink>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function MenuLink(props: MenuNavProps) {
  return (
    <div className="px-2.5 py-2 inset-y-0 right-0 row-span-1">
      <NavLink
        to={props.to}
        key={props.to}
        className="text-white"
        onClick={props?.onClick}
      >
        {props?.children}
      </NavLink>
    </div>
  );
}

type MenuNavProps = {
  to: string;
  children?: ReactNode;
  onClick?: () => void;
};
