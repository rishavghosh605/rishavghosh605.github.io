
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