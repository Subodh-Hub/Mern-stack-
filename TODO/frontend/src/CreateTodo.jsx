import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const CreateTodo = () => {
  const [task, setTask] = useState();
  const handleAddTodo = () => {
    if (!task || task.trim() === "") {
      return toast.error("Please enter a task");
    } else {
      axios
        .post("http://localhost:3000/add", { task: task })
        .then((res) => {
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-6 min-h-20 justify-center bg-[#000]">
      <input
        type="text"
        placeholder="What needs to be done?"
        onChange={(e) => setTask(e.target.value)}
        className="w-72 sm:w-96 px-5 py-3 text-white bg-[#1a1a1a] border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00ffcc] placeholder-gray-400 font-Chiva shadow-lg"
      />
      <button
        type="submit"
        onClick={handleAddTodo}
        className="px-6 py-3 text-[#000] font-semibold font-Chiva bg-[#00ffcc] hover:bg-[#00e6b8] rounded-xl transition-all duration-300 border-2 border-transparent hover:border-[#00ffcc] shadow-lg hover:shadow-[#00ffcc]/40"
      >
        Add
      </button>
    </div>
  );
};

export default CreateTodo;
