
//jQuery
//Modal script
$(document).ready(function(){

(function( $ ) {
  $.fn.flexGallery = function(options) {

  	var settings = $.extend({
  		buttonOpen: false,
  		addModal: false,
  		classButton: 'block',//inline, block (button-fg, button-fg-block)
		wrap: true,
		flexContainer: false,
		alignItem: 'center' //left, center, right
  	},options);
  	return this.each(function(){
  		if(settings.buttonOpen == true){
			if(settings.classButton == 'block'){
				$(this).find('.item .advance-rule').append("<a class='a-btn'>Open</a>").addClass('button-fg-block');
			}
			else{
				if(settings.classButton == 'inline'){
					$(this).find('.item .advance-rule').append("<a class='a-btn'>Open</a>").addClass('button-fg');
				}
			}
  		}
		console.log(settings);
  		if(settings.addModal == true){
  			goModal();
  		}
		if(settings.wrap == false){
			$('.container-gallery').addClass('container-flex-nowrap');
		}

		if(settings.flexContainer == true){
			$('.container-gallery').addClass('container-flex-fluid');
		}
		if(settings.alignItem == 'left'){
			$('.container-gallery').addClass('container-flex-left');
		}
		if(settings.alignItem == 'center'){
			$('.container-gallery').addClass('container-flex-center');
		}
		if(settings.alignItem == 'right'){
			$('.container-gallery').addClass('container-flex-right');
		}

  	});
    
  };

})(jQuery);//end plugin init
	//script Modal
	function goModal(){
		$('.img-wrap img, .close-button').on('click', function(){
		var srcAttr = $(this).attr('src');
		$('.modal-content img').attr('src', srcAttr);
			getBg();
			modalView();	
		});
	};
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
		alignItem: 'center'
	});

//Equalheights for item if a need
	//$('.item').equalHeights();
});//end ready


