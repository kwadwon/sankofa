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

	//slide weekly highlight in at projects section
	function moveHighLight(inOrOut) {
		if (inOrOut) {
			$(".highlight").animate({right:"0px"}, 50);
		} else {
			$(".highlight").animate({right:"-490px"}, 500);
		}
	}

});
