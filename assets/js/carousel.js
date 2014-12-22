//TODO 1 change to only overwrite styles in lastStyle
//1) Initialize computed as lastStyles
//2) Rewrite all properties of computed with
//   default values represented in lastStyles
//3) Modify computed to reflect customization for the new slide
//4) Save styles from customization into lastStyle

//TODO 2 Auto-change slide

//HELPERS
var isAnimating = false;
var lastTime = new Date().getTime();

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

		//Compute final styles to change
		//Overwrite defaults with current style (customization)
		var computed = getDefault();
		for(selector in customization['animated']){
			computed['animated'][selector] = customization['animated'][selector];
		}
		for(selector in customization['static']){
			computed['static'][selector] = customization['static'][selector];
		}
		//lastStyles = $.extend(true, {}, customization); TODO 2

		//Prerequisites for animation
		$('.foreground').attr("src",jthis.data("background"));
		$('.foreground').css("opacity", 0);
		computed['animated']['.foreground']['opacity'] = 1;

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
			lastTime = new Date().getTime();
		}, animationTime + 20); //20ms delay for code run time

		//Switch icon
		jprev.removeClass('fa-dot-circle-o'); 
		jprev.addClass('fa-circle-o');
		jthis.removeClass('fa-circle-o');
		jthis.addClass('fa-dot-circle-o');
	}
};

var date = new Date();

var autoChangeSlide = function(gap){
	if(typeof gap == 'undefined'){
		gap = 5000;
	}
	var action = function(){
		console.log('action ran');
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
	}
	var run = function(){
		console.log('run ran');
		currentTime = new Date().getTime();
		console.log('current time: '+ currentTime);
		if(currentTime - lastTime > gap && !isAnimating){
			action();
		}
	}
	setInterval(run, gap);
};