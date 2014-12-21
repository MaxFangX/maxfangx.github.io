//TODO 1 add object as variable to keep track of the changes
//make to the CSS. Can be done from within the animation
//And the simple changes implementation.

//TODO 2 change to only overwrite styles in lastStyle
//1) Initialize computed as lastStyles
//2) Rewrite all properties of computed with
//   default values represented in lastStyles
//3) Modify computed to reflect customization for the new slide
//4) Save styles from customization into lastStyle

//CUSTOMIZATION
var getCustomization = function(identifier){
/* Given a string identifier of each slide, return
 * a plain object with jQuery selectors as keys and 
 * plain objects of animatable css pairs as the values. 
 *  
 * For future note: consider adding another root key for 
 * values that can and can't be animated. 
 */
	switch(identifier){
		/* 
		 * For every custom property value added in here,
		 * it needs to be reset in the default option. 
		 */
		case 'Bitcoiner.':
			//{'opacity': 1}
			return {
				'animated': {
					'.foreground':{
						'opacity': 1,
						'margin-top': '-115px'
					}
				},
				'static':{
					'.maxfang': {
						'color': '#60D4FF'
					},
					'.x': {
						'color': '#FFF'
					}
				}
			};
		case 'Marketer.':
			return {
				'animated': {
					'.foreground':{
						'opacity': 1,
						'margin-top': '-100px'
					}
				},
				'static': {}
			}
		case 'Percussionist.':
			return {
				'animated': {
					'.foreground':{
						'opacity': 1,
						'margin-top': '-10.7%'
					}
				},
				'static': {}
			}
		case 'default':
		default:
			return {
				'animated': {
					'.foreground':{
						'opacity': 1,
						'margin-top': '0%'
					}
				},
				'static':{
					'.maxfangx': {
						'color': '#FFF'
					},
					'.x': {
						'color': '#F00'
					}
				}
			};
	}
}

var getDefault = function(){
	return getCustomization('default');
}

//HELPERS
var isAnimating = false;

//lastStyles not used at the moment, implement with TODO 2
//var lastStyles; 
var changeSlide = function(jprev, jthis, customization, animationTime){
	if(!isAnimating){
		isAnimating = true;

		//Default animation property values
		if(typeof customization == 'undefined'){
			customization = getCustomization(jthis.data("word"));
		}
		//Default animation time values
		if(typeof animationTime == 'undefined'){
			animationTime = 1000;
		}

		//Prerequisites for animation
		$('.foreground').attr("src",jthis.data("background"));
		$('.foreground').css("opacity", 0);

		//Compute final styles to change
		//Overwrite defaults with current style (customization)
		var computed = getDefault();
		console.log('printing default');
		console.log(computed);
		console.log(computed['animated']['.foreground']);
		for(selector in customization['animated']){
			computed['animated'][selector] = customization['animated'][selector];
		}
		for(selector in customization['static']){
			computed['static'][selector] = customization['static'][selector];
		}
		//lastStyles = $.extend(true, {}, customization); TODO 2

		//Animate
		var animations = computed['animated'];
		for(selector in animations){
			$(selector).animate(animations[selector], animationTime, 
				function(){/*Animation complete*/});
		}

		setTimeout(function(){
			//Make other changes
			var staticChanges = computed['static'];
			for(selector in staticChanges){
				$(selector).css(staticChanges[selector]);

			}
			$('span.x').text(jthis.data('word'));

			//Set background
			$('.background').attr("src",jthis.data("background"));
			$('.background').css(animations['.foreground']);

			//Switch current class
			jprev.removeClass('current');
			jthis.addClass('current');
			isAnimating = false;
		}, animationTime + 20); //20ms delay for code run time

		//Switch icon
		jprev.removeClass('fa-dot-circle-o'); 
		jprev.addClass('fa-circle-o');
		jthis.removeClass('fa-circle-o');
		jthis.addClass('fa-dot-circle-o');
	}
};

//LISTENERS
$('.slide').click(function(){
	var jprev = $('.current');
	var jthis = $(this);
	if(!jprev.is(jthis)){
		changeSlide(jprev,jthis);
	}
});

var listeners = function(){
	$('.panel').click(function(){
		var jprev = $('.current');
		var i = $(this).data('panel');
		var jthis = $('.slide-'+i);
		if(!jprev.is(jthis)){
			changeSlide(jprev, jthis);
		}
	});
};

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
	changeSlide(jprev, jthis);
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
	changeSlide(jprev, jthis);
});

//ON PAGE LOAD
$(document).ready(function(){
	$.each($('.slide'), function(i, obj){
		//TODO add slides 
		$(obj).addClass('slide-'+ (i+1));
		$(obj).data('slide', i+1);
		var newPanel = $("<div class='panel'></div>");
		newPanel.addClass('panel-'+(i+1));
		newPanel.data('panel', i+1);
		newPanel.css('background', "url('http://placehold.it/201x125/000&text=" + $(obj).data('word') + "')");
		newPanel.appendTo('.panel-wrapper');
	});
	listeners();
});

$('.test-button1').click(function(){
	var addr = '1JoktQJhCzuCQkt3GnQ8Xddcq4mUgNyXEa';
	//var addr = '17x23dNjXJLzGMev6R63uyRhMWP1VHawKc';
	//var addr = window.location.hash.split('#').pop();
	var url = 'https://api.chain.com/v1/bitcoin';
	url += '/addresses/' + addr;
	url += '?key=GUEST-TOKEN';
	$.ajax({
		url: url,
		type: 'GET',
		success: function(data) {
			$('#balance').text(data.balance);
			alert(data.balance);
		},
		error: function(req, msg, err) {
			alert('this ran');
			console.log(err);
		}
	});
});

$('.test-button2').click(function(){
	$('.foreground').attr("src", "assets/img/sather_gate.jpg");
	$('.foreground').css("opacity", 1);
})

$('.test-button3').click(function(){
	console.log("Test button 3 ran!");
	$('.foreground').css('display', 'none');
})
