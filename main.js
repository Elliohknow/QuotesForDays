// JavaScript source code
var quote = "";
var author = "";
function getNewQuote() {
    $.ajax({
        url: "http://api.forismatic.com/api/1.0/",
        jsonp: "jsonp",
        dataType: "jsonp",
        data: {
            method: "getQuote",
            lang: "en",
            format: "jsonp"
        },
        success: function (response) {
            quote = response.quoteText;
            author = response.quoteAuthor;

            $("#qText").text(quote);
            

            if (author) {
                $("#authorName").text("- " + author);
                console.log(author);
            } else {
                $("#authorName").text(
                    "- Your Dad. Seriously, he used to go around saying this all the time."
                );
            }
        }
    });
}

$(document).ready(function () {
    getNewQuote();

    $("#newQuote").on("click", function (event) {
        event.preventDefault();
        getNewQuote();
    });

    $("#tweet-it").on("click", function (event) {
        event.preventDefault();
        window.open(
            "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + "-- " + author)
        );
    });
});