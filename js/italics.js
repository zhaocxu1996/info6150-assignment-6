let italicsBtn = document.getElementById("italics-btn");
let italicsClickListener = (event) => {
    event.preventDefault();
    let selection = window.getSelection().toString();
    let value = italicsBtn.value;
    if (value == 0) {
        value = Number(value)+1;
        italicsBtn.value = value;
        let final =`<span class = "text-italics" id = "italics${value}">` + selection + `</span>`;
        let completetext = document.getElementById("text-editor").innerHTML;
        completetext= completetext.replace(selection,final);
        document.getElementById("text-editor").innerHTML = completetext;   
    } else {
        let flag = false;
        let i = 1;
        for (; i <= value; i++) {
            if (document.getElementById(`italics${i}`) != null) {
                let italics = document.getElementById(`italics${i}`).innerHTML.toString();
                if (italics.indexOf(selection)!=-1) {
                    flag = true;
                    break;
                }
            }
        }
        if (flag) {
            let tag = document.getElementById(`italics${i}`);
            let parent = tag.parentNode;
            parent.insertBefore(tag.firstChild, tag);
            parent.removeChild(tag);
            document.getElementById("text-editor").innerHTML.replace('"', '');
        } else {
            value = Number(value)+1;
            italicsBtn.value = value;
            let final =`<span class = "text-italics" id = "italics${value}">` + selection + `</span>`;
            let completetext = document.getElementById("text-editor").innerHTML;
            completetext= completetext.replace(selection,final);
            document.getElementById("text-editor").innerHTML = completetext;   
        }
    }
}

italicsBtn.addEventListener('click', italicsClickListener);