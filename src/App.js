import './App.css';
import { useReducer } from "react";

function App() {

  const [checked, setChecked] = useReducer((checked) => !checked, false, undefined);

  return (
    <div className="App">
      <label>
        <input type="checkbox"
               value={checked}
               onChange={setChecked}/>
        {checked ? "Checked" : "Not Checked"}
      </label>
    </div>
  );
}

export default App;
