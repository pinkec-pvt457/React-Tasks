import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className='h-screen min-h-screen w-screen flex flex-col justify-between items-center bg-white dark:bg-black transition-all duration-300'>
        <Navbar dark={darkMode} setDark={setDarkMode} />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
