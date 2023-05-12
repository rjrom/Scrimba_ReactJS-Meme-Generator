import React from "react";
import memesData from "../memesData.js";
export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
      });

      function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({...prevMeme, [name]: value}))
    }

      function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme((prevState) => {
          return {
            ...prevState,
            randomImage: url
          };
        });
      }
  return (
    <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            {/* <img src={memeImage} className="meme--image"/> */}
            <div className="meme--container">
                <p className="meme--text top">{meme.topText}</p>
                <p className="meme--text bottom">{meme.bottomText}</p>
                <img src={meme.randomImage} alt="meme image" id="meme-image" className="meme--image"/>
            </div>
        </main>
  );
}
