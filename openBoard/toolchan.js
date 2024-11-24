
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".size-box");

pencil.addEventListener("click", function (e) {
    if (ctool == "pencil") {
        options[0].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        ctool = "pencil";
        tool.strokeStyle = "lightpink";
        tool.lineWidth = penSize;
    }
})
eraser.addEventListener("click", function (e) {
    if (ctool == "eraser") {
        options[1].style.display = "flex";
    }
    // first click
    else {
        ctool = "eraser";
        tool.strokeStyle = "white";
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        tool.lineWidth = eraSize;
    }
})
rect.addEventListener("click", function (e) {
    if (ctool == "rect") {
        options[2].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        tool.strokeStyle = "lightpink";
        ctool = "rect";
        tool.lineWidth = recSize;
    }
})
line.addEventListener("click", function (e) {
    if (ctool == "line") {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        options[3].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        tool.strokeStyle = "lightpink";
        ctool = "line";
        tool.lineWidth = linSize;
    }
})



let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");

red.addEventListener("click", function () {
    tool.strokeStyle = "lightpink";
})
green.addEventListener("click", function () {
    tool.strokeStyle = "lightgreen";
})
blue.addEventListener("click", function () {
    tool.strokeStyle = "lightblue";
})



let penSize = 1;
let eraSize = 1;
let recSize = 1;
let linSize = 1;
let sizeBox = document.querySelectorAll(".size-box");

sizeBox[0].addEventListener("click", function(e){
    let ele = ["size1" , "size2" , "size3" , "size4"]

    let classes = e.target.classList;
    let fClass = classes[0];
    let test = ele.includes(fClass);

    if(test){
        if(fClass == "size1"){
            penSize = 5;
        }
        else if(fClass == "size2"){
            penSize = 10;
            
        }
        else if(fClass == "size3"){
            penSize = 15;
            
        }
        else if(fClass == "size4"){
            penSize = 20;

        }
    }
    tool.lineWidth = penSize;
})

sizeBox[1].addEventListener("click", function(e){
    let ele = ["size1" , "size2" , "size3" , "size4"]

    let classes = e.target.classList;
    let fClass = classes[0];
    let test = ele.includes(fClass);

    if(test){
        if(fClass == "size1"){
            eraSize = 5;
        }
        else if(fClass == "size2"){
            eraSize = 10;
        }
        else if(fClass == "size3"){
            eraSize = 15;
        }
        else if(fClass == "size4"){
            eraSize = 20;
        }
    }
    tool.lineWidth = eraSize;
})


sizeBox[2].addEventListener("click", function(e){
    let ele = ["size1" , "size2" , "size3" , "size4"]

    let classes = e.target.classList;
    let fClass = classes[0];
    let test = ele.includes(fClass);

    if(test){
        if(fClass == "size1"){
            recSize = 5;
        }
        else if(fClass == "size2"){
            recSize = 10;
        }
        else if(fClass == "size3"){
            recSize = 15;
        }
        else if(fClass == "size4"){
            recSize = 20;
        }
    }
    tool.lineWidth = recSize;
})


sizeBox[3].addEventListener("click", function(e){
    let ele = ["size1" , "size2" , "size3" , "size4"]

    let classes = e.target.classList;
    let fClass = classes[0];
    let test = ele.includes(fClass);

    if(test){
        if(fClass == "size1"){
            linSize = 5;
        }
        else if(fClass == "size2"){
            linSize = 10;
        }
        else if(fClass == "size3"){
            linSize = 15;
        }
        else if(fClass == "size4"){
            linSize = 20;
            
        }
    }
    tool.lineWidth = linSize;
})