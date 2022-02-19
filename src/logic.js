/*
  Banner
*/
var slideIndex = 1;
showSlides(slideIndex);

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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

/*
  Like Button
*/

let myCards = document.querySelectorAll(".card");
let likeNumbers = document.querySelector(".hit-likes");

for(card of myCards) {
  like.addEventListener('mouseover', function (event) {
    if (event.target.id === "like") {
      event.target.setAttribute("src", "assets/like.png");
      return;
    }
  });

  like.addEventListener('mouseout', function (event) {
    if (event.target.id === "like") {
      event.target.setAttribute("src", "assets/heart.png");
      return;
    }
  });
}

likeNumbers.addEventListener('click', function () {
  document.querySelector('#like-num').innerText++;
});



