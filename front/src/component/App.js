import React from 'react';
import TopNav from './TopNav';
import ItemsBody from './ItemsBody';

function App() {
  return (
    <div>
      <TopNav></TopNav>
      <div className="container">
        <ItemsBody></ItemsBody>
      </div>
    </div>
  );
}

export default App;
