// frontend/src/App.js
import './App.css';
import { useRef, useState, useEffect } from 'react';
import { upload_data } from './Services.js/api_connect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function App() {
  const fileInputRef = useRef();
  const [finalLink, setFinalLink] = useState('');
  const [file, setFile] = useState(null);
  const [buttonText, setButtonText] = useState('Upload');

  const uploadOnClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const getData = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);

        let response = await upload_data(data);
        setFinalLink(response.path);
        setButtonText('Share another file'); // Update the button text
      }
    };
    getData();
  }, [file]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(finalLink)
      .then(() => {
        console.log('Link copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy the link: ', error);
      });
  };

  return (
    <div className="app-container">
      <h1>ShareLink</h1>
      <h2>Upload and share your files instantly with easy-to-use download links</h2>
      <div className="white-container">
        <div className='upload-section'>
          <h1 className='upload'>Send It Up!</h1>
          <div className='button' onClick={uploadOnClick}>
            <button className="styled-button">{buttonText}</button>
            <input
              type='file'
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          {finalLink && (
  <div className="link-box">
    <a href={finalLink} target="_blank" rel="noopener noreferrer">
      {finalLink}
    </a>
    <FontAwesomeIcon
      icon={faCopy}
      className="copy-icon"
      onClick={copyToClipboard}
    />
  </div>
)}
        </div>
      </div>
    </div>
  );
}

export default App;