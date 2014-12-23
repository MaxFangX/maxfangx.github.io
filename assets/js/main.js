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
	//setTimeout(autoChangeSlide(), 5000);
	autoChangeSlide();
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
