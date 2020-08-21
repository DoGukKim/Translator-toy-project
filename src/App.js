import React from "react";
import LangContextProvider from "./Stores/LangContext";
import Screen from "./Screen";
import translations from "./translations";

function App() {
  return (
    <LangContextProvider defalutLang="en" translations={translations}>
      <Screen />
    </LangContextProvider>
  );
}

export default App;
