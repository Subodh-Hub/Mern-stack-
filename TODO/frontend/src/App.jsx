import { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import { ToastContainer } from "react-toastify";
import axios from "axios";
const App = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodos = () => {
    setLoading(true);
    setError(null);
    axios
      .get("http://localhost:3000/get")
      .then((res) => {
        setTodo(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log("error");
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleCompleted = (id) => {
    axios
      .put(`http://localhost:3000/completed/${id}`)
      .then((res) => location.reload())
      .catch((err) => console.log(err));
  };

  const handleIncompleted = (id) => {
    axios
      .put(`http://localhost:3000/incompleted/${id}`)
      .then((res) => location.reload())
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((res) => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-[#000] text-white px-6 py-10">
      <h2 className="font-DavidLibre text-[#00ffcc] font-bold text-5xl text-center mb-10 drop-shadow-lg">
        TODO List
      </h2>

      <CreateTodo />

      <div className="mt-10 space-y-4">
        {loading ? (
          <div className="text-center text-gray-400 text-lg animate-pulse">
            Loading your tasks...
          </div>
        ) : error ? (
          <div className="text-center text-red-500 text-lg space-y-4">
            <p>{error?.message || "Something went wrong."}</p>
            <button
              onClick={fetchTodos}
              className="bg-[#00ffcc] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#00e6b8] transition duration-300"
            >
              Retry
            </button>
          </div>
        ) : todo.length < 1 ? (
          <div className="text-center text-gray-500 text-lg mt-10">
            No tasks available.
          </div>
        ) : (
          todo.map((item) => (
            <div
              key={item._id}
              className=" flex flex-col bg-[#1a1a1a] border border-gray-700 rounded-xl px-5 py-4 shadow-md hover:shadow-[#00ffcc]/30 transition duration-300"
            >
              <div className="flex justify-between items-center">
                <p
                  className={`font-Chivo text-lg ${
                    item.done ? "line-through" : "no-underline"
                  }`}
                >
                  {item.task}
                </p>
                <div className="flex gap-3">
                  {item.done ? (
                    <button
                      onClick={() => handleIncompleted(item._id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300 cursor-pointer"
                    >
                      Incomplete
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCompleted(item._id)}
                      className={`bg-[#00ffcc] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#00e6b8] transition duration-300 cursor-pointer`}
                    >
                      Complete
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div>
                
              </div>
            </div>
          ))
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
