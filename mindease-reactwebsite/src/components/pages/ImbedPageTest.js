import React from 'react';

function StreamlitEmbed() {
  return (
    <div className="streamlit-container">
      <iframe
        title="Streamlit App"
        src="http://localhost:8501" // Adjust the port if needed
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      ></iframe>
    </div>
  );
}

export default StreamlitEmbed;
