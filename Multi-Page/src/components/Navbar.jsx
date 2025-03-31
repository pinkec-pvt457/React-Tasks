import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ dark, setDark }) => {

    function handleClick() {
        document.getElementById("root").classList.toggle("dark");
        setDark(!dark);
    }

    return (
        <>
            <nav className='w-full h-16 min-h-16 md:text-2xl flex items-center justify-between bg-blue-300 px-5 dark:bg-blue-950 transition-all duration-300 text-black dark:text-gray-300'>
                <ul className='flex gap-2    md:gap-5'>
                    <Link to="/">Home</Link>
                    <Link to="/Counter">Counter</Link>
                    <Link to="/Task-Manager">Task-Manager</Link>
                </ul>
                <button onClick={() => handleClick()} className='bg-black font-serif text-white w-16 h-10 rounded-md dark:bg-white dark:text-black transition-all duration-300'>{dark ? "Light" : "Dark"}</button>
            </nav>
        </>
    )
}

export default Navbar