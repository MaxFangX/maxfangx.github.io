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
})

//On page load
$(document).ready(function(){
})

