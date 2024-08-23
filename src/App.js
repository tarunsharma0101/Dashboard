import React from "react";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import { SearchProvider } from "./utils/SerachContext";

function App() {
  return (
    <SearchProvider>
      <div>
        <Navbar/>
        <CardContainer name={"TEXT WIDGET"}/>
        <CardContainer name={"RANDOM WIDGET"}/>
      </div>
    </SearchProvider>
  );
}

export default App;
