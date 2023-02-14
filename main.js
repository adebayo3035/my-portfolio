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

  // MODAL BOX
  // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("button");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
//   location.reload();
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//     location.reload();
//   }
// }

// Light and Dark Mode Toggle
let darkToggle = document.querySelector('#darkToggle');
let header = document.getElementById('header');
let lowerSection = document.getElementById('lower-section')
let projects = document.querySelector('.projects')

darkToggle.addEventListener('change', ()=> {
  header.classList.toggle('dark');
  lowerSection.classList.toggle('dark')
  projects.classList.toggle('dark')
})

//Accept Subscriber info and Message
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const button = document.querySelector('#button')
const form = document.querySelector('#form')

const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSduVPWlfuJeJOyMuHxBFVKdfvmLiTgtYUVkHfURjF4VwbFLLA/formResponse";

const handleSubmit = async (event) =>{
  event.preventDefault();
  const fullnameValue = name.value;
  const emailValue = email.value;
  const messageValue = message.value;
  const formData = {
    "entry.1743986267" : fullnameValue,
    "entry.1071171951" : emailValue,
    "entry.1378585142" : messageValue,
  };
  const appendFormData = newFormData({...formData});
  try{
    button.disabled= true;
    button.textContent = "Processing..."
    const response = await fetch(GOOGLE_FORM_URL,{
      method: "POST",
      mode: "no-cors",
      headers:{
        "Content-Type" : "application/json",
      },
      body : appendFormData,
    });
    alert("Your Response has been successfully Received")
  }catch(error){
    alert("Something went wrong, Please try again Later")
    console.log(error)
  } finally{
    button.disabled = false
    button.textContent = "Submit"
  }
};
//form.addEventListener('submit', handleSubmit)

//A helper to help convert the Data to FormData
const newFormData = (inputs) => {
  const formData = new FormData();
  const newArr = Object.entries(inputs);
  newArr.map((item) => {
    return formData.append(`${item[0]}` , item[1])
  });
  return formData;
}