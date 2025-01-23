import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Todolist from "./component/Todolist/Todolist";
import DragDropList from "./component/DragDropList/DragDropList";
import React from "react";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todolist" element={<Todolist />}></Route>
          <Route path="/dragdroplist" element={<DragDropList />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
