import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Check if all characters are typed
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 100); // Typing speed: 100 milliseconds

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [text, index]);

  return (
    <div>
      <h1>{displayText}</h1>
    </div>
  );
};

export default Typewriter;
