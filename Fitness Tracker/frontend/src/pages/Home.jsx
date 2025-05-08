import React, { useEffect, useState } from "react";
import apiClient from "../api/axiosInterceptor";
import WorkoutCard from "../components/WorkoutCard";
import AddWorkoutCard from "../components/AddWorkoutCard";
import { ToastContainer } from "react-toastify";
import useWorkoutContext from "../hook/useWorkoutContext";
import { useAuthContext } from "../hook/useAuthContext";
const Home = () => {
  const { state, dispatch } = useWorkoutContext();
  const { userState } = useAuthContext();
  const { user } = userState;
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);
  useEffect(() => {
    if (user) {
      apiClient
        .get("/workouts")
        .then((res) => {
          dispatch({ type: "SET_WORKOUTS", payload: res.data });
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
         setLoading(false);
          console.log(err);
        });
    }
  }, [user]);
  console.log("login auth", userState);

  if(!user){
    setError("You must logged in to view this page");
    return (<h1>Failed to retrieve the data from server</h1>)
  }
  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <div>
          <h1 className="font-Playfair text-[3rem] font-[400] text-[#444]">
            Total Workouts:{" "}
            <span className="font-[600] text-[#000]">{state?.count}</span>
          </h1>
          <div className="flex w-full lg:flex-row flex-col gap-0">
            <div className="flex gap-3 flex-col w-full">
              {state?.workouts?.map((workout) => (
                <WorkoutCard key={workout._id} workout={workout} />
              ))}
            </div>
            <div className="w-full lg:max-w-sm bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 ">
                Add New Workout
              </h2>
              <AddWorkoutCard />
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Home;
