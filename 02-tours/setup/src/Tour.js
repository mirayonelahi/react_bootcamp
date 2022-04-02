import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, deleteId }) => {
  const [readMore, setReadMore] = useState(false);
  const handleRemove = (e, id) => {
    deleteId(id);
  };
  return (
    <article className="single-tour">
      <img src={image} alt={image} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price} </h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? `show less` : `read more`}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={(e) => {
            handleRemove(e, id);
          }}
        >
          {" "}
          Not Interested{" "}
        </button>
      </footer>
    </article>
  );
};

export default Tour;
