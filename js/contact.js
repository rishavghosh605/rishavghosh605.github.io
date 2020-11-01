//Contact Form

//Message Height Resizing

$(document).ready(function() {
  var textArea = $('#content');
  const defaultHeight= textArea.height()+'px';
  const defaultScrollHeight= textArea.prop('scrollHeight')+'px';
  textArea.on('input', function(){
    this.style.height = 'auto';
    this.style.height = 
            (this.scrollHeight) + 'px';
    if(this.style.height===defaultScrollHeight){this.style.height=defaultHeight;}
    });
  });


function onSubmit(token) {
  const form = document.getElementById("form-contact");
  console.log(form);
  document.getElementById("form-contact").submit();
}

