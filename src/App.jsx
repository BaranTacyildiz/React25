import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // React Router'ı import ediyoruz
import ToDoFetch from "./ToDoFetch"; // Ana sayfa
import TodoDetail from "./ToDoDetail";
import Navbar from "./Navbar";
import "./App.css";


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ToDoFetch />} /> 
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
