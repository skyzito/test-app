import React from "react";

type HamburgerMenuProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export default function HamburgerMenu({ menuOpen, setMenuOpen }: HamburgerMenuProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter" || e.key === " ") {
      setMenuOpen(!menuOpen);
    }
  }
  return (
    <button
      className={`hamburger${menuOpen ? " open" : ""}`}
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <svg viewBox="0 0 24 24"><rect y="4" width="24" height="3" rx="1.5"/><rect y="10.5" width="24" height="3" rx="1.5"/><rect y="17" width="24" height="3" rx="1.5"/></svg>
    </button>
  );
} 