let leftBtn = document.getElementById("left-btn");
let leftClickListener = (event) => {
    event.preventDefault();
    let parentDiv = document.getElementById("text-editor");
    parentDiv.style.textAlign = "left";
}

leftBtn.addEventListener('click', leftClickListener);