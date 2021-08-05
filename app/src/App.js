import React from 'react';
import './App.css';
import Feed from './components/Feed'
import { ApiDataContextProvider } from './contexts/ApiDataContext'

function App() {
  return (
    <ApiDataContextProvider>
      <Feed></Feed>
    </ApiDataContextProvider>
  );
}

export default App;
