import axios from "axios";
import gdscLogo from "../assets/gdsc-logo.png";
import { useEffect, useState } from 'react'

function App() {
  // try and error
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://fastapi-pypdf.onrender.com/").then((response) => response.json().then(json => {
      console.log(json);
    }));
  }

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }

  return (
    <div className="content">
      <img src={gdscLogo} alt="GDSC Logo" className="logo" />
      <div className="card">
        {/* Question and Input section */}
        <p className="question">Hello 👋🏻, how are you feeling today?</p>
        <form>
          <div className="input-main">
            <input 
              type="text"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Today i felt ..."
              className="input"
              name="data"
            />
            <button type="submit" className="search-button">
              <i className="bi bi-send"></i>
            </button>
          </div>
        </form>
        {/* Respond section */}
        <hr />
        <div>
          <p className="respond-title">Respond:</p>
          <p className="respond-text">
            Example Example Example Example Example Example Example Example
            Example Example Example Example Example Example Example Example
            Example Example Example Example Example Example Example Example
            Example Example Example Example Example Example Example Example
            Example Example Example Example Example Example Example Example
            Example Example Example Example Example Example Example Example
            Example Example Example Example Example Example Example Example
            Example Example Example Example Example Example Example Example
            Example Example Example Example Example Example Example Example
            Example Example Example Example Example Example Example Example
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
