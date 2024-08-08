import React from 'react';
import Header from './components/Header';
import Video from "./components/VideoBackground";
import Videom from "./components/VideoBackgroundm";
import Hero from './components/Hero';
import Carta from './components/Carta';
// import Donde from './components/Donde';
import Parallax from './components/Parallax';

import './output.css';
import './style.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">

        <Video />
        <Videom />
        <Header />
        <Hero />
        <div >
        <Parallax />

        {/* <Donde /> */}
        <Carta />



    </div>
    </div>

    
  );
}

export default App;
