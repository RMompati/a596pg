import './App.css';
import { useState, useEffect } from "react";

function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  return [
    {value, onChange: (e) => setValue(e.target.value)},
    () => setValue(initialValue)
  ];
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/RMompati`)
        .then((response) => response.json())
        .then(setData);
  }, []);


  return (
    <div>
      <h1 className="App">Github API Data</h1>

      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <h5>No data</h5>}
    </div>
  );
}

export default App;
