import Terminal from './Terminal'; // Import the new Terminal component
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Terminal /> {/* Add the Terminal component here */}
      <div className="logo">
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="key_card_basic"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking="true" // Corrected attribute
            execution-while-out-of-viewport="true" // Corrected attribute
            execution-while-not-rendered="true" // Corrected attribute
            web-share="true" // Corrected attribute
            src="https://sketchfab.com/models/cb1b7f819d73437f81e8a3d7f2cfe961/embed"
          ></iframe>
          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
              href="https://sketchfab.com/3d-models/key-card-basic-cb1b7f819d73437f81e8a3d7f2cfe961?utm_medium=embed&utm_campaign=share-popup&utm_content=cb1b7f819d73437f81e8a3d7f2cfe961"
              target="_blank"
              rel="noopener noreferrer" // Changed rel for security
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              key_card_basic
            </a>{' '}
            by{' '}
            <a
              href="https://sketchfab.com/resistancedao?utm_medium=embed&utm_campaign=share-popup&utm_content=cb1b7f819d73437f81e8a3d7f2cfe961"
              target="_blank"
              rel="noopener noreferrer" // Changed rel for security
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              resistancedao
            </a>{' '}
            on{' '}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=cb1b7f819d73437f81e8a3d7f2cfe961"
              target="_blank"
              rel="noopener noreferrer" // Changed rel for security
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Sketchfab
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App;
