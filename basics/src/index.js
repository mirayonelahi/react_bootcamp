import ReactDom from "react-dom";
import "./index.css";
import Book from "./components/book";
import { booksData } from "./data/data";
const BookList = () => {
  return (
    <section className="booklist">
      {booksData.map((book) => {
        return <Book key={book.title} {...book} />;
      })}
    </section>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
