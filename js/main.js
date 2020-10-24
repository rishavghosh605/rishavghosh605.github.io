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

window.addEventListener("scroll", function (event) {
  var scroll_y = this.scrollY;
  var header = document.getElementById("top-content");
  var navbar = document.getElementById("nav");
  var profileImage = document.getElementById("head-image");

  var height =
    header.getBoundingClientRect().height +
    navbar.getBoundingClientRect().height
  
  var profileOpacity = (height-scroll_y)/height;

  if(profileOpacity>=0){
    profileImage.style.opacity = profileOpacity;
  }
});

//Intersection observer for scroll-up icon animation
const scrollDown = document.querySelector('.scroll-to-icon');
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


// //Using Intersection Observer for fadeIn animation
const myElements = document.querySelectorAll('.lazyload');

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      console.log('in the view');
      entry.target.classList.add('fadeIn');
      observer.unobserve(entry.target);
    } else {
      console.log('out of view');
      // entry.target.classList.remove('fancy');
    }
  });
});

myElements.forEach(element => {
  observer.observe(element);
});

// $(document).ready(function(){
//   $(document).ready(function(){
//     $("textarea").keypress(function(){
//       $("span.input-bottom-line").text(i += 1);
//     });
//   });
// });
