function menuToCross(x) {
  x.classList.toggle("change");
  overlayMenu = document.getElementById("overlay-content");
  overlayMenu.classList.toggle("on");
  logoIcon = document.getElementById("logo-icon");
  logoIcon.classList.toggle("change");
  navbar = document.getElementById("nav");
  navbar.classList.toggle("change");
  menuText = document.getElementById("menu-text");
  body = document.getElementsByTagName("body");
  bodyTag = body[0];
  bodyTag.classList.toggle ("fix");//Fix so that there is no overflow when menu appears
}