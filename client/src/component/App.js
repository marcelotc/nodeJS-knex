import React from 'react';
import TopNav from './TopNav';
import ItemsBody from './ItemsBody';
import SingleItem from './SingleItem';
import CreateTodo from './CreateTodo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <TopNav></TopNav>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ItemsBody}></Route>
            <Route path="/new" component={CreateTodo}></Route>
            <Route path="/:id" component={SingleItem}></Route>
          </Switch>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
