$(document).ready( function(){
    //Drop block profilers on header
        $(".name-acc span").click(function(){
            $(".prof-slide-fun").toggleClass("hidden");
        });

    ////Checked category in create company
    // $(".thumbnail ").on('click', function(event){
    //    //var ChInp =  $(this).find($("input:checkbox:checked"));
    //     var ChCategory = $(this).find(".cat-name").text();
    //     console.log(ChCategory);
    //     //console.log(ChInp);
    //     event.preventDefault();
    //
    //     $(this).find("div").toggleClass("cat-name-hover");
    //     console.log($(this).find("input").is(':checked'));
    //     if($(this).find("input:not(:checked)")){
    //         $(this).find("input").attr('checked', true)
    //     }
    //     else if ($(this).find("input:checked")){
    //         $(this).attr('checked', 'false');
    //     }
    // });
    //$(".item-social").on('click',function() {
    //    if ($(this).hasClass("facebook")){
    //        $(this).removeClass( "facebook");
    //        $(this).addClass( "facebook-active");
    //        $(this).find(".checkbox-audience").attr("checked",true);
    //        $(this).find(".label-audience").addClass("label-audience");
    //
    //    }
    //    else if($(this).hasClass("facebook-active")){
    //        $(this).removeClass( "facebook-active");
    //        $(this).addClass("facebook");
    //        $(this).find("input").attr("checked",false);
    //    }
    //});

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







    /*Slider JS*/
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


});//END READY

