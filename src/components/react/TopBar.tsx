import { useState } from "react";
import { useLocation } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import NavLinks from "./NavLinks";
import "../../styles/TopBar.css";

export default function TopBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNav() {
    setMenuOpen(false);
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav className="topbar" role="navigation" aria-label="Main navigation">
        <h1 className="topbar-logo">MicroFE App</h1>
        <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavLinks menuOpen={menuOpen} location={location} handleNav={handleNav} />
      </nav>
    </>
  );
} 