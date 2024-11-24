let sticky = document.querySelector("#sticky");

sticky.addEventListener("click", function(e){
    let notes = document.createElement("div");
    notes.setAttribute("class", "sticky");
    notes.innerHTML = `<div class="navbar">
    <div class="close"></div>
    <div class="mini"></div>
</div>
<textarea name="" class="textarea"></textarea>`;

body.appendChild(notes);

let min = notes.querySelector(".mini");
let close = notes.querySelector(".close");
let textArea = notes.querySelector("textarea");
let isClose = false;

min.addEventListener("click", function(e){
    if(isClose == false){
        textArea.style.display = "none";
    }
    else{
        textArea.style.display = "block";
    }

    isClose = !isClose;
})

close.addEventListener("click", function(){
    notes.remove();
})

notes.onmousedown = function(event) {
    notes.style.position = 'absolute';
    notes.style.zIndex = 950;
  
    document.body.append(notes);
  
    function moveAt(pageX, pageY) {
        notes.style.left = pageX - notes.offsetWidth / 2 + 'px';
        notes.style.top = pageY - notes.offsetHeight / 2 + 'px';
    }
  
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    document.addEventListener('mousemove', onMouseMove);
  
    notes.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      notes.onmouseup = null;
    };
  
  };
  notes.ondragstart = function() {
    return false;
  };

})