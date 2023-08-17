import React from "react";
import Arrays from "./solutions/Arrays";
import Application from "./solutions/PhoneBook";
import Languages from "./solutions/Languages";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const App = () => {
  const style = {
    nav: {
      display: "flex",
      padding: "20px",
      listStyle: "none",
      fontSize: "20px",
      textDecoration: "none",
    },
    link: {
      padding: "20px",
      textDecoration: "none",
    },
  };
  return (
    <div>
      <BrowserRouter>
        <div style={style.nav}>
          <Link style={style.link} to={"/"}>
            <li>Problem First</li>
          </Link>
          <Link style={style.link} to={"/language"}>
            <li>Problem Second</li>
          </Link>
          <Link style={style.link} to={"/phoneBook"}>
            <li>Problem Third</li>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Arrays />} />
          <Route path="/language" element={<Languages />} />
          <Route path="/phoneBook" element={<Application />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
