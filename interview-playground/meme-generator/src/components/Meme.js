import React, { useEffect, useState } from "react";

export default function Meme() {
  const [data, setData] = useState([]);
  const [text, setText] = useState({ bottomText: "", topText: "" });
  const [formData, setFormData] = useState("");
  const url = "https://api.imgflip.com/get_memes";

  const handleSubmit = (e) => {
    const randomNumber = Math.floor(Math.random() * 100);
    const url = data.memes[randomNumber].url;
    setFormData(url);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText((prev) => ({ ...prev, [name]: value }));
  };

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={text.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={text.bottomText}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img
          src={formData || `https://i.imgflip.com/30b1gx.jpg`}
          className="meme--image"
          alt="imageofmeme"
        />
        <h2 className="meme--text top">{text.topText}</h2>
        <h2 className="meme--text bottom">{text.bottomText}</h2>
      </div>
    </main>
  );
}
