

// import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import React from "react";
import MyDrawer from "../components/MyDrawer";

export default function Index() {
  return (
    <Container height="100vh">
      {/* <Hero /> */}

      <MyDrawer />


      <DarkModeSwitch />
      
     
    </Container>
  );
}
