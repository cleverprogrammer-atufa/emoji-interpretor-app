import "./styles.css";
import React, { useState } from "react";

// database for app
var emojiDictionary = {
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🔥": "Fire",
  "😊": "Smiling Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "🥺": "Pleading Face",
  "✔️": "Check Mark",
  "🥰": "Smiling Face with Hearts"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  // input handler function js
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have that in our database";
      // handling errors
    }
    setMeaning(meaning);
    // react call
  }

  // click  on emoji function handler js
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "3rem" }}>Inside Out</h1>

      <input style={{ fontSize: "3rem" }} onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3> Emoji's we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
