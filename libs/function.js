$(document).ready( function() {
    //Drop block profilers on header
    $("#button-drop").click(function(){
        $(".prof-slide-fun").fadeIn(300).toggleClass("hidden");
    });
    $(".button-alternate").click(function(){
        $(".prof-slide-fun").fadeIn(300).toggleClass("hidden");
    });


  $(".checkbox-audience").click(function(){
        var currentId = $(this).attr("id");
        var ourParent = $(this).parent();
        if(ourParent.attr("class") === "item-social" + " " +  currentId){
            ourParent.addClass( "item-social" + " " + currentId + "-active")
        }
        else{
            ourParent.removeClass(currentId + "-active" );
        }   
    });


    /*active button in business & seo special class*/
    $(".label-business").click(function(){
         var dataEl = $(this).attr("data-number");
        $(".seo-comp-" + dataEl).toggleClass("seo-comp-" + dataEl + "-active");
    });

    $(".approach-label").click(function(){
        $(".approach-label i").removeClass("rounded-icon-active");
        $(this).find(".rounded-icon").addClass("rounded-icon-active");
       
    });
    $(".answer-item").click(function(){
        $(this).find(".answer-hidden").fadeIn(300).toggleClass("hidden");
        $(this).find(".glyphicon-plus").toggleClass("glyphicon-minus  faq-icon-minus");
        $(this).find(".answer-par").css("fontWeight","600");
    });

/*table overview(hidden)*/
    $(".hidden-table").click(function(){
        $(".row-hidden").toggleClass("hidden");
        $(this).toggleClass("hidden-table-bg");
        if($(this).hasClass("hidden-table-bg")){
            $(this).find(".glyphicon-triangle-bottom").css("color","#fff");
            $(".top-edge").css({background:"#f2f2f2",position: "relative"});
        }
        else{
            $(this).find(".glyphicon-triangle-bottom").css("color","#b5b5b5");
            $(".top-edge").css("background","#fff");
        }
    });

    /*jquery Calendar*/
    $( "#datepicker-StartDate" ).datepicker();

    /*Slider age audience JS*/
    $(function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 100,
            values: [18, 39],
            slide: function( event, ui ) {
                $( "#amount" ).val( ui.values[ 0 ] +" - "+ ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val(  $( "#slider-range" ).slider( "values", 0 ) + " - " + $( "#slider-range" ).slider( "values", 1 ) );
    });

    /*Slider budget JS*/
    $(function() {
        $( "#slider-budget" ).slider({
            value : 25000,
            min : 5000,
            max : 100000,
            step: 10,
            create: function( event, ui ) {
                $( "#amount-budget" ).html( ui.value );
                $(".budget-slider-wrap .ui-slider-handle").before("<div class='in-budget-wr range-modal'>" +
                    "<input readonly id='next-val' value='25000'/><div class='triangle'></div></div>");
            },
            slide: function( event, ui ) {
                //$( "#amount-budget" ).val( ui.value);
                $(".in-budget-wr").css('left', ((ui.value - 5000 ) / 1000)  + "%");
                $("#next-val").val(ui.value);
            }
        });
    });

// corousel in dashboard influenser page
    $(".carousel").carousel({
        interval: false
    });


// selected category in 'types of blogs'
    var appendFun = function(currentCat,currentCatFilter,outputArea){
        $(outputArea).append(" " + "<span class='" + currentCatFilter + "'>" + currentCat + ", "+ "</span>" );
    };

    $(".gal-label").on("click", function(){

        var currentCat =  $(this).parent().find(".cat-name").text(),
            currentCatFilter =  $(this).attr("for"),
            outputArea = ".blog-cat  h6";


        if($(this).hasClass("checked")){
            $(this).removeClass("checked");

            $("." + currentCatFilter).remove();
        }
        else if(currentCatFilter == "all"){
            $(this).addClass("checked");
            $(".current-cat h6 span").remove();
            appendFun(currentCat, currentCatFilter);
        }
        else if($(".current-cat h6 span").hasClass("all")){
            return;
        }
        else{
            $(this).addClass("checked");
            appendFun(currentCat, currentCatFilter, outputArea);
        }
       

    });
    // selected country
    $(".countries .label-audience").on("click", function(){

        var currentCat =  $(this).parent().find(".country-label").text(),
            currentCatFilter =  $(this).attr("for"),
            outputArea = ".countries-selected-text h6";

        if($(this).hasClass("checked")){
            $(this).removeClass("checked");
            $("." + currentCatFilter).remove();
        }
        else{
            $(this).addClass("checked");
            appendFun(currentCat, currentCatFilter, outputArea);
        }

    });




});//END READY

