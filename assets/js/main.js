
//Carousel buttons
$('.test-button1').click(function(){
	$('.main-display').css("background", "url('assets/img/marimba_full.jpg')");
	$('.main-display').css("background-size", "contain");
	$('.main-display').css("background-repeat", "no-repeat");
});
$('.test-button2').click(function(){
	$('.main-display').css("background", "url('assets/img/darkcoin_onyx.png')");
	$('.main-display').css("background-size", "contain");
	$('.main-display').css("background-repeat", "no-repeat");
});



// var jumboHeight = $('.jumbotron').outerHeight();
// function parallax(){
//     var scrolled = $(window).scrollTop();
//     $('.bg').css('height', (jumboHeight-scrolled) + 'px');
// }

// $(window).scroll(function(e){
//     parallax();
// });

//$('.carousel').carousel()
