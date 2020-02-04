import React from 'react';

import Header from '../components/Header';
import HtmlHead from '../components/Head';
import Footer from '../components/Footer';

const Index = props => {
  return (
    <>
      <HtmlHead />
      <Header />
      <main role="main">
        <h3>
          I build websites. <br />
          It is what I <span>love</span> and I am <span>great</span> at it!
        </h3>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Index;
