// change text above carousel
var calendarCarousel = document.getElementById('calendarCarousel');
// referenced from bootstrap website

function calendarText() {
    var currItem = document.querySelector("#calendarCarousel .active");
    var index = currItem.getAttribute("data-bs-slide-to");

    var eventText = document.getElementById("eventText");
    var scheduleText = document.getElementById("scheduleText");

    if (index == '0') {
        eventText.className = "";
        scheduleText.className = "d-none";
    } else if (index == '1') {
        eventText.className = "d-none";
        scheduleText.className = "";
    }
};

if (calendarCarousel) {
    calendarCarousel.addEventListener('slid.bs.carousel', calendarText);
}


// go-to-top button
toTopButton = document.getElementById("toTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { displayButton() };

function displayButton() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}