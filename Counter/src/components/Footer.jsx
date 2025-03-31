import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='w-screen h-fit flex flex-col bg-indigo-400/80 px-5 dark:bg-sky-950/80 transition-all duration-300 text-black dark:text-gray-300 gap-3 p-5'>
                <div className='flex justify-center gap-2 md:gap-5 md:flex-row flex-col-reverse items-center'>
                    <div className='w-96 text-center xl:text-end'><a href="mailto:pankajchoudhari457@gmail.com">pankajchoudhari457@gmail.com</a></div>
                    <div className='hidden md:block'>|</div>
                    <div className='w-96 text-center xl:text-start'><a href="mailto:pankajchoudhari457@outlook.com">pankajchoudhari457@outlook.com</a></div>
                </div>
                <div className='flex justify-center gap-5'>
                    <div className='w-96 text-end'><a href="https://www.instagram.com/_.pinkec._.pvt._457/">Go to My Instagram</a></div>
                    <div>|</div>
                    <div className='w-96 text-start'><a href="https://www.x.com/_pinkec_pvt_457/">Go to My Twitter</a></div>
                </div>
                <div className='flex justify-center gap-5'>
                    <div><a href="https://www.instagram.com/_.pinkec._.pvt._457/"><img className='h-12 w-12' src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="Instagram" /></a></div>
                    <div><a href="https://www.x.com/_pinkec_pvt_457/"><img className='h-10 w-10 mt-1 dark:invert' src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="Instagram" /></a></div>
                </div>
            </footer>
        </div>
    )
}

export default Footer