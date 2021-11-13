mybutton = document.getElementById("topbutton");

//appear when scroll past 20 from the top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//scroll atop when user clicks
function topFunction() {
	window.scroll({top: 0, behavior: 'smooth'});
}