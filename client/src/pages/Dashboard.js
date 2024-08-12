import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css'; // Make sure this is the correct file name
import Headers1 from '../component/Header2';
import History from './History';
import { generateScript } from "../services/Apis"
import Footer from '../component/footer';


const Dashboard = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [scriptResponse, setScriptResponse] = useState(''); // State to store the response from the API
  const [scriptResponse1, setScriptResponse1] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const [question, setQuestion] = useState('');
  const [model, setModel] = useState('mixtral-8x7b-32768');
  const [memoryLength, setMemoryLength] = useState(5);
  const [response, setResponse] = useState('');
  const [scene, setScene] = useState('');

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid");
    } else {
      navigate("*");
    }
  };

  useEffect(() => {
    userValid();
  }, [navigate]);

  // const handleSubmit = async (e) => {
  //   const res = await fetch('http://localhost:5001/api/explain', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       question,
  //       model,
  //       memory_length: memoryLength,
  //     }),
  //   });
  //   const data = await res.json();
  //   setResponse(data.response);
  // };
  const handleExplain = async () => {
    const res = await fetch('http://localhost:5001/api/explain', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question,
        model,
        memory_length: memoryLength,
      }),
    });
    const data = await res.json();
    setScriptResponse(data.response);
  };
  const handleSubmit=()=>{}
  const handleCreateScene = async () => {
    const res = await fetch('http://localhost:5001/api/create_scene', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question,
        model,
        memory_length: memoryLength,
      }),
    });
    const data = await res.json();
    setScriptResponse1(data.response);
    };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <>
      <Headers1 onToggleHistory={toggleHistory} showHistory={showHistory} />
      <div className={`dashboard-container ${showHistory ? 'shrink' : ''}`}>
        <History isVisible={showHistory} />
        <div className="video-container">
          <video className="video-player" controls>
            <source src="path_to_your_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="content-container">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="inputField" className="form-label">Ask Your Query:</label>
              <input
              placeholder="Ask a question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
                type="text"
                id="inputField"
                className="input-field"
              />
            </div>
          </form>
          {/* <div>
            <h2 className="script-title">Script:</h2>
            
          </div> */}
          {/* <textarea
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      /> */}
      <div className='divx'>
          Model: 
        <select value={model} onChange={(e) => setModel(e.target.value)} className='ss'>
          <option value="mixtral-8x7b-32768">mixtral-8x7b-32768</option>
          <option value="llama3-8b-8192">llama3-8b-8192</option>
          <option value="llama3-groq-8b-8192-tool-use-preview">llama3-groq-8b-8192-tool-use-preview</option>
          <option value="llama3-groq-70b-8192-tool-use-preview">llama3-groq-70b-8192-tool-use-preview</option>
          <option value="llama3-70b-8192">llama3-70b-8192</option>
          <option value="llama-guard-3-8b">llama-guard-3-8b</option>
          <option value="llama-3.1-8b-instant">llama-3.1-8b-instant</option>
          <option value="llama-3.1-70b-versatile">llama-3.1-70b-versatile</option>
          <option value="gemma2-9b-it">gemma2-9b-it</option>
          <option value="gemma-7b-it">gemma-7b-it</option>
        </select>
        Memory Length:
        <input
          type="number"
          value={memoryLength}
          onChange={(e) => setMemoryLength(e.target.value)}
          min="1"
          max="10"
          
        />
        </div>
          {/* <div>
            <a href="path_to_your_video.mp4" download className="download-button">
              Download Video
            </a>
          </div> */}
        </div>
        <button onClick={handleExplain} className="submit-button" >submit</button>
      <button onClick={handleCreateScene} className="submit-button1" >Create Scene</button>
      </div>
      <div className='dev'>
      <h2 className='dd'>Response:</h2>
      <h2 className='dd1'>Scene Description:</h2>
      </div>
      <div className='qq'>
      <textarea
              rows="15"
              cols="50"
              className="script-textarea"
              value={scriptResponse} // Display the API response here
              readOnly
            />
     
      <textarea
              rows="15"
              cols="50"
              className="script-textarea1"
              value={scriptResponse1} // Display the API response here
              readOnly
            />
     </div>
     <Footer/>
    </>
  );
};

export default Dashboard;