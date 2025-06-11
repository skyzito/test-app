import { Link } from "react-router-dom";

type NavLinksProps = {
  menuOpen: boolean;
  location: { pathname: string };
  handleNav: () => void;
};

export default function NavLinks({ menuOpen, location, handleNav }: NavLinksProps) {
  return (
    <div className={`topbar-links${menuOpen ? " show" : ""}`}>
      <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={handleNav}>
        Home
      </Link>
      <Link to="/internal" className={location.pathname === "/internal" ? "active" : ""} onClick={handleNav}>
        Internal Page
      </Link>
    </div>
  );
} 