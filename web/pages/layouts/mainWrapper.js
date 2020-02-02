import React from "react";

import Header from "../components/Header";
import HtmlHead from "../components/Head";
import Footer from "../components/Footer";

const Index = props => {
  return (
    <>
      <HtmlHead />
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Index;
