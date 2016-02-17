$(document).ready( function(){
    //Drop block profilers on header
        $("#button-drop").click(function(){
            $(".prof-slide-fun").fadeIn(300).toggleClass("hidden");
        });


    $("#check-social-item-1").click(function(){
       if ( $("#check-social-item-1:checked")) {
           $(".facebook").toggleClass("facebook-active");
       }
    });
    $("#check-social-item-2").click(function(){
        if ( $("#check-social-item-2:checked")) {
            $(".google-plus").toggleClass("google-plus-active");
        }
    });
    $("#check-social-item-3").click(function(){
        if ( $("#check-social-item-3:checked")) {
            $(".instagram").toggleClass("instagram-active");
        }
    });
    $("#check-social-item-4").click(function(){
        if ( $("#check-social-item-4:checked")) {
            $(".pinterest").toggleClass("pinterest-active");
        }
    });
    $("#check-social-item-5").click(function(){
        if ( $("#check-social-item-5:checked")) {
            $(".linkid").toggleClass("linkid-active");
        }
    });
    $("#check-social-item-6").click(function(){
        if ( $("#check-social-item-6:checked")) {
            $(".tumblr").toggleClass("tumblr-active");
        }
    });
    $("#check-social-item-7").click(function(){
        if ( $("#check-social-item-7:checked")) {
            $(".twitter").toggleClass("twitter-active");
        }
    });
    $("#check-social-item-8").click(function(){
        if ( $("#check-social-item-8:checked")) {
            $(".vine").toggleClass("vine-active");
        }
    });
    $("#check-social-item-9").click(function(){
        if ( $("#check-social-item-9:checked")) {
            $(".youtube").toggleClass("youtube-active");
        }
    });
    /*active button in business & seo special class*/
    $("#check-business-1 + label").click(function(){
        $(".seo-comp-1").toggleClass("seo-comp-1-active");
    });
    $("#check-business-2 + label").click(function(){
        $(".seo-comp-2").toggleClass("seo-comp-2-active");
    });
    $("#check-business-3 + label").click(function(){
        $(".seo-comp-3").toggleClass("seo-comp-3-active");
    });

    $(".approach-label").click(function(){

        if($(this).find(".rounded-icon").hasClass("rounded-icon-active")){
            $(this).remove("rounded-icon-active");
        }
        else{
            $(this).find(".rounded-icon").toggleClass("rounded-icon-active");
        }

    });
    $(".answer-item").click(function(){
        $(this).find(".answer-hidden").fadeIn(300).toggleClass("hidden");
        $(this).find(".glyphicon-plus").toggleClass("glyphicon-minus  faq-icon-minus");
        $(this).find(".answer-par").css("fontWeight","500");
    });

    /*jquery Calendar*/
    $( "#datepicker-StartDate" ).datepicker({});


    /*Slider age  audience JS*/
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
        $( "#amount" ).val(  $( "#slider-range" ).slider( "values", 0 ) + " - " +$( "#slider-range" ).slider( "values", 1 ) );
    });

    /*Slider budget JS*/
    $(function() {
        $( "#slider-budget" ).slider({
            value : 25000,
            min : 5000,
            max : 100000,
            step: 10,
            create: function( event, ui ) {
                val = $( "#slider-budget" ).slider("value");
                $( "#amount-budget" ).html( val );
            },
            slide: function( event, ui ) {
                $( "#amount-budget" ).val( ui.value );
            }
        });
    });



});//END READY

