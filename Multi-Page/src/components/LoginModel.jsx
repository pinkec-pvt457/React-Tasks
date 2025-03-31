import React, { useState } from "react";

const LoginModal = ({ taskList, setTaskList, isOpen, onClose }) => {
  if (!isOpen) return null;

  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );
  const [inValue, setInValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleBlur = () => {
    setIsValid(inValue.trim() !== "");
  };

  function handleClick(e) {
    e.preventDefault(); // Prevents page reload

    if (inValue.trim() !== "") {
      const newTime = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      setTaskList([...taskList, { taskTitle: inValue, taskStartAt: newTime }]);

      // ✅ Close the modal after adding the task
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75">
      <div className="bg-white p-3 rounded-lg shadow-lg w-72 h-fit dark:bg-gray-600">
        <div className="flex justify-between h-14 items-start">
          <h2 className="text-4xl font-semibold text-gray-700 mb-4 h-full flex items-end dark:text-white">New Task</h2>
          <button className="text-gray-500" onClick={onClose}>
            <div className="font-mono text-2xl text-black">✖</div>
          </button>
        </div>

        <form className="flex flex-col mt-5">
          <label className="text-gray-600 dark:text-gray-300 mb-1 text-2xl">Title</label>
          <input
            type="text"
            id="inTitle"
            autoComplete="off"
            value={inValue}
            onChange={(e) => { setInValue(e.target.value); handleBlur(); }}
            onBlur={handleBlur}
            className={`p-2 rounded mb-3 text-xl border ${isValid ? "border-blue-500 ring-blue-500 focus:ring focus:ring-blue-500" : "border-red-500 ring ring-red-500 focus:border-blue-500"}`}
            placeholder="Task title..."
          />

          <div className="w-full flex justify-center mt-3">
            <button
              onClick={handleClick}
              className="bg-blue-400 text-white py-2 rounded-3xl transition-all duration-300 dark:bg-blue-900 w-fit h-14 px-5 hover:scale-105"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
