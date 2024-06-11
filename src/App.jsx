import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [noClickCount, setNoClickCount] = useState(0);
  const [showEmojis, setShowEmojis] = useState(false);  // State to control emoji animation

  // Function to handle the "Yes" button click
  const handleYesClick = () => {
    if (noClickCount === 0) {
      alert("are bacha i know that u love me!!!");
    } else {
      alert(`are bacha i know that u love me!!\nchalo finally ${noClickCount} 'No' click kare 'Yes' bol he diya`);
    }
    setNoClickCount(0);  // Reset the "No" click count
    setShowEmojis(true);  // Trigger emoji animation
    setTimeout(() => setShowEmojis(false), 2000);  // Hide emojis after 2 seconds
  };

  // Function to handle the "No" button click
  const handleNoClick = () => {
    alert(`ahh!! shayad galti se No press ho gya!!\nchalo koi nhi try again`);
    setCount((count) => count + 1);
    setNoClickCount((noClickCount) => noClickCount + 1);
  };

  // Generate random left position and delay for each emoji
  const generateEmojiStyle = () => {
    const left = `${Math.random() * 100}%`;
    const delay = `${Math.random() * 2}s`;
    return { left, animationDelay: delay };
  };

  return (
    <>
    <div className="container">
      <div classname="card">
        <p>there is the question??</p>
        <button onClick={handleYesClick}>
          Yes
        </button>
        <button onClick={handleNoClick}>
          No 
        </button>
        {showEmojis && (
          <div className="emoji-container">
            {Array.from({ length: 30 }).map((_, index) => (
              <div key={index} className="emoji" style={generateEmojiStyle()}>
                🥰
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
    </>
  );
}

export default App;

