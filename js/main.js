$(document).ready(function(){
  //things to do when window is scrolled.

  //first navigation.
  $(window).scroll(function(){
   navChange($(this).scrollTop()); 
  });

  //fade in the Jumbotron 
  $(".jumbotron").fadeIn(3000);

  function navChange(scrollPos){
		var nav = $('.navitem-above');
    if (scrollPos > 30){
      nav.addClass('navitem-below-text');
      nav.addClass('navitem-below', 500);
      console.log('scroll back was changed');
    }else{
      nav.removeClass('navitem-below-text');
			nav.removeClass('navitem-below', 500);
    }
  };
});
