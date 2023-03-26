import axios from "axios";
import gdscLogo from "../assets/gdsc-logo.png";
import "../assets/css/App.css";
import { useEffect, useState } from 'react'

function App() {
  
  const [newsData, setNewsData] = useState([]);

  // useEffect(() => {
  //   axios.get('https://fastapi-pypdf.onrender.com/')
  //   .then(function(res){
  //     setNewsData(res.data)
  //   })
  // },[])

  // console.log(newsData)

  return (
    <div className="content">
      <img src={gdscLogo} alt="GDSC Logo" className="logo" />
      <div className="card">
        <p className="question">Hello 👋🏻, how are you feeling today?</p>
        <form>
          <div className="input-main">
            <input type="text" placeholder="Today i felt ..." className="input" name="data" />
            <button type="submit" className="search-button">
              <i className="bi bi-send"></i>
            </button>
          </div>
        </form>
        
        {/* <hr />
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
        </div> */}
      </div>
    </div>
  );
}

export default App;
