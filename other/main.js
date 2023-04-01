let myExample;

function myFunction() {
    myExample = setTimeout(showPage, 3000)
}

function showPage() {
    document.getElementById('preloader').style.display = 'none'
    document.getElementById('myDiv').style.display = 'block'
}

// button to top
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// navbar on top
let nav = document.querySelector('nav');

window.addEventListener('scroll' , function(){
    if(window.pageYOffset > 100) {
        nav.classList.add('bg-dark' , 'shadow')
        nav.classList.add('fixed-top')
    } else {
        nav.classList.remove('bg-dark' , 'shadow')
        nav.classList.remove('sticky-top')
        nav.classList.remove('fixed-top')
    }
});
