import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const languages = ["Javascript", "Python"];
function Languages() {
  const { languageIndex, setLanguageIndex } = useContext(LanguageContext);
  const toggleLanguage = () => {
    setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
  };

  return (
    <MainSection
      currentLanguage={languages[languageIndex]}
      toggleLanguage={toggleLanguage}
    />
  );
}

function MainSection({ currentLanguage, toggleLanguage }) {
  return (
    <div>
      Provided Array: [{languages.join(",")}]
      <p id="favoriteLanguage">Fav programming language: {currentLanguage}</p>
      <button id="changeFavorite" onClick={toggleLanguage}>
        Toggle Language
      </button>
    </div>
  );
}
export default Languages;
