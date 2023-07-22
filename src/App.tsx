import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "./redux/store";
import ToDoList from "./components/ToDoList"; // Importando o novo componente

function App() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
      className="d-flex justify-content-center align-items-center "
    >
      <div style={{ width: "50%" }}>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
