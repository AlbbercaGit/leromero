import React from 'react';
import Header from './components/Header';
import Video from "./components/VideoBackground";
import Videom from "./components/VideoBackgroundm";
import Hero from './components/Hero';
import Carta from './components/Carta';
// import Donde from './components/Donde';

import Sticky from './components/Sticky';
import Parallax from './components/Parallax2.js';
import { ReactLenis, useLenis } from 'lenis/react'


import './output.css';
import './style.css';

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <div className="flex flex-col min-h-screen">
      <ReactLenis root>
        <Video />
        <Videom />
        <Header />
        <Hero />
        <Sticky />
                </ReactLenis>

        <div >

        {/* <Donde /> */}
        <Carta />



    </div>
    </div>

    
  );
}

export default App;
