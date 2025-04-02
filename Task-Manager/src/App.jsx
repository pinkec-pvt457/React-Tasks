import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className='h-screen min-h-screen w-screen overflow-x-hidden overflow-y-auto flex flex-col justify-between bg-white dark:bg-black transition-all duration-300'>
        <Navbar dark={darkMode} setDark={setDarkMode} />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
