(function () {

var app = angular.module('galleryApp', []);
	
	app.controller('deployImage',function($scope){
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
			"itemImgSrc": "img/img-3.jpg",
			"itemDescription": "Description 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque.",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
		{
			"itemHeadline": "Item 2",
			"itemImgSrc":"img/img-4.jpg",
			"itemDescription": "Description 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
		{
			"itemHeadline": "Item 3",
			"itemImgSrc": "img/img-5.jpg",
			"itemDescription": "Description 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque.",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
		{
			"itemHeadline": "Item 4",
			"itemImgSrc": "img/img-6.jpg",
			"itemDescription": "Description 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
				{
			"itemHeadline": "Item 5",
			"itemImgSrc": "img/img-7.jpg",
			"itemDescription": "Description 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque.",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
		{
			"itemHeadline": "Item 6",
			"itemImgSrc": "img/img-8.jpg",
			"itemDescription": "Description 6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
		{
			"itemHeadline": "Item 7",
			"itemImgSrc": "img/img-9.jpg",
			"itemDescription": "Description 7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque.",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		},
		{
			"itemHeadline": "Item 8",
			"itemImgSrc": "img/img-2.jpg",
			"itemDescription": "Description 8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?",
			"readMoreHeadline": "Read more",
			"urlReadMore": "/"
		}
	];


	
})();