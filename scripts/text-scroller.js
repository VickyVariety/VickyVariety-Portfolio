document.addEventListener('DOMContentLoaded', function() {
    var titles = ['Digital Artist', 'Frontend Developer', 'Instructor', 'Content Creator', 'Tech Enthusiast']; // En lista med yrkestitlar som ska visas
    var index = 0; // Startindex för titelrotationen
    var dynamicTextContainer = document.getElementById('dynamic-text'); // Container för den roterande texten
    
    // Funktion för att skapa ett nytt span-element för textrotationen
    function createSpan(text) {
      var span = document.createElement('span');
      span.textContent = text; // Sätter textinnehållet i span
      span.className = 'dynamic-text-content'; // Tilldelar klass för styling och animation
      return span; // Returnerar det nya span-elementet
    }
    
    // Funktion för att byta ut text i roteringen
    function changeText() {
      var currentSpan = dynamicTextContainer.querySelector('.dynamic-text-content'); // Hittar nuvarande span
      if (currentSpan) {
        dynamicTextContainer.removeChild(currentSpan); // Tar bort nuvarande span om det finns
      }
      
      var nextTitle = titles[index]; // Hämtar nästa titel från listan
      var newSpan = createSpan(nextTitle); // Skapar ett nytt span med nästa titel
      dynamicTextContainer.appendChild(newSpan); // Lägger till det nya spanet till containern
      
      index = (index + 1) % titles.length; // Ökar index och börjar om när slutet av listan är nådd
    }
  
    // Initialiserar textrotationen direkt vid laddning
    changeText();
    
    // Fortsätter att rotera text var fjärde sekund
    setInterval(changeText, 4000); // Intervallet är halva animationstiden för att skapa en överlappning
  });