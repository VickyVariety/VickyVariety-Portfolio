var slideIndex = 1; /* Startindex för bildspelet */
showSlides(slideIndex); /* Visa den första bilden */

// Funktioner för att kontrollera nästa/föregående bild
function plusSlides(n) {
  showSlides(slideIndex += n); /* Ändrar den aktuella bilden baserat på input */
}

// Funktion för att styra vilken bild som är aktiv baserat på miniatyrbildernas kontroller
function currentSlide(n) {
  showSlides(slideIndex = n); /* Visar den valda bilden */
  updateThumbnails(n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); /* Samling av alla bilder */
  var dots = document.getElementsByClassName("dot"); /* Samling av alla punkter */
  if (n > slides.length) {slideIndex = 1} /* Återställ till första bilden om n överstiger antalet bilder */
  if (n < 1) {slideIndex = slides.length} /* Gå till sista bilden om n är mindre än 1 */
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  /* Göm alla bilder */
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); /* Ta bort 'active' klassen från alla punkter */
  }
  slides[slideIndex-1].style.display = "block";
}

function updateThumbnails(n) {
  var thumbnails = document.getElementsByName("demo");
  for (var i = 0; i <thumbnails.length; i++)) {
    thumbnails[i].style.opacity = (i + 1 === n) ? "1" : "0.6"; // Markerar den aktiva miniatyrbilden
  }
}