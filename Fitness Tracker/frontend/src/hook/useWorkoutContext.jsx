import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw Error(
      "useWorkoutContext must be used inside a WorkoutContextProvider"
    );
  } else {
    return context;
  }
};

export default useWorkoutContext;
