$(document).ready(function(){
  
	//check scroll position
	navChange($(window).scrollTop());

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
    }else{
      nav.removeClass('navitem-below-text');
			nav.removeClass('navitem-below', 500);
    }
  };

  //scrolling
  function doParallax(){
		$('.page').each(function(){
			var page = $(this);
			var xcoord = page.css('backgroundPosition').split(' ')[0];
			$(window).scroll(function(){
				var yPos = -(($(window).scrollTop() - page.offset().top) / 10);
				var coords = xcoord + ' ' + yPos+'px';
				page.css({backgroundPosition:coords});
				//page.animate({backgroundPositionX:xcoord,backgroundPositionY:yPos+'px'},100);
			});
		});
	}

});
