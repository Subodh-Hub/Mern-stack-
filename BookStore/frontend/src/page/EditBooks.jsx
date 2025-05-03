import { ToastContainer } from "react-toastify";
import BackButton from "../components/BackButton";
import useEditBooks from "../hooks/useEditBooks";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { LuLoaderPinwheel } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa";

const EditBooks = () => {
  const { id } = useParams();
  const [booksData, setBooksData] = useState([]);
  const { loading, formik } = useEditBooks(booksData);

  useEffect(() => {
    axios
      .get("http://localhost:5555/books/" + id)
      .then((res) => {
        setBooksData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <BackButton />
      <ToastContainer />
      <h1>Edit Books</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-3 border-2 border-sky-400 rounded-xl w-[600px] px-4 py-5 m-auto"
      >
        <div className="my-4 flex flex-col gap-2">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            onBlur={formik.handleBlur}
            className="border-2 border-gray-500 rounded-lg p-2 w-full"
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-500 text-sm font-[400]">
              {formik.errors.title}
            </div>
          ) : null}
        </div>
        <div className="my-4 flex flex-col gap-2">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={formik.handleChange}
            value={formik.values.author}
            onBlur={formik.handleBlur}
            className="border-2 border-gray-500 rounded-lg p-2 w-full"
          />
          {formik.touched.author && formik.errors.author ? (
            <div className="text-red-500 text-sm font-[400]">
              {formik.errors.author}
            </div>
          ) : null}
        </div>
        <div className="my-4 flex flex-col gap-2">
          <label htmlFor="publishYear">Publish Year:</label>
          <input
            type="text"
            id="publishYear"
            name="publishYear"
            onChange={formik.handleChange}
            value={formik.values.publishYear}
            onBlur={formik.handleBlur}
            className="border-2 border-gray-500 rounded-lg p-2 w-full"
          />
          {formik.touched.publishYear && formik.errors.publishYear ? (
            <div className="text-red-500 text-sm font-[400]">
              {formik.errors.publishYear}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="bg-sky-400 w-fit px-9 py-2 border-gray-300 border-2 border-solid rounded-sm text-black font-[600] cursor-pointer hover:bg-sky-300 hover:rounded-tl-2xl hover:rounded-br-2xl transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center gap-2">
            Update{" "}
            {loading ? (
              <LuLoaderPinwheel className="animate-spin" />
            ) : (
              <FaAngleRight />
            )}
          </div>
        </button>
      </form>
    </>
  );
};

export default EditBooks;
