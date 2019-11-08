import React, { useState } from 'react';
import './App.css';
import Note from './components/Note';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <Note />
      <Editor setText={setText} />
      <Preview text={text} />
    </div>
  );
}

export default App;
