import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import React, { Component } from "react";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
