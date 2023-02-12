function AjaxCall(){
    var category = 'life'
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
            headers: { 'X-Api-Key': 'AVusJN8dlumwcXvo1ujFvA==LC9mUSdwRd1F8kT6'},
            contentType: 'application/json',
            success: function(result) {
                $("#text").text(result[0].quote);
                $("#author").text("- "+result[0].author);
                var randomColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
                document.documentElement.style.setProperty('--random-color', randomColor);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
}


$(document).ready(function() {
    AjaxCall();

    $("#new-quote").on("click", function() {
        AjaxCall();
        
    });

    $("#tweet-quote").on("click", function() {
        var tweetText = encodeURIComponent($("#text").text());
        var tweetAuthor = encodeURIComponent($("#author").text());
        var tweet = tweetText + " - " + tweetAuthor;
        var url = "https://twitter.com/intent/tweet?text=" + tweet;
        window.open(url, '_blank');
    });


})

