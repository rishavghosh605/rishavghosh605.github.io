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

// //Using Intersection Observer for fadeIn animation
const myElements = document.querySelectorAll('.lazyload');
  
observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('fadeIn');
      observer.unobserve(entry.target);
    }
  });
});

myElements.forEach(element => {
  observer.observe(element);
});

//Intersection observer for scroll-up icon animation
const scrollDown = document.querySelector('.scroll-up-display');
const scrollUp = document.getElementById("scroll-up-icon");

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio == 0) {
      scrollUp.classList.add("scroll-on");
    } else {
        scrollUp.classList.remove("scroll-on");
    }
  });
});
observer.observe(scrollDown);