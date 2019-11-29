import React, { useState } from 'react';
import Poll from './containers/Poll';
import './App.css';

import { Provider } from 'react-redux';
import { Button } from 'semantic-ui-react';
import store from './redux/store';
import Banner from './components/Banner';
import NewVoteCard from './containers/NewVoteCard';

function App() {
  const [pollID, setPollID] = useState('');
  const [submitID, setSubmitID] = useState(1);
  return (
    <Provider store={store}>
      <Banner />
      <NewVoteCard />

      <Poll id={submitID} />
      <input
        placeholder="Find Vote by ID"
        value={pollID}
        onChange={(e) => setPollID(e.target.value)}
      />
      <Button onClick={() => setSubmitID(pollID)}>Get</Button>
    </Provider>
  );
}

export default App;
