//TODO 1 change to only overwrite styles in lastStyle
//1) Initialize computed as lastStyles
//2) Rewrite all properties of computed with
//   default values represented in lastStyles
//3) Modify computed to reflect customization for the new slide
//4) Save styles from customization into lastStyle

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
		}, animationTime + 20); //20ms delay for code run time

		//Switch icon
		jprev.removeClass('fa-dot-circle-o'); 
		jprev.addClass('fa-circle-o');
		jthis.removeClass('fa-circle-o');
		jthis.addClass('fa-dot-circle-o');
	}
};