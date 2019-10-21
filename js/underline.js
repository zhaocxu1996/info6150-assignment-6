let underlineBtn = document.getElementById("underline-btn");
let underlineClickListener = (event) => {
    event.preventDefault();
    let selection = window.getSelection().toString();
    let value = underlineBtn.value;
    if (value == 0) {
        value = Number(value)+1;
        underlineBtn.value = value;
        let final =`<span class = "text-underline" id = "underline${value}">` + selection + `</span>`;
        let completetext = document.getElementById("text-editor").innerHTML;
        completetext= completetext.replace(selection,final);
        document.getElementById("text-editor").innerHTML = completetext;   
    } else {
        let flag = false;
        let i = 1;
        for (; i <= value; i++) {
            if (document.getElementById(`underline${i}`) != null) {
                let underline = document.getElementById(`underline${i}`).innerHTML.toString();
                if (underline.indexOf(selection)!=-1) {
                    flag = true;
                    break;
                }
            }
        }
        if (flag) {
            let tag = document.getElementById(`underline${i}`);
            let parent = tag.parentNode;
            parent.insertBefore(tag.firstChild, tag);
            parent.removeChild(tag);
            document.getElementById("text-editor").innerHTML.replace('"', '');
        } else {
            value = Number(value)+1;
            underlineBtn.value = value;
            let final =`<span class = "text-underline" id = "underline${value}">` + selection + `</span>`;
            let completetext = document.getElementById("text-editor").innerHTML;
            completetext= completetext.replace(selection,final);
            document.getElementById("text-editor").innerHTML = completetext;   
        }
    }
}

underlineBtn.addEventListener('click', underlineClickListener);