
//jQuery
//Modal script
$(document).ready(function(){
(function( $ ) {
  $.fn.flexGallery = function(options) {
  	var settings = $.extend({
  		buttonOpen: false,
  		classButton: 'block',//inline, block (button-fg, button-fg-block)
  		theme: 'default', //default, grey, indigo, lime
  		addModal: true,
  		slideImg: true,		
		wrap: true,
		flexContainer: false,
		alignItem: 'center' //left, center, right
  	},options);
  	return this.each(function(){
  		if(settings.buttonOpen == true){
			var cButtonSet = settings.classButton;
			$(this).find('.advance-rule').addClass('button-fg-' + cButtonSet);
		}
		else{
			if (settings.buttonOpen == false) {
				$(this).find('.advance-rule').addClass('hidden');
			}			
		}

  		if(settings.addModal == true){
  			goModal();
  		}
  		if(settings.slideImg == true){
  			$('.navi').removeClass('hidden');
  		}
		if(settings.wrap == false){
			$('.container-gallery').addClass('container-flex-nowrap');
		}

		if(settings.flexContainer == true){
			$('.container-gallery').addClass('container-flex-fluid');
		}

		var setAlign = settings.alignItem;	
		$('.container-gallery').addClass('container-flex-' + setAlign);

		var setTheme = settings.theme;
		$('.item, .modal').addClass('theme-class-' + setTheme);
  	});
    
  };

})(jQuery);//end plugin init
	//script Modal
	function goModal(){
			$('.img-wrap img, .close-button').on('click', function(){
			getBg();
			modalView();
		});
	}
	var getBg = function(){
		backrelEl = $('body');
		backrelEl.toggleClass('modal-backrel-view');
	};
	var modalView = function(){
		var modalEl = $('.modal');
		modalEl.fadeToggle(120, function(){
			$(this).toggleClass('hidden');
		})
	};

//user method parameters
	$('.container-gallery').flexGallery({
		addModal: true,
		buttonOpen: true,
		classButton:'block',
		wrap: true,
		flexContainer: false,
		alignItem: 'center',
		slideImg: true,
		theme: 'grey'	
	});

//Equalheights for item if a need
	//$('.item').equalHeights();




// var stop = false, age = 16;

// age >= 18 ? alert('Welcome' + " "+ age) : alert('Dont access' + " "+ age);

});//end ready


