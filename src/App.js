import React from "react";

import { Space } from "./components";
import { Blog, Feature, Header, Workspace } from "./container";
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Feature />
      <Workspace />
      <Space />
      <Blog />
    </div>
  );
}

export default App;
