$(document).ready(function(){
  

  	var highLighthShown = false;
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
			clearBlueNow();
			$("#mission").addClass('blue-now');	
		} else if ((scrollPos > $(".projects").offset().top - $("#navbar").height() - 200) && 
					(scrollPos < $(".about").offset().top - $("#navbar").height() - 200)){
			clearBlueNow();
			$("#projects").addClass('blue-now');
		} else if (scrollPos > $(".about").offset().top - $("#navbar").height() - 200){
			clearBlueNow();
			$("#about").addClass('blue-now');	
		} else {
			clearBlueNow();
		}

		slideHighLight();
  };

	function clearBlueNow(){
		$("#mission").removeClass('blue-now');
		$("#mission").blur();

		$("#projects").removeClass('blue-now');
		$("#projects").blur();

		$("#about").removeClass('blue-now');
		$("#about").blur();

	}

  //scrolling
	$("#mission").click(function(event){
		event.preventDefault();
		$('body').animate({
			scrollTop: $("#main-pg-2").offset().top - $("#navbar").height()
		}, 1000);
		slideHighLight();
	});

	$("#projects").click(function(event){
		event.preventDefault();
		$('body').animate({
			scrollTop: $(".projects").offset().top - $("#navbar").height()
		}, 1000);
		slideHighLight();
	});

	$("#about").click(function(event){
		event.preventDefault();
		$('body').animate({
			scrollTop: $(".about").offset().top - $("#navbar").height()
		}, 1000);
		slideHighLight();
	});

	//slide out highlight box if not shown
	function slideHighLight(){
		var scrollPos = $(window).scrollTop();
		if (!highLighthShown && ((scrollPos > $(".projects").offset().top - $("#navbar").height() - 300) && 
					(scrollPos < $(".about").offset().top - $("#navbar").height() - 300))) {
			// animate highligh box  to show
			$(".highlight").animate({right:"0px"}, 1000);
			// set highligh shown
			highLighthShown = true;

		} else if (highLighthShown && !((scrollPos > $(".projects").offset().top - $("#navbar").height() - 300) && 
					(scrollPos < $(".about").offset().top - $("#navbar").height() - 300))) {
			//animate highligh box to go away
			$(".highlight").animate({right:"-490"}, 1000);
			// set highlight not shown
			highLighthShown = false;
		} else {
			//do nothing
		}
	}

	//sankofa logo
	$("#sankofa").click(function(event){
		event.preventDefault();
		$('body').animate({
			scrollTop: $("#main-pg").offset().top - $("#navbar").height()
		}, 1000);
	});


});
