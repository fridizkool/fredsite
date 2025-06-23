import { useState, type ReactNode } from "react";
import { MenuIcon } from "../Icons/MenuIcon";
import { NavLink } from "react-router";
import { SiteRoutes } from "../../routes/SiteRoutes";

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
  function MenuLink(props: MenuNavProps) {
    return (
      <div className=" px-2.5 py-2">
        <NavLink to={props.to} className="text-white">
          {props?.children}
        </NavLink>
      </div>
    );
  }

  return (
    <div className="sticky top-0 w-full z-10 drop-shadow-xl/20">
      <div className="grid grid-cols-2 w-full bg-trimary-bg shadow-2xl h-12">
        <span className="col-span-1 flex">
          <button className="">blue</button>
        </span>
        <span className="col-span-1 justify-self-end flex">
          <NavMenu />
        </span>
      </div>
      {open && (
        <div className="grid grid-cols-10 w-full absolute">
          <div className="col-span-1 col-start-10 bg-secondary-bg">
            {SiteRoutes.map((route) => {
              return <MenuLink to={route.to}>{route.linkText}</MenuLink>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

type MenuNavProps = {
  to: string;
  children?: ReactNode;
};
