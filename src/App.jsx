import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  function changeHandler() {
    const newText = event.target.value;
    setText(newText);
    console.log(newText);
    console.log(text);
  }

  function addToArray(prev) {
    setArray((prev) => {
      return [...prev, text];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandler} type="text" value={text} />
        <button onClick={addToArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {array.map((ele) => {
            return <li>{ele}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
