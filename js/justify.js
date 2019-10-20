let justifyBtn = document.getElementById("justify-btn");
let justifyClickListener = (event) => {
    event.preventDefault();
    let parentDiv = document.getElementById("text-editor");
    parentDiv.style.textAlign = "justify";
}

justifyBtn.addEventListener('click', justifyClickListener);