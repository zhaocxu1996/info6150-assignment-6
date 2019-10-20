let underlineBtn = document.getElementById("underline-btn");
let underlineClickListener = (event) => {
    event.preventDefault();
    let selection = window.getSelection().toString();

    let final =`<span class ="text-underline">` + selection + `</span>`;
    let completetext = document.getElementById("text-editor").innerHTML;
    completetext= completetext.replace(selection,final);
    document.getElementById("text-editor").innerHTML = completetext;
}

underlineBtn.addEventListener('click', underlineClickListener);