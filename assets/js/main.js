var slides = null;
//Carousel buttons
$('.indicator-1').click(function(){
	$('span.x').html("X.");
	$('.main-display').css("background", 
		$('#slide-1')[0].dataset.background);
});
$('.indicator-2').click(function(){
	$('span.x').html("Bitcoiner.");
	$('.main-display').css("background", 
		$('#slide-2')[0].dataset.background);
});
$('.indicator-3').click(function(){
	$('span.x').html("Foo bar.");
	$('.main-display').css("background", 
		$('#slide-3')[0].dataset.background);
});

//Update .main-display css when slide changes
//All CSS for .main-display background needs to be copied here
$('.slide-changer').click(function(){
	$('.main-display').css("background-size", "contain");
	$('.main-display').css("background-repeat", "no-repeat");
})

//On page load
$(document).ready(function(){

	//Set the id attributes dynamically
	slides = $('.slide');
	for(var i = 0, slide; slide = slides[i]; i++){
		//Following two lines are equivalent
		//slides[i].setAttribute('data-slide-id', i);
		//slides[i].dataset.slideId = i;
		slides[i].setAttribute('id', "slide-"+(i+1)); //Start index 1
		//alert(slides[i].dataset.slideId);
	}
})

// var jumboHeight = $('.jumbotron').outerHeight();
// function parallax(){
//     var scrolled = $(window).scrollTop();
//     $('.bg').css('height', (jumboHeight-scrolled) + 'px');
// }

// $(window).scroll(function(e){
//     parallax();
// });

//$('.carousel').carousel()
