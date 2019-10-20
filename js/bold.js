let boldBtn = document.getElementById("bold-btn");
let boldClickListener = (event) => {
    event.preventDefault();
    let selection = window.getSelection();
    let anc = selection.anchorNode;
    // the original text
    let origin = anc.parentElement.innerHTML.toString();
    let start, end;
    if (selection.anchorOffset < selection.focusOffset) {
        start = selection.anchorOffset;
        end = selection.focusOffset;
    } else {
        start = selection.focusOffset;
        end = selection.anchorOffset;
    }
    // the text before the selected text
    let left = origin.substring(0, start);
    // the text after the selected text
    let right = origin.substring(end, origin.length);
    // the selected text
    let selectionText = selection.toString();
    let final = left + `<span class="text-bold">${selectionText}</span>` + right;
    selection.anchorNode.parentElement.innerHTML = final;
}

boldBtn.addEventListener('click', boldClickListener);