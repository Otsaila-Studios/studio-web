window.onload = init;

function init() {

  showSlides(slideIndex);

  countdown();

  setInterval(countdown, 1000);

}

// SLIDES

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// COUNTDOWN

const target_date = new Date(2023, 7, 27);

function countdown() {

  const currentDate = new Date();

  const totalSeconds = (target_date - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('mins');
  const secondsEl = document.getElementById('seconds');

  daysEl.innerHTML = formatDate(days);
  hoursEl.innerHTML = formatDate(hours);
  minsEl.innerHTML = formatDate(mins);
  secondsEl.innerHTML = formatDate(seconds);

}

function formatDate(value) {
  if (value < 10) {
    return '0' + value;
  } else {
    return value;
  }
}