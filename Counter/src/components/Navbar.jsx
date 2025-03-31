import React, { useState } from 'react'

const Navbar = () => {

    const [dark, setDark] = useState(false);

    function handleClick() {
        document.getElementById("root").classList.toggle("dark");
        setDark(!dark);
    }

    return (
        <>
            <nav className='w-full h-16 min-h-16 flex items-center justify-between bg-indigo-400/80 px-5 dark:bg-sky-950/80 transition-all duration-300 text-black dark:text-gray-300'>
                <h1 className='font-serif font-semibold text-3xl'>Counter</h1>
                <button
                    title={`${dark ? "Turn on Light Mode" : "Turn on Dark Mode"}`}
                    onClick={() => handleClick()}
                    className={`w-12 h-6 flex items-center px-1 rounded-full transition-all duration-300 ${dark ? "bg-gray-300" : "bg-gray-900"
                        }`}
                >
                    <div
                        className={`w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${dark ? "translate-x-6 bg-gray-900" : "translate-x-0 bg-gray-300"
                            }`}
                    ></div>
                </button>
            </nav>
        </>
    )
}

export default Navbar