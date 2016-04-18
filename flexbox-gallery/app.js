(function () {

var app = angular.module('galleryApp', []);
	
	app.controller('deployImage',function(){
		this.imgItem = imgGems;
	});


	var imgGems = [
		{
			"itemHeadline": "Item 1",
			"itemImgSrc": "img/img-3.jpg",
			"itemDescription": "Description 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque."
		},
		{
			"itemHeadline": "Item 2",
			"itemImgSrc":"img/img-4.jpg",
			"itemDescription": "Description 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?"
		},
		{
			"itemHeadline": "Item 3",
			"itemImgSrc": "img/img-5.jpg",
			"itemDescription": "Description 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque."
		},
		{
			"itemHeadline": "Item 4",
			"itemImgSrc": "img/img-6.jpg",
			"itemDescription": "Description 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?"
		},
				{
			"itemHeadline": "Item 5",
			"itemImgSrc": "img/img-7.jpg",
			"itemDescription": "Description 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque."
		},
		{
			"itemHeadline": "Item 6",
			"itemImgSrc": "img/img-8.jpg",
			"itemDescription": "Description 6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?"
		},
		{
			"itemHeadline": "Item 7",
			"itemImgSrc": "img/img-9.jpg",
			"itemDescription": "Description 7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque."
		},
		{
			"itemHeadline": "Item 8",
			"itemImgSrc": "img/img-2.jpg",
			"itemDescription": "Description 8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?"
		}
	];

})();