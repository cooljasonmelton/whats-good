import React from 'react';

// styling
import './App.css';

// components
import Menu from './components/menu/Menu'
import BlogContainer from './components/blog/BlogContainer';

const App = () => {
  return (
    <div className="App cfb">
      <Menu/>
      <BlogContainer/>


    </div>
  );
}

export default App;
