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


function onSubmit(token) {
  document.getElementById("form-contact").submit();
}


i=0;
$(document).ready(function(){
  autosize($('textarea'));
    });   

  