import './App.css';
import { useState } from "react";

function App() {

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000000")
  };
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input value={title}
               className="App-Input"
               type="text"
               placeholder="color title..."
               onChange={(e) => setTitle(e.target.value)}
        />
        <input value={color}
               type="color"
               onChange={(e) => setColor(e.target.value)}
        />
        <br/>
        <button className="App-Button">Add</button>
      </form>
    </div>
  );
}

export default App;
