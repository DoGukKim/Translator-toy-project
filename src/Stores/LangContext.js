import React, { createContext, useState, useContext } from "react";

const LangContext = createContext();
const LangContextProvider = ({ children, defalutLang, translations }) => {
  const [lang, setLang] = useState(defalutLang);
  const hyperTranslate = text => {
    if (lang === defalutLang) {
      return text;
    } else {
      return translations[lang][text];
    }
  };
  return (
    <LangContext.Provider value={{ setLang, t: hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
};

export const useSetLang = () => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export const useT = () => {
  const { t } = useContext(LangContext);
  return t;
};
export default LangContextProvider;
