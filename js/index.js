
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