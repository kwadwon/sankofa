$(document).ready(function(){
  //things to do when window is scrolled.

  //first navigation.
  $(window).scroll(function(){
   navChange($(this).scrollTop()); 
  });

	//fade in the opening caption
  $(".jumbotron").fadeIn(4000, function(){
	  console.log('faded in bro!');	
	});






  function navChange(scrollPos){
		var nav = $('.navitem-above');
    if (scrollPos > 30){
      //nav.removeClass('navitem-above');
      nav.addClass('navitem-below');
      console.log('scroll back was changed');
    }else{
			nav.removeClass('navitem-below');
      console.log('the reverse');
    }
   
  };
});
