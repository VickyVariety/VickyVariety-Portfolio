var slideIndex = 1; // Startindex för bildspelet, börjar med den första bilden
showSlides(slideIndex); // Visar den första bilden vid inläsning

// Funktion för att gå framåt eller bakåt i bildspelet
function plusSlides(n) {
  showSlides(slideIndex += n); // Uppdaterar slideIndex och visar nästa/föregående bild
}

// Funktion för att visa en specifik bild när användaren klickar på en miniatyrbild
function currentSlide(n) {
  showSlides(slideIndex = n); // Sätter slideIndex till den valda bilden och visar den
  updateThumbnails(n); // Uppdaterar miniatyrbilderna för att markera den aktiva bilden
}

// Funktion för att visa och dölja bilder baserat på slideIndex
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides"); // Hämtar alla bilder
  var dots = document.getElementsByClassName("dot"); // Hämtar alla punkter
  // Loopar igenom alla bilder och döljer dem
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  // Loopar igenom alla punkter och tar bort 'active' klassen
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // Visar den aktuella bilden och markerar motsvarande punkt
  slides[slideIndex-1].style.display = "block"; // Visar den aktuella bilden
  dots[slideIndex-1].className += " active"; // Lägger till 'active' klassen på motsvarande punkt
}

// Funktion för att uppdatera miniatyrbilderna baserat på vilken bild som är aktiv
function updateThumbnails(activeIndex) {
  var thumbnails = document.getElementsByClassName("demo"); // Hämtar alla miniatyrbilder
  // Loopar igenom miniatyrbilderna och uppdaterar opacitet och 'active' klassen
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    thumbnails[i].style.opacity = "0.6"; // Sätter standard opacitet för miniatyrbilder
  }
  thumbnails[activeIndex - 1].className += " active"; // Lägger till 'active' klassen på den aktiva miniatyrbilden
  thumbnails[activeIndex - 1].style.opacity = "1"; // Sätter full opacitet på den aktiva miniatyrbilden
}