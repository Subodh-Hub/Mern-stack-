import { createContext, useReducer } from "react";
import { workoutsReducer } from "../components/workoutsReducer";
export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    count: null,
    workouts: [],
  });
  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
