import './App.css';
import { useState, useEffect } from "react";

const query = `
query {
  allLifts {
    name,
    elevationGain,
    status
  }
}`;
 const opts = {
   method: "POST",
   headers: { "Content-Type": "application/json"},
   body: JSON.stringify({ query })
 };


function Lift ({ name, elevationGain, status}) {
  return (
      <div className="App">
        <h2>{name}</h2>
        <hr style={{width: "25%"}}/>
        <p>{elevationGain} {status}</p>
      </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://snowtooth.moonhighway.com/`, opts)
        .then((response) => response.json())
        .then((data) => setData(data.data))
        .then(() => setLoading(false))
        .catch(setError);
  }, []);

  if (loading) return <h1 className="App">Loading...</h1>
  if (error) return <pre>{JSON.stringify(error)}</pre>
  return (
    <div>
      <h1 className="App">GraphQL API Data</h1>
      {
        data?.allLifts.map((lift) => <Lift {...lift}/>)
      }
    </div>
  );
}

export default App;
