import React, { useState, useEffect } from 'react'
import LoginModal from '../components/LoginModel'

const TaskManager = () => {

    const [task, setTask] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isEmptyList, setIsEmptyList] = useState(true);

    useEffect(() => {
        if (task.length != 0) {
            setIsEmptyList(false)
        } else {
            setIsEmptyList(true)
        }
    }, [task])

    // const endTask = (item) => {
    //     const index = task.indexOf(item)
    //     if (index != -1) {
    //         task.splice(index, 1)
    //     }
    //     setTask([...task])
    // }

    const endTask = (index) => {
        task.splice(index, 1)
        setTask([...task])
    }

    return (

        <div className="flex justify-center items-center h-full min-h-[550px] w-full bg-gradient-to-r from-[#E684AE] via-[#79CBCA] to-[#77A1D3] dark:bg-gradient-to-l dark:from-[#4c2335e0] dark:via-[#047c7c72] dark:to-[#19385e] dark:text-gray-200 text-gray-950 transition-all duration-300">
            <div className='border border-solid h-[90%] w-[80%] lg:w-[45%] rounded-3xl flex flex-col shadow-[0px_0px_100px_rgba(0,0,0,0.3)]'>
                <div className='h-[10%] w-full flex text-black dark:text-white justify-between items-center font-serif px-12 text-3xl rounded-t-3xl bg-pink-500/75 dark:bg-pink-800/45 border-b transition-all duration-300'>
                    <h1>Tasks</h1>
                    <button title='Add new Task'
                        onClick={() => setModalOpen(true)}
                        className={`text-black dark:text-white transition-all duration-300 ${isModalOpen ? "rotate-45" : "rotate-0"}`}
                    >
                        +
                    </button>
                    <LoginModal taskList={task} setTaskList={setTask} isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                </div>

                <div className='h-[90%] bg-cyan-400/25 dark:bg-white/15 rounded-b-3xl overflow-hidden transition-all duration-300'>
                    {
                        isEmptyList ? (
                            <h1 className='flex justify-center items-center text-black dark:text-white transition-all duration-300 h-full w-full text-3xl text-center font-serif'>No Task yet...</h1>
                        ) : (
                            <div className='h-full w-full rounded-b-3xl text-black dark:text-white transition-all duration-300'>
                                <div className='h-[8%] w-full md:text-2xl font-semibold leading-3.5 flex border-b font-serif'>
                                    <span className='flex justify-center items-center border-r text-center w-[15%]'>ID</span>
                                    <span className='flex justify-center items-center border-r text-center w-[35%]'>Title</span>
                                    <span className='flex justify-center items-center border-r text-center w-[25%]'>Added At</span>
                                    <span className='flex justify-center items-center text-center w-[25%]'>End Task</span>
                                </div>
                                <div className='h-[92%] max-h-[92%] overflow-y-auto scrollbar-hidden'>
                                    {
                                        task.map((element, index) => (
                                            <div key={index} className='h-[8%] w-full md:text-2xl flex border-b'>
                                                <span className='flex justify-center items-center border-r text-center w-[15%]'>{index + 1}</span>
                                                <span className='flex items-center border-r overflow-x-auto whitespace-nowrap scrollbar-hidden px-1 w-[35%]'>{element.taskTitle}</span>
                                                <span className='flex justify-center items-center border-r text-center w-[25%]'>{element.taskStartAt}</span>
                                                <span className='flex justify-center items-center w-[25%]'>
                                                    <button
                                                        onClick={() => endTask(index)}
                                                        className='font-serif font-semibold px-[5px] py-[1px] transition-all duration-300 rounded-xl size-fit bg-red-500/75 dark:bg-orange-600/80 dark:text-gray-800 shadow-[0px_0px_100px_rgba(0,0,0,0.3)] hover:scale-110 text-black'>
                                                        End
                                                    </button>
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TaskManager