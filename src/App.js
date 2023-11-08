import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("Tired");

  useEffect(() => {
    console.log(`It's ${emotion} right now!`);
  }, [emotion]);


  useEffect(() => {
    console.log(`It's ${secondary} right now!`);
  }, [secondary]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Current emotion is {emotion}</h1>
        <hr width="70%"/>
        <button className="App-Button"
          onClick={() => setEmotion("Sad")}>Sad</button>
        <p style={{height: "0.1px"}}></p>
        <button
            className="App-Button"
            onClick={() => setEmotion("Excited!")}
          >Excited</button>
        <hr width="70%"/>

        <h1>Current secondary emotion is {secondary}</h1>
        <hr width="70%"/>
        <p style={{height: "0.1px"}}></p>
        <button
            className="App-Button"
            onClick={() => setSecondary("Tired!")}
        >Tired</button>
        <p style={{height: "0.1px"}}></p>
        <button
            className="App-Button"
            onClick={() => setSecondary("Grateful!")}
        >Grateful</button>
      </header>
    </div>
  );
}

export default App;
