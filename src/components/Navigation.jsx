import { Link, useLocation } from "react-router-dom";
import "../style/components/navigation.scss";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [currentRoute, setCurrentRoute] = useState('/');
  const location = useLocation();

  useEffect(()=>{
    setCurrentRoute(location.pathname)
  }, [location])
  
  return (
    <nav className="nav">
      <ul className="nav_list">
        <li
          className={
            currentRoute === "/" ? "nav_list_item_active" : "nav_list_item"
          }
        >
          <Link to="/">Accueil</Link>
        </li>
        <li
          className={
            currentRoute === "/about" ? "nav_list_item_active" : "nav_list_item"
          }
        >
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
