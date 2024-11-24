let boardTop = canvasBoard.getBoundingClientRect().top;
let boardleft = canvasBoard.getBoundingClientRect().left;
let iX, iY, fX, fY;
let drawingMode = false;


body.addEventListener("mousedown", function (e) {
    iX = e.clientX - boardleft;
    iY = e.clientY - boardTop;
    if (ctool == "pencil" || ctool == "eraser") {
        drawingMode = true;
        tool.beginPath();
        tool.moveTo(iX, iY);
    }
})
body.addEventListener("mouseup", function (e) {
    if (ctool == "pencil" || ctool == "eraser") {
        drawingMode = false;
    } else if (ctool == "rect" || ctool == "line") {
        fX = e.clientX ;
        fY = e.clientY - boardTop;
        let width = fX - iX;
        let height = fY - iY;

        if (ctool == "rect") {
            tool.strokeRect(iX, iY, width, height);
        }
        else if (ctool == "line") {
            tool.beginPath();
            tool.moveTo(iX, iY);
            tool.lineTo(fX, fY);
            tool.stroke();
        }
    }

})

body.addEventListener("mousemove", function (e) {
    if (drawingMode == false)
        return;
    
    fX = e.clientX - boardleft;
    fY = e.clientY - boardTop;
    tool.lineTo(fX, fY);
    tool.stroke();
    iX = fX;
    iY = fY;

})