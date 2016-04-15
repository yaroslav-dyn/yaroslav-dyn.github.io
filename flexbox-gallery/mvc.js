
//jQuery
//Modal script
$(document).ready(function(){
	$('.img-wrap img, .close-button').on('click', function(){
		modalView();
		getBg();
		var srcAttr = $(this).attr('src');
		$('.modal-content img').attr('src', srcAttr);
	});
	var getBg = function(){
		$('.modal-backrel').toggleClass('modal-backrel-view');
	}
	var modalView = function(){
		var modalEl = $('.modal');
		modalEl.toggleClass('hidden');
	}	
});
//Equalheights for item if a need
// $('.item').equalHeights();