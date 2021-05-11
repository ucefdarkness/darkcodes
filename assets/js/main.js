var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const humber = document.querySelector(".humb");
const mobile = document.querySelector(".mobile-list");

humber.addEventListener("click", function () {
  humber.classList.toggle("is-active");
  mobile.classList.toggle("is-active");
});

$("#menubar").on("click", "a", function (e) {
  e.preventDefault(); // prevents default scrolling
  var y = $(this.hash).offset().top; // grabs the #id element offset location
  $("html,body").animate({ scrollTop: y }); // animate the scroll
});
