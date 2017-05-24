// JavaScript source code
var bsAuthors = ['Your Dad', 'Batman, I think', 'You, talking in your sleep two nights ago', 'the ghostly apparition who watches you from the far corner of your room', 'Anonymous', 'Anonymous ', 'Yo\' Mama' ];
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
			    
			var bsAuthor = Math.floor(Math.random() * bsAuthors.length);

            if (author) {
                $("#authorName").text("- " + author);
                
			} else {
				$("#authorName").text("- " + bsAuthor);
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