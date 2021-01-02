import '../../node_modules/bulma/css/bulma.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import ListViewer from './ListViewer';

const App = () => {
  const [text, setText] = useState('');
  const [response, setResponse] = useState([]);
  return (
    <div>
      <Navbar />
      <div className="has-text-centered">
        <h1 className="title">Wikipedia Search Engine</h1>
        <h3 className="subtitle">👾 Search faster 🤖</h3>
        <br></br>
      </div>
      <div className="container">
        <Searchbar setText={setText} text={text} response={response} setResponse={setResponse} />
        <ListViewer response={response} text={text} />
      </div>
    </div>
  );
};

export default App;
