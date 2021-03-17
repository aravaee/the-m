import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { InfoData, InfoDataTwo } from "./data/InfoData";
import { SignupData } from "./data/SignupData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyle";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>

      <InfoSection {...InfoData}/>
      <InfoSection {...InfoDataTwo}/>

      <Signup {...SignupData}/>
      <InfoSection {...InfoData}/>
      <InfoSection {...InfoDataTwo}/>

    </>
  );
}

export default App;
