import './App.css';
import { useState, useEffect } from "react";

function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  return [
    {value, onChange: (e) => setValue(e.target.value)},
    () => setValue(initialValue)
  ];
}

function GitHubUser ({ name, location, avatar_url}) {
  return (
      <div className="App">
        <h2>{name}</h2>
        <hr style={{width: "25%"}}/>
        <p>Based in: {location}</p>
        <img src={avatar_url} height={200} alt={"Github Avatar"}/>
      </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/RMompati`)
        .then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
  }, []);

  if (loading) return <h1 className="App">Loading...</h1>
  if (error) return <pre>{JSON.stringify(error)}</pre>
  return (
    <div>
      <h1 className="App">Github API Data</h1>
      { data ? <GitHubUser {...data}/> : <h2>No data...</h2> }
    </div>
  );
}

export default App;
