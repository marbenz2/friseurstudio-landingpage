import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/" },
  { name: "Produkte", to: "/" },
  { name: "Über uns", to: "/" },
  { name: "Kontakt", to: "/" },
];

const Navigation = () => {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsTop(scrollTop === 0);
    };

    onScroll();

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }

    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const handleOnClickMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOnClickToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed top-0 flex justify-between items-center w-full ${
        isTop ? "bg-background/0" : "bg-background drop-shadow-md"
      } max-w-[2560px] transition-all duration-500 px-4 lg:px-12 py-4 z-30`}
    >
      <Logo onClickToTop={handleOnClickToTop} />
      <div className={`xl:flex self-end hidden`}>
        <ul className="flex items-end justify-center h-full space-x-8">
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <NavLink
                to={navLink.to}
                className="text-lg font-semibold hover:text-primary"
                onClick={handleOnClickToTop}
              >
                {navLink.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="xl:hidden z-50">
        <button
          onClick={handleOnClickMenu}
          className="flex flex-col gap-1 py-2 pl-2"
        >
          <div
            className={`w-8 h-1 bg-foreground rounded-full ${
              isOpen ? "rotate-45 translate-y-2" : "rotate-0"
            } transition-all duration-300`}
          />
          <div
            className={`w-8 h-1 bg-foreground rounded-full ${
              isOpen ? "opacity-0" : "opacity-100"
            } transition-all duration-300`}
          />
          <div
            className={`w-8 h-1 bg-foreground rounded-full ${
              isOpen ? "-rotate-45 -translate-y-2" : "rotate-0"
            } transition-all duration-300`}
          />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "h-screen" : "h-0"
        } absolute flex flex-col top-0 right-0 w-full bg-primary z-40 overflow-clip text-black transition-all duration-500`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-16">
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <NavLink
                to={navLink.to}
                className="text-2xl font-semibold hover:text-background"
                onClick={() => {
                  handleOnClickMenu(), handleOnClickToTop();
                }}
              >
                {navLink.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
