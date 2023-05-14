function convertMarked(){
    let editorText = $("#editor").val();
    let markedText = marked.parse(editorText,{ breaks: true });//.replace(/\s+/g, '')
    document.getElementById("preview").innerHTML = markedText;
}

$(document).ready(function() {
    convertMarked()
    $("#editor").on("keyup", function() {
        convertMarked()
    })
})