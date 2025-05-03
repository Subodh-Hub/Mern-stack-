import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
const ShowBooks = () => {
  const { id } = useParams();
  const [booksDetails, setBooksDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBooksDetails(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-8 font-SpaceThink tracking-[4px]">
        Book Details{" "}
        <span className="p-2 bg-sky-800 text-white rounded-lg font-Poppins tracking-[0.97px]">
          {booksDetails.title}
        </span>
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{booksDetails._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">title</span>
            <span>{booksDetails.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{booksDetails.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{booksDetails.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Created Time</span>
            <span>
              {new Date(booksDetails.createdAt).toString()}{" "}
              {booksDetails.createdAt}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>
              {new Date(booksDetails.createdAt).toString()}{" "}
              {booksDetails.updatedAt}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBooks;
