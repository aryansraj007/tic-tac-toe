export function checkWinner() {
  var data1 = document.getElementById("box_1").innerText;
  var data2 = document.getElementById("box_2").innerText;
  var data3 = document.getElementById("box_3").innerText;
  var data4 = document.getElementById("box_4").innerText;
  var data5 = document.getElementById("box_5").innerText;
  var data6 = document.getElementById("box_6").innerText;
  var data7 = document.getElementById("box_7").innerText;
  var data8 = document.getElementById("box_8").innerText;
  var data9 = document.getElementById("box_9").innerText;

  var datadisable = document.getElementsByClassName("board")[0].style;

  if (data1 === data2 && data1 === data3 && !data1 !== true && data1 === "X") {
    datadisable.pointerEvents = "none";
    return "player 1 wins";
  }
  if (data1 === data2 && data1 === data3 && !data1 !== true && data1 === "O") {
    datadisable.pointerEvents = "none";
    return "player 2 wins";
  }
  if (data4 === data5 && data4 === data6 && !data4 !== true && data4 === "X") {
    datadisable.pointerEvents = "none";
    return "player 1 wins";
  }
  if (data4 === data5 && data4 === data6 && !data4 !== true && data4 === "O") {
    datadisable.pointerEvents = "none";
    return "player 2 wins";
  }
  if (data7 === data8 && data7 === data9 && !data7 !== true && data7 === "X") {
    datadisable.pointerEvents = "none";
    return "player 1 wins";
  }
  if (data7 === data8 && data7 === data9 && !data7 !== true && data7 === "O") {
    datadisable.pointerEvents = "none";
    return "player 2 wins";
  }
  if (data1 === data4 && data1 === data7 && !data1 !== true && data1 === "X") {
    datadisable.pointerEvents = "none";
    return "player 1 wins";
  }
  if (data1 === data4 && data1 === data7 && !data1 !== true && data1 === "O") {
    datadisable.pointerEvents = "none";
    return "player 2 wins";
  }
  if (data2 === data5 && data2 === data8 && !data2 !== true && data2 === "X") {
    datadisable.pointerEvents = "none";
    return "player 1 wins";
  }
  if (data2 === data5 && data2 === data8 && !data2 !== true && data2 === "O") {
    datadisable.pointerEvents = "none";
    return "player 2 wins";
  }

  if (data3 === data6 && data3 === data9 && !data3 !== true && data3 === "X") {
    datadisable.pointerEvents = "none";
    return "player 1 wins";
  }
  if (data3 === data6 && data3 === data9 && !data3 !== true && data3 === "O") {
    datadisable.pointerEvents = "none";
    return "player 2 wins";
  }

  if (data1 === data5 && data1 === data9 && !data1 !== true && data1 === "X") {
    datadisable.pointerEvents = "none";
    return "player 1 wins";
  }
  if (data1 === data5 && data1 === data9 && !data1 !== true && data1 === "O") {
    datadisable.pointerEvents = "none";
    return "player 2 wins";
  }
  if (data3 === data5 && data3 === data7 && !data3 !== true && data3 === "X") {
    datadisable.pointerEvents = "none";
    return "player 1 wins";
  }
  if (data3 === data5 && data3 === data7 && !data3 !== true && data3 === "O") {
    datadisable.pointerEvents = "none";
    return "player 2 wins";
  }
  if (
    !data1 !== true &&
    !data2 !== true &&
    !data3 !== true &&
    !data4 !== true &&
    !data5 !== true &&
    !data6 !== true &&
    !data7 !== true &&
    !data8 !== true &&
    !data9 !== true
  ) {
    return "Draw";
  }
}
