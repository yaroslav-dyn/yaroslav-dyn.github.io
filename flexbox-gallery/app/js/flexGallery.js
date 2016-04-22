(function () {

var app = angular.module('galleryApp', []);
	
	app.controller('deployImage',function($scope){
		console.log($scope);
		$scope.imgItem = photos;
		 // initial image index
    $scope._Index = 0;

	    // if a current image is the same as requested image
	    $scope.isActive = function (index) {
	        return $scope._Index === index;
	    };

	    // show prev image
	    $scope.showPrev = function () {
	        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.imgItem.length - 1;
	    };

	    // show next image
	    $scope.showNext = function () {
	        $scope._Index = ($scope._Index < $scope.imgItem.length - 1) ? ++$scope._Index : 0;
	    };

	    // show a certain image
	    $scope.showPhoto = function (index) {
	        $scope._Index = index;
	    };

	});

	var photos = [
		{
			"itemHeadline": "Item 1",
			"itemImgSrc": "app/img/img-3.jpg",
			"itemDescription": "Description 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque.",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
		{
			"itemHeadline": "Item 2",
			"itemImgSrc":"app/img/img-4.jpg",
			"itemDescription": "Description 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
		{
			"itemHeadline": "Item 3",
			"itemImgSrc": "app/img/img-5.jpg",
			"itemDescription": "Description 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque.",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
		{
			"itemHeadline": "Item 4",
			"itemImgSrc": "app/img/img-6.jpg",
			"itemDescription": "Description 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
				{
			"itemHeadline": "Item 5",
			"itemImgSrc": "app/img/img-7.jpg",
			"itemDescription": "Description 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque.",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
		{
			"itemHeadline": "Item 6",
			"itemImgSrc": "app/img/img-8.jpg",
			"itemDescription": "Description 6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
		{
			"itemHeadline": "Item 7",
			"itemImgSrc": "app/img/img-9.jpg",
			"itemDescription": "Description 7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque.",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
		{
			"itemHeadline": "Item 8",
			"itemImgSrc": "app/img/img-2.jpg",
			"itemDescription": "Description 8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		}
	];


	
})();

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
});//end ready


