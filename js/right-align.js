let rightBtn = document.getElementById("right-btn");
let rightClickListener = (event) => {
    event.preventDefault();
    let parentDiv = document.getElementById("text-editor");
    parentDiv.style.textAlign = "right";
}

rightBtn.addEventListener('click', rightClickListener);
