import React, { useState } from 'react'
import Plus from '../assets/plus.png'
import Minus from '../assets/minus.png'

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div className='h-full w-full min-h-[550px] flex justify-between items-center font-serif text-[100px] md:text-[400px] bg-gradient-to-r from-[#E684AE] via-[#79CBCA] to-[#77A1D3] dark:bg-gradient-to-l dark:from-[#4c2335e0] dark:via-[#047c7c72] dark:to-[#19385e] text-black dark:text-white'>
            {
                count == 0 ? (
                    <div className='pl-5 md:pl-10'>
                        <div className='size-20 md:size-32'></div>
                    </div>
                ) : (
                    <button
                        onClick={() => setCount(count - 1)}
                        className='pl-5 md:pl-10'
                    >
                        <img className='dark:invert size-20 md:size-32' src={Minus} alt="Minus Image" />
                    </button>
                )
            }
            <h1 className='pb-3 md:pb-9 font-sans'>
                {count}
            </h1>
            {
                count == 100 ? (
                    <div className='pl-5 md:pl-10'>
                        <div className='size-20 md:size-32'></div>
                    </div>
                ) : (
                    <button
                        onClick={() => setCount(count + 1)}
                        className='pr-5 md:pr-10'
                    >
                        <img className='dark:invert size-20 md:size-32' src={Plus} alt="Plus Image" />
                    </button>
                )
            }
        </div>
    )
}

export default Counter