import React from 'react';
import FileUpload from './FileUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>File Upload to S3</h1>
      </header>
      <main>
        <FileUpload />
      </main>
    </div>
  );
}

export default App;