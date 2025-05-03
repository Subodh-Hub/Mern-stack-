import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const [deleteData, setDeleteData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5555/books/" + id)
      .then((res) => {
        setDeleteData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete("http://localhost:5555/books/" + id)
      .then((res) => {
        toast.success(res?.data?.message);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.message);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <ToastContainer />
      <h1>Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-4 border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h1 className="text-center">{deleteData?.title}</h1>

          <h3 className=" text-center">
            Are you sure you want to delete this book?
          </h3>
          <div className="flex justify-end gap-4">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={handleDeleteBook}
            >
              Yes Delete it
            </button>
            <button
              className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={() => navigate("/")}
            >
              No go back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteBooks;
