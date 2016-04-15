(function () {

var app = angular.module('galleryApp', []);
	
	app.controller('deployImage',function(){
		this.imgItem = imgGems;
	});


	var imgGems = [
		{
			"itemHeadline": "Item 1",
			"itemImgSrc": "http://lorempixel.com/640/480/abstract/",
			"itemDescription": "Description 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque."
		},
		{
			"itemHeadline": "Item 2",
			"itemImgSrc": "http://lorempixel.com/640/480/abstract/1",
			"itemDescription": "Description 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?"
		},
		{
			"itemHeadline": "Item 3",
			"itemImgSrc": "http://lorempixel.com/640/480/abstract/3",
			"itemDescription": "Description 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque."
		},
		{
			"itemHeadline": "Item 4",
			"itemImgSrc": "http://lorempixel.com/640/480/abstract/5",
			"itemDescription": "Description 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?"
		},
				{
			"itemHeadline": "Item 5",
			"itemImgSrc": "http://lorempixel.com/640/480/abstract/10",
			"itemDescription": "Description 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque."
		},
		{
			"itemHeadline": "Item 6",
			"itemImgSrc": "http://lorempixel.com/640/480/abstract/2",
			"itemDescription": "Description 6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?"
		},
		{
			"itemHeadline": "Item 7",
			"itemImgSrc": "http://lorempixel.com/640/480/abstract/4",
			"itemDescription": "Description 7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloremque, debitis possimus expedita ea atque."
		},
		{
			"itemHeadline": "Item 8",
			"itemImgSrc": "http://lorempixel.com/640/480/abstract/7",
			"itemDescription": "Description 8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus at eius expedita cum, quaerat dolore?"
		},
	];

})();