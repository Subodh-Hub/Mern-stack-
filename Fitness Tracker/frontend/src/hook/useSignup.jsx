import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import apiClient from "../api/axiosInterceptor";
import { toast } from "react-toastify";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      middleName: Yup.string().optional(),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email"),
      password: Yup.string().min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      apiClient
        .post("/user/signup", values)
        .then((res) => {
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          toast.success(res.data.message);
          setLoading(false);
        })
        .catch((err) => {
            console.log(err.response.data.error);
          toast.error(err.response.data.error);
          setLoading(false);
        });
    },
  });

  return { formik, loading };
};

export default useSignup;
