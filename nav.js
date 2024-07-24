// Get the navbar
var navbar = document.getElementById("navbar");

// Get the initial offset position of the navbar
var sticky = navbar.offsetTop;

// Get the height of the navbar
var navbarHeight = navbar.offsetHeight;

// Function to handle scroll event
function onScroll() {
  // Check if the page has been scrolled past the initial position of the navbar
  if (window.pageYOffset > sticky) {
    // Add compressed class to navbar to move it up
    navbar.classList.add("compressed");
    // Set padding to compensate for the space occupied by the compressed navbar
    document.body.style.paddingTop = navbarHeight + "px";
  } else {
    // Remove compressed class to revert navbar to its original position
    navbar.classList.remove("compressed");
    // Remove padding when the navbar is not compressed
    document.body.style.paddingTop = 0;
  }
}

// Attach scroll event listener
window.onscroll = function() {
  onScroll();
};
