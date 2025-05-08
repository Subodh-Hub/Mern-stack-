import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useLogin from "../hook/useLogin";
import { VscLoading } from "react-icons/vsc";
import { ToastContainer } from "react-toastify";
const Login = () => {
  const { loading, formik } = useLogin();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center px-[20px]">
      <form
        className="bg-gray-100 w-[650px] h-fit rounded-[60px] px-10 py-20 flex flex-col gap-4"
        onSubmit={formik.handleSubmit}
      >
        <h3 className="font-[600] text-[42px] mb-[18px]">Login</h3>

        <div>
          <label htmlFor="email" className="text-[16px] text-[#444] font-[400]">
            Email
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="text-[16px] text-[#444] font-[400]"
          >
            Password
          </label>
          <br />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <span
            className="absolute top-8 right-2 cursor-pointer h-6 w-6"
            onClick={togglePassword}
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </span>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-secondaryLight px-3 py-2 font-[600px] text-[18px] font-Poppins rounded-md text-[#000] hover:bg-secondary hover:text-[#fff] transition-all ease-in duration-300 mt-[18px] cursor-pointer flex gap-3 justify-center items-center"
        >
          Login
          {loading && (
            <span className="ml-2">
              <VscLoading className="animate-spin" />
            </span>
          )}
        </button>
        <button
          type="submit"
          className="text-[#444] cursor-pointer hover:text-secondary transition-all ease-in duration-300 "
          onClick={() => navigate("/logisignup")}
        >
          Go back to signup 👈
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
