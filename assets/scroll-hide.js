var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var menu = document.getElementsByClassName("scroll-hide")[0];

  if (prevScrollpos > currentScrollPos) {
    menu.className = "wrapper scroll-hide open hide-scrollbar-menu";
  } else {
    menu.className = "wrapper scroll-hide hide-scrollbar-menu";
  }

  if (pageYOffset > 0) {
    menu.style.boxShadow = "0 10px 10px -15px";
  } else {
    menu.style.boxShadow = "none";
  }
  
  prevScrollpos = currentScrollPos;
} 