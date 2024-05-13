import React from "react";
import "./Board.css";
import { useState } from "react";
import { checkWinner } from "./checkWinner";

export default function Board() {
  const [state, setstate] = useState(1);

  const clicked = (e) => {
    var data = document.getElementById(`${e.target.id}`);
    if (state % 2 !== 0) {
      data.innerText = "X";
    }
    if (state % 2 === 0) {
      data.innerText = "O";
    }

    var data1 = document.getElementsByClassName(`${e.target.id}`)[0].style;
    data1.pointerEvents = "none";

    var winner = checkWinner();
    if (winner !== undefined) {
      document.getElementById("app_winner").innerText = winner;
    }

    setstate(state + 1);
  };

  return (
    <>
      <div className="board container">
        <div
          className="board_box_1 box_1"
          id="box_1"
          onClick={(e) => clicked(e)}
        >
          {" "}
        </div>
        <div
          className="board_box_1 box_2"
          id="box_2"
          onClick={(e) => clicked(e)}
        >
          {" "}
        </div>
        <div
          className="board_box_1 box_3"
          id="box_3"
          onClick={(e) => clicked(e)}
        >
          {" "}
        </div>
        <div
          className="board_box_1 box_4"
          id="box_4"
          onClick={(e) => clicked(e)}
        >
          {" "}
        </div>
        <div
          className="board_box_1 box_5"
          id="box_5"
          onClick={(e) => clicked(e)}
        >
          {" "}
        </div>
        <div
          className="board_box_1 box_6"
          id="box_6"
          onClick={(e) => clicked(e)}
        >
          {" "}
        </div>
        <div
          className="board_box_1 box_7"
          id="box_7"
          onClick={(e) => clicked(e)}
        >
          {" "}
        </div>
        <div
          className="board_box_1 box_8"
          id="box_8"
          onClick={(e) => clicked(e)}
        >
          {" "}
        </div>
        <div
          className="board_box_1 box_9"
          id="box_9"
          onClick={(e) => clicked(e)}
        >
          {" "}
        </div>
      </div>
    </>
  );
}
