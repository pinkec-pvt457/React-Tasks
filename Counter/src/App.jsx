import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  
  return (
    <div className='h-screen min-h-screen w-screen overflow-x-hidden overflow-y-auto flex flex-col justify-between bg-indigo-400/50 dark:bg-gray-950'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
