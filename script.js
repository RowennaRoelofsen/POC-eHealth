var banned = ['lelijk', 'stom', 'dik', 'ongemakkelijk', 'vervelend', 'beschamend'];
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];


document.getElementById('text').addEventListener('keyup', function(e) {
    var text = document.getElementById('text').value;
    var textLower = text.toLowerCase();
    for (var x=0;x<banned.length;x++) {
        if (textLower.search(banned[x]) !== -1) {
             modal.style.display = "block";
            document.getElementById("span-text").innerHTML =  (banned[x]) + ".. "
        }
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*
BRONNEN
Modal: http://www.w3schools.com/howto/howto_css_modals.asp
Word restrict: http://stackoverflow.com/questions/26126076/how-to-restrict-certain-words-in-text-field-using-javascript
*/
