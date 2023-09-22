import React, { useEffect, useState } from 'react';

function ComponetWillUnmounnt() {
  // Initialize state to hold the window size
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Define the event handler for resizing
  const handleResize = () => {
    // Update the state with the new window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  // Set up the event listener when the component mounts
  useEffect(() => {
    // Add the event listener for the 'resize' event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []); // The empty dependency array means this effect runs once on mount

  return (
    <div>
      <p>Window Width: {windowSize.width}px</p>
      <p>Window Height: {windowSize.height}px</p>
    </div>
  );
}

export default ComponetWillUnmounnt;
