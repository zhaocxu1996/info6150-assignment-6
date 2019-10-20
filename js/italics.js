let italicsBtn = document.getElementById("italics-btn");
let italicsClickListener = (event) => {
    event.preventDefault();
    let selection = window.getSelection().toString();

    let final =`<span class ="text-italics">` + selection + `</span>`;
    let completetext = document.getElementById("text-editor").innerHTML;
    completetext= completetext.replace(selection,final);
    document.getElementById("text-editor").innerHTML = completetext;
}

italicsBtn.addEventListener('click', italicsClickListener);