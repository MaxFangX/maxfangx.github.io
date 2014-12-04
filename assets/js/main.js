$('.slide').click(function(){
	$('span.x').html(this.dataset.word);
	console.log(this.dataset.background);
	$('.main-display').css("background", this.dataset.background);
	var jprev = $('.current');
	var jthis = $(this);
	console.log(jprev);
	console.log(jthis);
	console.log(jprev.get(0));
	console.log(jthis.get(0));
	if(jprev[0] == jthis[0]){
		//Do nothing
	}
	else{
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
	if(jprev[0] == $('.slide-1')[0]){
		jthis = $('.slide-2');
	}
	else if(jprev[0] == $('.slide-2')[0]){
		jthis = $('.slide-3');
	}
	else{
		jthis = $('.slide-1');
	}
	$('span.x').html(jthis[0].dataset.word);
	// console.log(jthis[0].dataset.word)
	// console.log(jthis[0].dataset.background);
	$('.main-display').css("background", jthis[0].dataset.background);
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
	if(jprev[0] == $('.slide-1')[0]){
		jthis = $('.slide-3');
	}
	else if(jprev[0] == $('.slide-2')[0]){
		jthis = $('.slide-1');
	}
	else{
		jthis = $('.slide-2');
	}
	$('span.x').html(jthis[0].dataset.word);
	// console.log(jthis[0].dataset.word)
	// console.log(jthis[0].dataset.background);
	$('.main-display').css("background", jthis[0].dataset.background);
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
});

