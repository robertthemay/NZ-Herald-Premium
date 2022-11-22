// Monkey patch document.write and force error to prevent redirect to begging page
document.write = function(){FORCE_ERROR};

// Check for begging overlay
var beggingOverlay = document.getElementsByClassName('article-offer');
if (beggingOverlay.length > 0){

    // Hide begging overlay
    beggingOverlay[0].style.display = "none";

    // Show all paragraphs in article
    var article = document.getElementsByClassName('article__body')[0];
    var ps = article ? article.getElementsByTagName('p') : [];
    for (var i = 0; i < ps.length; i++){
        ps[i].style.display = "block";
        ps[i].style.fontSize = "18px";
        ps[i].style.color = "black";
        ps[i].style.opacity = "1";
    }
}