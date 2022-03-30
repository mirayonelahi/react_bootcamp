import Image from "./image";
import Author from "./author";
import Title from "./title";

const Book = ({ title, author, image }) => {
  return (
    <article className="book">
      <Image image={image} />
      <Title title={title} />
      <Author author={author} />
    </article>
  );
};
export default Book;
