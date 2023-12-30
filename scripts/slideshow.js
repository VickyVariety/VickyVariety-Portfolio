// Variabler
var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

// Funktion för att visa en bild
function showSlides(n) {
  // Loopar igenom alla bilder och döljer dem
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // Loopar igenom alla punkter och tar bort 'active' klassen
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // Hämtar den aktuella bilden
  var currentSlide = slides[n - 1];
  // Visar den aktuella bilden
  currentSlide.style.display = "block";
  // Markerar motsvarande punkt
  dots[n - 1].className += " active";
}

// Funktion för att klicka på nästa bild
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > slides.length) { slideIndex = 1; }  // Återställer till första bilden
  showSlides(slideIndex);
}

// Funktion för att klicka på föregående bild
function minusSlides(n) {
  slideIndex -= n;
  if (slideIndex < 1) { slideIndex = slides.length; }  // Går till sista bilden
  showSlides(slideIndex);
}

// Visar den första bilden
showSlides(slideIndex);