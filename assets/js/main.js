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
	var id = jprev.data('slide');
	if(id == $('.slide').length){
		jthis = $('.slide-1');
	}
	else{
		id++;
		jthis = $('.slide-'+id);
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
	var id = jprev.data('slide');
	if(id == 1){
		jthis = $('.slide-'+$('.slide').length);
	}
	else{
		id--;
		jthis = $('.slide-'+id);
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
	$.each($('.slide'), function(i, obj){ 
		$(obj).data('slide', i+1);
	});
});

