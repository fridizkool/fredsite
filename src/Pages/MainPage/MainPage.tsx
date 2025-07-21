import { NavLink } from "react-router";
import { MenuLink } from "../../components/NavBar/NavBar";
import { BASE, SiteRoutes } from "../../routes/SiteRoutes";

export default function MainPage() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-8 col-start-3 window-blurb introduction text-center">
        <h1>Welcome to my site!</h1>
        <img src="meat.gif" className="object-fill w-full pt-3"></img>
      </div>
      <div className="col-span-5 col-start-3 row-span-1 window-blurb introduction text-center">
        <h2>
          <NavLink to={BASE + "about"} className="text-white">
            <u>Who am I?</u>
          </NavLink>
        </h2>
        I am a developer with 1+ years of professional experience in the front
        end developing the IRS payments systems. I am skilled in most ends of
        software development and web development. From testing code to writing
        untestable code, I have done it all. I always like to tinker with new
        things.
      </div>
      <div className="col-span-3 row-span-1 window-blurb introduction text-center">
        {SiteRoutes.map((route) => {
          return <MenuLink to={route.to}>{route.linkText}</MenuLink>;
        })}
      </div>
    </div>
  );
}
