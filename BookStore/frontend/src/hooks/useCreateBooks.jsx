import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { booksValidationSchema } from "./booksValidationSchema";
import { toast } from "react-toastify";

const useCreateBooks = () => {
  const [loading, setLoading] = useState(true);
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      description: "",
    },
    validationSchema: booksValidationSchema,
    onSubmit: (values) => {
      setLoading(true);
      axios
        .post("http://localhost:5555/books", values)
        .then((res) => {
          toast.success(res?.data?.message);
          console.log("res", res?.data?.message);
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          toast.error(err);
          setLoading(false);
        });
    },
  });

  return { loading, formik };
};

export default useCreateBooks;
