$('.slide').click(function(){
	var jprev = $('.current');
	var jthis = $(this);
	$('span.x').html(this.dataset.word);
	$('.main-display').css("background", jthis.data("background"));
	if(!jprev.is(jthis)){
		jprev.removeClass('current'); //Switch current class
		jthis.addClass('current');
		jprev.removeClass('fa-dot-circle-o'); //Switch icon
		jprev.addClass('fa-circle-o');
		jthis.removeClass('fa-circle-o');
		jthis.addClass('fa-dot-circle-o');
	}
	//Update .main-display css when slide changes
	//Should be copied anywhere slide changes
	$('.main-display').css("background-size", "contain");
	$('.main-display').css("background-repeat", "no-repeat");
});

$('.slide-right').click(function(){
	var jprev = $('.current');
	var jthis;
	if(jprev.is($('.slide-1'))){
		jthis = $('.slide-2');
	}
	else if(jprev.is($('.slide-2'))){
		jthis = $('.slide-3');
	}
	else{
		jthis = $('.slide-1');
	}
	$('span.x').text(jthis.data('word'));
	$('.main-display').css("background", jthis.data('background'));
	jprev.removeClass('current'); //Switch current class
	jthis.addClass('current');
	jprev.removeClass('fa-dot-circle-o'); //Switch icon
	jprev.addClass('fa-circle-o');
	jthis.removeClass('fa-circle-o');
	jthis.addClass('fa-dot-circle-o');
	$('.main-display').css("background-size", "contain");
	$('.main-display').css("background-repeat", "no-repeat");
});

$('.slide-left').click(function(){
	var jprev = $('.current');
	var jthis;
	if(jprev.is($('.slide-1'))){
		jthis = $('.slide-3');
	}
	else if(jprev.is($('.slide-2'))){
		jthis = $('.slide-1');
	}
	else{
		jthis = $('.slide-2');
	}
	$('span.x').text(jthis.data('word'));
	$('.main-display').css("background", jthis.data('background'));
	jprev.removeClass('current'); //Switch current class
	jthis.addClass('current');
	jprev.removeClass('fa-dot-circle-o'); //Switch icon
	jprev.addClass('fa-circle-o');
	jthis.removeClass('fa-circle-o');
	jthis.addClass('fa-dot-circle-o');
	$('.main-display').css("background-size", "contain");
	$('.main-display').css("background-repeat", "no-repeat");
});

//On page load
$(document).ready(function(){
	var slides = $('.slide');
	for (var i = 0; slide = slides[i]; i++){
		slide.dataset.slide = i+1;
	};
});

