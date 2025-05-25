import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import apiClient from "../api/axiosInterceptor";
import useWorkoutContext from "./useWorkoutContext";
const useAddWorkout = () => {
  const { dispatch } = useWorkoutContext();

  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: "",
      load: "",
      reps: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      load: Yup.number().required("Load is required and must be in numbers"),
      reps: Yup.number().required("Reps is required and must be in numbers"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      apiClient
        .post("/workouts", values)
        .then((res) => {
          toast.success("Workout added successfully");
          dispatch({ type: "CREATE_WORKOUT", payload: res.data?.workout });
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          setLoading(false);
        });
    },
  });

  return { formik };
};

export default useAddWorkout;
