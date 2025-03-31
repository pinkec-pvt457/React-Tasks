import './App.css'
import Home from './pages/Home'
import Counter from './pages/Counter'
import TaskManager from './pages/TaskManager'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className='h-screen w-screen min-h-screen overflow-hidden flex flex-col justify-between bg-white dark:bg-black transition-all duration-300'>
        <BrowserRouter>
          <Navbar dark={darkMode} setDark={setDarkMode}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Counter' element={<Counter />} />
            <Route path='/Task-Manager' element={<TaskManager />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
