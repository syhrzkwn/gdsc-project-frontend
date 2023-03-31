import axios from "axios";
import gdscLogo from "../assets/gdsc-logo.png";
import { useState } from "react";

function App() {
  // testing purpose set 1
  // const [quote, setQuote] = useState("");
  // const getQuote = () => {
  //   axios.get("https://fastapi-pypdf.onrender.com/")
  //     .then((res) => {
  //       console.log(res.data.message);
  //       setQuote(res.data.message);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const [post, setPost] = useState({
    data: ''
  });

  const handleInput = (event) => {
    setPost({...post, [event.target.name]: event.target.value})
  }

  const handleSubmit = async() => {
    // store the states in the form data
    const formData = new FormData();
    formData.append("data", post.data)

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "https://fastapi-pypdf.onrender.com/predict",
        data: formData,
        headers: {"Content-Type": "multipart/form-data"},
      })
    } catch (error) {
      console.log(error)
    }
  }

  // testing purpose set 1
  // when click the button, should expect response message on the console and also under the button
  // return (
  //   <div className="content">
  //     <button onClick={getQuote}>Get Quote</button>
  //     {quote && <p>{quote}</p>}
  //   </div>
  // );

  return (
    <div className="content">
      <img src={gdscLogo} alt="GDSC Logo" className="logo" />
      <div className="card">
        {/* Question and Input section */}
        <p className="question">Hello 👋🏻, how are you feeling today?</p>
        <form onSubmit={handleSubmit}>
          <div className="input-main">
            <input
              type="text"
              name="data"
              onChange={handleInput}
              placeholder="Today i felt ..."
              className="input"
              value={post.data}
            />
            <button type="submit" className="search-button">
              <i className="bi bi-send"></i>
            </button>
          </div>
        </form>
        {/* Respond section */}
        {/* How to return the response over here */}
        <div>
          <hr/>
          <p className="respond-title">Respond:</p>
          <p className="respond-text">
            Example.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
