
// Gallery slideshow 1 (voor en bij)

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n
  showSlides(n);
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
      dots[i].className = dots[i].className.replace(" dotActive", "");
  }
  slides[slideIndex -1].style.display = "block";
  dots[slideIndex-1].className += " dotActive";
} 


// Gallery slideshow 2 (hoofdgerechten)

var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  slideIndex1 = n
  showSlides1(n);
}

function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" dotActive", "");
  }
  slides1[slideIndex1 -1].style.display = "block";
  dots1[slideIndex1-1].className += " dotActive";
} 



// Gallery slideshow 5 (desserts and drankjes)

var slideIndex5 = 1;
showSlides5(slideIndex5);

// Next/previous controls
function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

// Thumbnail image controls
function currentSlide5(n) {
  slideIndex5 = n
  showSlides5(n);
}

function showSlides5(n) {
  var i;
  var slides5 = document.getElementsByClassName("mySlides5");
  var dots5 = document.getElementsByClassName("dot5");
  if (n > slides5.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
      slides5[i].style.display = "none";
  }
  for (i = 0; i < dots5.length; i++) {
      dots5[i].className = dots5[i].className.replace("dotActive", "");
  }
  slides5[slideIndex5 -1].style.display = "block";
  dots5[slideIndex5-1].className += "dotActive";
} 