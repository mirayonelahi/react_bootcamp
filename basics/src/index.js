import ReactDom from "react-dom";
import "./index.css";
const BookList = () => {
  return (
    <section className="booklist">
      <Book
        title="Atomic Habits"
        author="James Clear"
        image="https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL200_SR200
      ,200_.jpg"
      />
      <Book
        title="Nana Loves you more"
        author="Jimmy Fallon"
        image="https://images-na.ssl-images-amazon.com/images/I/816Li6IWaAS._AC_UL200_SR200,200_.jpg"
      />
    </section>
  );
};
const Book = ({ title, author, image }) => {
  return (
    <article className="book">
      <Image image={image} />
      <Title title={title} />
      <Author author={author} />
    </article>
  );
};
const Image = ({ image }) => {
  return <img src={image} alt="book" />;
};
const Title = ({ title }) => {
  return <h1>{title}</h1>;
};
const Author = ({ author }) => {
  return <h4>{author}</h4>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
