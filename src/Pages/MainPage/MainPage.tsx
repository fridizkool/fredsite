import { MenuLink } from "../../components/NavBar/NavBar";
import { SiteRoutes } from "../../routes/SiteRoutes";

export default function MainPage() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-5">
      <div className="col-span-8 col-start-3 window-blurb introduction text-center">
        <h1>Welcome to my site!</h1>
        <img src="meat.gif" className="object-fill w-full pt-3"></img>
      </div>
      <div className="col-span-8 col-start-3 row-span-1 window-blurb introduction text-center">
        {SiteRoutes.map((route) => {
          return <MenuLink to={route.to}>{route.linkText}</MenuLink>;
        })}
      </div>
    </div>
  );
}
