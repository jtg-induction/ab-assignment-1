var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length-2) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length-2}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[(slideIndex-1)%slides.length].style.display = "block";
    slides[(slideIndex)%slides.length].style.display = "block";
    slides[(slideIndex+1)%slides.length].style.display = "block";
} 
