import React from 'react';

// router 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styling
import './App.css';

// components
import Menu from './components/menu/Menu'
import BlogContainer from './components/blog/BlogContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App cfb">
        <Menu/>
        <BlogContainer/>

        <Switch>
          <Route path="/" component={null} />
          <Route path="/" component={null} />
          <Route path="/" component={null} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
