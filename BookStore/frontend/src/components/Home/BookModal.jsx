import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          onClick={onClose}
          className="absolute top-6 right-6 cursor-pointer text-red-600"
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-center items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-3">Anything you want to show</p>
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum qui
          voluptates neque saepe ad corrupti quod nobis placeat hic error quis
          vero voluptatem ducimus accusantium enim assumenda modi inventore
          repellat delectus non molestiae eaque temporibus, doloribus rem.
          Excepturi nobis iusto dolores nihil! Accusamus sapiente magnam, fugiat
          dolores esse adipisci temporibus officiis labore consequatur est,
          aspernatur sint deserunt qui fuga quaerat neque numquam nihil alias?
          Laborum ipsa minima consequuntur doloribus optio cum ipsam et vero,
          fuga beatae distinctio nostrum ut id explicabo impedit suscipit?
          Voluptatibus praesentium dolor pariatur aliquid harum et esse maiores
          perspiciatis aut? Rem sit ea inventore nemo nihil.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
