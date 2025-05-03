import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import BooksTable from "../components/Home/BooksTable";
import BooksCard from "../components/Home/BooksCard";

const Home = () => {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooksData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          onClick={() => setShowType("table")}
          className="bg-[#ffd3b6] hover:bg-sky-600 px-4 py-1 rounded-lg cursor-pointer"
        >
          Table
        </button>
        <button
          onClick={() => setShowType("card")}
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg cursor-pointer"
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-Warough text-[58px] bg-gradient-to-br from-red-400 to-purple-400 bg-clip-text text-transparent">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Book
          </button> */}
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable booksData={booksData} />
      ) : (
        <BooksCard booksData={booksData} />
      )}
    </div>
  );
};

export default Home;
