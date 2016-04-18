
//jQuery
//Modal script
$(document).ready(function(){

(function( $ ) {
  $.fn.flexGallery = function(options) {

  	var settings = $.extend({
  		buttonOpen:false,
  		addModal: false,
  		classButton: ''
  	},options);
  	return this.each(function(){
  		if(settings.buttonOpen == true){
  			var thisClass = settings.classButton;
 			$(this).find('.item .advance-rule').append("<a class='a-btn'>Open</a>").addClass(thisClass); 
  		}	
  		if(settings.addModal == true){
  			goModal();
  		}	
  	});
    
  };

})(jQuery);//end plugin init

	function goModal(){
		$('.img-wrap img, .close-button').on('click', function(){
		var srcAttr = $(this).attr('src');
		$('.modal-content img').attr('src', srcAttr);
			getBg();
			modalView();	
	});
	}
	var getBg = function(){
		backrelEl = 
		$('.modal-backrel').toggleClass('modal-backrel-view');
	}
	var modalView = function(){
		var modalEl = $('.modal');
		modalEl.fadeToggle(150, function(){
			$(this).toggleClass('hidden');
		})
	};


	$('.container-flex').flexGallery({
		addModal: true,
		buttonOpen: true,
		classButton:'button-fg-block'
	});


});//end ready
//Equalheights for item if a need
// $('.item').equalHeights();

