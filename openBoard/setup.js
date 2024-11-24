let ctool = "none";
let canvasBoard = document.querySelector("canvas");
let tool = canvasBoard.getContext("2d");
let body = document.querySelector("body");
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;
tool.strokeStyle = "lightpink";