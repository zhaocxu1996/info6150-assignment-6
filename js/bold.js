let boldBtn = document.getElementById("bold-btn");
let boldClickListener = (event) => {
    event.preventDefault();
    let selection = window.getSelection().toString();
    
    let final =`<span class = "text-bold" id = "bold">` + selection + `</span>`;
    let completetext = document.getElementById("text-editor").innerHTML;
    completetext= completetext.replace(selection,final);
    document.getElementById("text-editor").innerHTML = completetext;
}

boldBtn.addEventListener('click', boldClickListener);