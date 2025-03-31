import './App.css'
import React, { useEffect } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  useEffect(() => {

    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", "#00000000");
    }

    const hideNavBar = () => {
      window.scrollTo(0, 1);
    };

    hideNavBar();
    window.addEventListener("resize", hideNavBar);

    return () => window.removeEventListener("resize", hideNavBar);
  }, []);

  return (
    <div className='h-screen min-h-screen w-screen flex flex-col justify-between bg-indigo-400/50 dark:bg-gray-950'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
