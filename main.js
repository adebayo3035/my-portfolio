window.onresize = screen;
window.onload = screen;
function screen(){
    myWidth = window.innerWidth;
    document.getElementById('screen-size').innerHTML = "Width is: " + myWidth;
    // console.log(myWidth);
} 

// Responsive Nav Bar
function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }
  //Scroll to Top Button function
  var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }