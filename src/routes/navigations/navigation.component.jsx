import "./navigation.style.scss";
import { Fragment } from "react";

import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

const Navigation = () => {
  const nav = [
    {
      id: 1,
      label: "SHOP",
      route: "/shop",
    },
    {
      id: 2,
      label: "CONTACT",
      route: "/contact",
    },
    {
      id: 3,
      label: "SIGN IN",
      route: "/sign-in",
    },
    {
      id: 4,
      label: "CART",
      route: "/cart",
    },
  ];

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logoContainer" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-link-container">
          {nav.map(({ id, label, route }) => (
            <Link className="nav-link" key={id} to={route}>
              {label}
            </Link>
          ))}
          
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
