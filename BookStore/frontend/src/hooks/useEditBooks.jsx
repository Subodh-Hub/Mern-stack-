import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useEditBooks = (initialValues) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  if (!initialValues) return null;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: initialValues.title || "",
      author: initialValues.author || "",
      publishYear: initialValues.publishYear || "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      author: Yup.string().required("Author is required"),
      publishYear: Yup.string().required("Publish Year is required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      // You can update the book here with axios.put or patch
      if (formik.dirty) {
        axios
          .put("http://localhost:5555/books/" + initialValues._id, values)
          .then((res) => {
            toast.success(res?.data?.message);
            setTimeout(() => {
              setLoading(false);
              navigate("/");
            }, 3000);
          })
          .catch((err) => {
            toast.error(err);
          });
      } else {
        setLoading(false);
        toast.error("No changes made");
      }
    },
  });

  return { formik, loading };
};

export default useEditBooks;
