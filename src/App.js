import React from "react";
import Board from "./component/Board";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div id="app_winner" className="app_winner"></div>
      <Board />
      <div className="app_button_div">
        <button
          onClick={() => window.location.reload(false)}
          className="app_button"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
