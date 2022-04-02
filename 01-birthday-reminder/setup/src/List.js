import React from "react";

const List = ({ user }) => {
  return (
    <>
      {user.map((data) => {
        const { id, name, age, image } = data;
        return (
          <article className="person" key={id}>
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <h5>{age}</h5>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
