let boldBtn = document.getElementById("bold-btn");
let boldClickListener = (event) => {
    event.preventDefault();
    let selection = window.getSelection().toString();
    let value = boldBtn.value;
    if (value == 0) {
        value = Number(value)+1;
        boldBtn.value = value;
        let final =`<span class = "text-bold" id = "bold${value}">` + selection + `</span>`;
        let completetext = document.getElementById("text-editor").innerHTML;
        completetext= completetext.replace(selection,final);
        document.getElementById("text-editor").innerHTML = completetext;   
    } else {
        let flag = false;
        let i = 1;
        for (; i <= value; i++) {
            if (document.getElementById(`bold${i}`) != null) {
                let bold = document.getElementById(`bold${i}`).innerHTML.toString();
                if (bold.indexOf(selection)!=-1) {
                    flag = true;
                    break;
                }
            }
        }
        if (flag) {
            let tag = document.getElementById(`bold${i}`);
            let parent = tag.parentNode;
            parent.insertBefore(tag.firstChild, tag);
            parent.removeChild(tag);
            document.getElementById("text-editor").innerHTML.replace('"', '');
        } else {
            value = Number(value)+1;
            boldBtn.value = value;
            let final =`<span class = "text-bold" id = "bold${value}">` + selection + `</span>`;
            let completetext = document.getElementById("text-editor").innerHTML;
            completetext= completetext.replace(selection,final);
            document.getElementById("text-editor").innerHTML = completetext;   
        }
    }
}

boldBtn.addEventListener('click', boldClickListener);