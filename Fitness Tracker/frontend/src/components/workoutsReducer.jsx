import { toast } from "react-toastify";

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        count: action.payload.count,
        workouts: action.payload.workouts,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
        count: state.count + 1,
      };

    case "DELETE_WORKOUT":
      toast.success(action.message);
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload),
        count: state.count - 1,
      };

    default:
      return state;
  }
};
