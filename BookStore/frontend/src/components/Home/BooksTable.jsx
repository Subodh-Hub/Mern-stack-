import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
const BooksTable = ({ booksData }) => {
  return (
    <table className="w-full border-separate border border-slate-500 spacing-2">
      <thead>
        <tr className="font-Playfair text-[24px] font-[600]">
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {booksData?.books.map((book, index) => (
          <tr key={book._id} className="font-Poppins text-[18px] text-[#444]">
            <td className="border border-slate-600 rounded-md">{index + 1}</td>
            <td className="border border-slate-600 rounded-md">{book.title}</td>
            <td className="border border-slate-600 rounded-md max-md:hidden">
              {book.author}
            </td>
            <td className="border border-slate-600 rounded-md max-md:hidden">
              {book.publishYear}
            </td>
            <td className="border border-slate-600 rounded-md py-2">
              <div className="flex justify-center items-center gap-x-4 ">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
