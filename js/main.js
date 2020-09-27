function menuToCross(x) {
  x.classList.toggle("change");
  overlayMenu = document.getElementById("overlay-content");
  overlayMenu.classList.toggle("on");
  menuText = document.getElementById("menu-text");
  body = document.getElementsByTagName("body");
  bodyTag = body[0];
  bodyTag.classList.toggle("fix");//Fix so that there is no overflow when menu appears
}

window.addEventListener("scroll", function (event) {
  var scroll_y = this.scrollY;
  var scroll_x = this.scrollX;
  var header = document.getElementById("top-content");
  var navbar = document.getElementById("nav");
  var scroller = document.getElementsByClassName("scroll-on");
  var scrollUp = document.getElementById("scroll-up-icon");
  var profileImage = document.getElementById("head-image");

  var height =
    header.getBoundingClientRect().height +
    navbar.getBoundingClientRect().height;
  var displayScrollUp = scroll_y >= height + 2 ? true : false;
  
  var profileOpacity = (height-scroll_y)/height;

  if(profileOpacity>=0){
    profileImage.style.opacity = profileOpacity;
  }
  if (displayScrollUp && scroller.length == 0) {
    scrollUp.classList.toggle("scroll-on");
    profileImage.classList.toggle("off");
  } else if (!displayScrollUp && scroller.length != 0) {
    scrollUp.classList.toggle("scroll-on");
    profileImage.classList.toggle("off");
  }
});
