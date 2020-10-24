i=0;
$(document).ready(function(){
    $("textarea").keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
    console.log("ddf");
    $(this).prop("scrollHeight") / parseInt($(this).css("line-height"), 10) > y.textareaLines ? $(this).css("overflow-y", "scroll") : ($(this).css("overflow-y", "hidden"), $(this).css("height", "auto"), $(this).css("height", $(this).prop("scrollHeight") + 1 + "px"))
	}
      $("span.input-bottom-line").text(i += 1);

    });
  });   

  // 