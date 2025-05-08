import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAuthContext } from "./useAuthContext";
import apiClient from "../api/axiosInterceptor";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email"),
      password: Yup.string().min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: (values) => {
      setLoading(true);

      apiClient
        .post("user/login", values)
        .then((res) => {
          // save user to local storage
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setLoading(false);
          console.log(res.data);

          // update the authcontext
          dispatch({ type: "LOGIN", payload: res.data });
          toast.success(res.data.message);

          navigate("/");
        })
        .catch((err) => {
          toast.error(err.response.data.error);
          setLoading(false);
        });
    },
  });

  return { formik, loading };
};

export default useLogin;
