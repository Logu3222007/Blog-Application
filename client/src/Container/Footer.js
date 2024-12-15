import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`text-center p-3 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} My Blog Application. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
