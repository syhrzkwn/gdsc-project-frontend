import axios from "axios";
import gdscLogo from "../assets/gdsc-logo.png";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "https://googlesolutionfastapi.onrender.com/predict";
    const data = { input: inputValue };
    try {
      const res = await axios.post(url, data);
      // setResponse(res.data);
      setResponse((prevResponse) => [...prevResponse. res.data]);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      setError("An error occurred. Please try again.");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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
              onChange={handleInputChange}
              placeholder="Today i felt ... (Psst! The more you type in, the better the results)"
              className="input"
              value={inputValue}
            />
            <button type="submit" className="search-button">
              <i className="bi bi-send"></i>
            </button>
          </div>
        </form>
        {/* Respond section */}
        <div>
          {/* {error && <span>{error}</span>} */}
          {error && (
            <span>
              <hr />
              <p className="respond-title">Respond:</p>
              <p className="respond-text">{error}</p>
            </span>
          )}
          {response.length > 0 && (
            <span>
              {response.map((item, index) => {
                if (item.prediction === 0) {
                  return <span key={index}>
                    <hr />
                    <p className="respond-title">Respond:</p>
                    <p className="respond-text">
                      You were diagnosed with <strong>general anxiety disorder, major depressive disorder,
                      Hypomania, panic disorder, adjustment disorder, sexual dysfunction, and performance anxiety.</strong>
                      <span> This is may caused by your work stress, companionship issues, or life crisis.</span>
                      <span> Below are the symptoms that you may have:</span>
                      <ul>
                        <li>Anxiety</li>
                        <li>Helplessness</li>
                        <li>Emptiness</li>
                        <li>Loss of Motivation</li>
                        <li>Anhedonia</li>
                        <li>Fatigue</li>
                        <li>Increased/Decreased in Libido</li>
                        <li>Afraid to be judged</li>
                        <li>Thought of Incompetence</li>
                      </ul>
                      <br/>
                      Your confidence score is: <strong>{item.confidence_score}</strong>
                    </p>
                  </span>;
                }
                else if (item.prediction === 1) {
                  return <span key={index}>
                    <hr />
                    <p className="respond-title">Respond:</p>
                    <p className="respond-text">
                      You were diagnosed with <strong>general anxiety disorder, major depressive disorder,
                      Hypomania, panic disorder, adjustment disorder, Agoraphobia, and social phobia.</strong>
                      <span> This is may caused by your work stress, companionship issues, life crisis, or public scenario.</span>
                      <span> Below are the symptoms that you may have:</span>
                      <ul>
                        <li>Anxiety</li>
                        <li>Helplessness</li>
                        <li>Emptiness</li>
                        <li>Loss of Motivation</li>
                        <li>Anhedonia</li>
                        <li>Fatigue</li>
                        <li>Insomnia</li>
                        <li>Isolation</li>
                        <li>Social awkwardness</li>
                      </ul>
                      <br/>
                      Your confidence score is: <strong>{item.confidence_score}</strong>
                    </p>
                  </span>;
                }
                else if (item.prediction === 2) {
                  return <span key={index}>
                    <hr />
                    <p className="respond-title">Respond:</p>
                    <p className="respond-text">
                      You were diagnosed with <strong>general anxiety disorder, major depressive disorder,
                      Hypomania, panic disorder, adjustment disorder, and bipolar disorder.</strong>
                      <span> This is may caused by your work stress or companion issues.</span>
                      <span> Below are the symptoms that you may have:</span>
                      <ul>
                        <li>Anxiety</li>
                        <li>Helplessness</li>
                        <li>Emptiness</li>
                        <li>Loss of Motivation</li>
                        <li>Anhedonia</li>
                        <li>Fatigue</li>
                        <li>Isolation</li>
                      </ul>
                      <br/>
                      Your confidence score is: <strong>{item.confidence_score}</strong>
                    </p>
                  </span>;
                }
                else if (item.prediction === 3) {
                  return <span key={index}>
                    <hr />
                    <p className="respond-title">Respond:</p>
                    <p className="respond-text">
                      You were diagnosed with <strong>general anxiety disorder, major depressive disorder,
                      Hypomania, panic disorder, adjustment disorder, suicidal ideation, paranoid, Schizophrenia, borderline personality disorder, and dissociative disorder.</strong>
                      <span> This is may caused by your work stress, companion issues, public expectation, underlying unresolved health issues, hereditary traits, or type-A personality.</span>
                      <span> Below are the symptoms that you may have:</span>
                      <ul>
                        <li>Anxiety</li>
                        <li>Helplessness</li>
                        <li>Emptiness</li>
                        <li>Loss of Motivation</li>
                        <li>Anhedonia</li>
                        <li>Fatigue</li>
                        <li>Isolation</li>
                        <li>Suicidal Thoughts</li>
                        <li>Paranoia</li>
                        <li>Hearing voices</li>
                        <li>Hallucination</li>
                        <li>Competitiveness</li>
                      </ul>
                      <br/>
                      Your confidence score is: <strong>{item.confidence_score}</strong>
                    </p>
                  </span>;
                }
                else {
                  return <span>
                    <hr />
                    <p className="respond-title">Respond:</p>
                    <p className="respond-text">Something went wrong.</p>
                  </span>;
                }
              })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
