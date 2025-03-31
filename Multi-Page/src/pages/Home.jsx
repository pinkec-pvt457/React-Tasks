import React, { useState, useEffect } from 'react'
import myImage from '../assets/myImage.png'
import { Link } from 'react-router-dom'

const Home = () => {

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0); // To track which text is displayed

  let texts = ["PinKeC", "Developer"]
  let speed = 100
  let eraseSpeed = 100
  let pauseTime = 1000
  const currentText = texts[textIndex]


  useEffect(() => {
    let timeout;

    if (!isDeleting && index < currentText.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[index]);
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      // Erasing effect
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, eraseSpeed);
    } else {
      // Pause before switching between typing and deleting
      timeout = setTimeout(() => {
        if (isDeleting) {
          // Move to the next text after deleting
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
        setIsDeleting(!isDeleting);
      }, pauseTime);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, texts, textIndex, speed, eraseSpeed, pauseTime]);

  return (
    <div className='flex flex-col md:flex-row h-full w-full bg-gradient-to-r from-[#E684AE] via-[#79CBCA] to-[#77A1D3] dark:bg-gradient-to-l dark:from-[#4c2335e0] dark:via-[#047c7c72] dark:to-[#19385e] text-black dark:text-gray-300 transition-all duration-300'>
      <div className='w-full md:w-[50%] text-4xl lg:text-7xl font-serif h-[40%] md:h-full pl-12 pt-12 md:pl-20 md:pt-20'>
        <span className='block'>Hey</span>
        <span className='block'>This is</span>
        <span>The </span>
        <span className={`inline-block ${textIndex == 0 ? "text-pink-600/75" : "text-blue-800"}`}>{displayedText}</span>
      </div>
      <div className='flex md:items-center justify-end p-12 md:flex-col-reverse md:gap-32 font-serif h-[60%] md:h-full w-full md:w-[50%]'>
        <div>
          <h3 className='text-2xl'>My previos assignments...</h3>
          <div className='pl-5'>
            <div className='flex gap-1'>
              <span>&#8728;</span>
              <Link to="/Counter">Try Counter</Link>
            </div>
            <div className='flex gap-1'>
              <span>&#8728;</span>
              <Link to="/Task-Manager">Try Task-Manager</Link>
            </div>
          </div>
        </div>
        <div className='size-[40%]'>
          <img className='border-2 rounded-full' src={myImage} alt="My Own Image" />
        </div>
      </div>
    </div>
  )
}

export default Home