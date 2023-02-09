import { useEffect } from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";

export const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "medium"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Kodego Logo" />
        <span>TaskList</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={theme === "light" ? "lightactiveTheme" : "light"}
        ></span>
        <span
          onClick={() => setTheme("medium")}
          className={theme === "medium" ? "mediumactiveTheme" : "medium"}
        ></span>
        <span
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "darkactiveTheme" : "dark"}
        ></span>
        <span
          onClick={() => setTheme("gOne")}
          className={theme === "gOne" ? "gOneactiveTheme" : "gOne"}
        ></span>
        <span
          onClick={() => setTheme("gTwo")}
          className={theme === "gTwo" ? "gTwoactiveTheme" : "gTwo"}
        ></span>
        <span
          onClick={() => setTheme("gThree")}
          className={theme === "gThree" ? "gThreeactiveTheme" : "gThree"}
        ></span>

        {/* <span className="medium"></span>
        <span className="dark activeTheme"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span> */}
      </div>
    </header>
  );
};
