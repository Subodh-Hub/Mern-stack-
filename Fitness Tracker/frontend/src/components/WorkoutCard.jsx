import React from "react";
import { FaTrash } from "react-icons/fa";
import apiClient from "../api/axiosInterceptor";
import useWorkoutContext from "../hook/useWorkoutContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutCard = ({ workout }) => {
  const { id, title, load, reps, createdAt } = workout;

  const { dispatch } = useWorkoutContext();
  const handleDelete = () => {
    apiClient
      .delete(`/workouts/${id}`)
      .then((res) => dispatch({ type: "DELETE_WORKOUT", payload: id }))
      .catch((err) => console.log(err));
  };
  return (
    <div className="border-2 border-gray-400 px-5 py-2 rounded-tr-[20px] rounded-bl-[20px] bg-[#fafafa] max-w-[700px] relative hover:scale-105 transition-all ease-in duration-300">
      <h2 className="font-Playfair text-[1.7rem] text-secondary">{title}</h2>
      <div className="my-5">
        <p className="font-Poppins text-[#444] text-[1.3rem] font-[400]">
          Reps: <span className="font-[600]">{reps}</span>
        </p>
        <p className="font-Poppins text-[#444] text-[1.3rem] font-[400]">
          Load: <span className="font-[600]">{load}</span>
        </p>
      </div>

      <p className="text-sm text-[#aaa]">
        {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
      </p>
      <FaTrash
        className=" text-red-400 text-[1.3rem] font-[400] absolute top-2 right-3 cursor-pointer hover:text-red-500 transition-all ease-in-out duration-300"
        onClick={handleDelete}
      />
    </div>
  );
};

export default WorkoutCard;
