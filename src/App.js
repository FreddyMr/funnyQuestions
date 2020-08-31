import React from "react";
import Homework from './components/Homework/Homework';
import Navbar from './components/Navbar/Navbar'
import 'semantic-ui-css/semantic.min.css'

export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Homework></Homework>  
    </div>
  );
}
