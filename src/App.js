import './App.css';
import { useRef } from "react";

function App() {

  const txtTitle = useRef();
  const hexColor = useRef();

  console.log(txtTitle)
  console.log(hexColor)
  const submit = (e) => {
    e.preventDefault();

    const title = txtTitle.current.value;
    const color = hexColor.current.value;

    alert(`${title}, ${color}`);

    txtTitle.current.value = "";
    hexColor.current.value = "";
  };
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input ref={txtTitle} className="App-Input" type="text" placeholder="color title..."/>
        <input ref={hexColor} type="color"/>
        <br/>
        <button className="App-Button">Add</button>
      </form>
    </div>
  );
}

export default App;
