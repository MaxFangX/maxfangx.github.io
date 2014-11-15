$('.test-button1').click(function(){
	alert('this button fucking works');
	$('.main-display').css("background", "url('assets/img/marimba_full.jpg')");
});
$('.test-button2').click(function(){
	$('.main-display').css("background", "url('assets/img/darkcoin_onyx.png')");
});
$('document').click(function(){
	alert('lol ok');
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
