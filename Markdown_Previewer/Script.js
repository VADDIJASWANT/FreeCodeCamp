function convertMarked(text){
    $("#preview").html(text)
}

$(document).ready(function() {
    convertMarked(marked($("#editor").val()))
    $("#editor").on("input", function(e) {
        convertMarked(marked($("#editor").val()))
    })

});