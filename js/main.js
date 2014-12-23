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
	
		
		if ((scrollPos > $("#main-pg-2").offset().top - $("#navbar").height() - 200) && 
					(scrollPos < $(".projects").offset().top - $("#navbar").height() - 200)){
			clearRedNow();
			$("#mission").addClass('red-now');	
		} else if ((scrollPos > $(".projects").offset().top - $("#navbar").height() - 200) && 
					(scrollPos < $(".about").offset().top - $("#navbar").height() - 200)){
			clearRedNow();
			$("#projects").addClass('red-now');	
		} else if (scrollPos > $(".about").offset().top - $("#navbar").height() - 200){
			clearRedNow();
			$("#about").addClass('red-now');	
		} else {
			clearRedNow();
		}
  };

	function clearRedNow(){
		$("#mission").removeClass('red-now');
		$("#projects").removeClass('red-now');
		$("#about").removeClass('red-now');
	}

  //scrolling
	$("#mission").click(function(event){
		event.preventDefault();
		$('body').animate({
			scrollTop: $("#main-pg-2").offset().top - $("#navbar").height()
		}, 1000);
	});

	$("#projects").click(function(event){
		event.preventDefault();
		$('body').animate({
			scrollTop: $(".projects").offset().top - $("#navbar").height()
		}, 1000);
	});

	$("#about").click(function(event){
		event.preventDefault();
		$('body').animate({
			scrollTop: $(".about").offset().top - $("#navbar").height()
		}, 1000);
	});

});
