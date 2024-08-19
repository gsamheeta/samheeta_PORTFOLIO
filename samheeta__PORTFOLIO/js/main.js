'use strict';



/*$(document).keydown(function(e){
    if(e.which === 123){

        return false;

    }

});*/

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});


(function($) {

	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	$('.review-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		autoplay: true
	});



	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
		}
	});


	$('.lan-prog').each(function() {
		var progress = $(this).data("lanprogesss");
		var ele      = '<span></span>';
		var ele_fade = '<span class="fade-ele"></span>';

		for (var i = 1; i <= 5; i++) {
			if(i <= progress){
				$(this).append(ele);
			} else {
				$(this).append(ele_fade);
			}
		}
	});


	/*------------------
		Popup
	--------------------*/
	/*$('.portfolio-item .port-pic').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 500,
	});
*/
        $('.portfolio-item .port-pic').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: true,
            mainClass: 'img-popup-warp',
            removalDelay: 500,
            image: {
                verticalFit: true,
                titleSrc: function(item) {
                    return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }

        });





if($().circleProgress){

	//Set progress circle 1
	$("#progress1").circleProgress({
		value: 0.60,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 2
	$("#progress2").circleProgress({
		value: 0.66,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle white
	$("#progress3").circleProgress({
		value: 0.60,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle white
	$("#progress4").circleProgress({
		value: 0.80,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle skyblue
	$("#progress5").circleProgress({
		value: 0.80,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle skyblue
	$("#progress6").circleProgress({
		value: 0.70,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

    //Set progress circle skyblue
    $("#progress7").circleProgress({
        value: 0.75,
        size: 175,
        thickness: 2,
        fill: "#009fff",
        emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle skyblue
    $("#progress8").circleProgress({
        value: 0.70,
        size: 175,
        thickness: 2,
        fill: "#009fff",
        emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle skyblue
    $("#progress9").circleProgress({
        value: 0.70,
        size: 175,
        thickness: 2,
        fill: "#009fff",
        emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle skyblue
    $("#progress10").circleProgress({
        value: 0.35,
        size: 175,
        thickness: 2,
        fill: "#009fff",
        emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle skyblue
    $("#progress11").circleProgress({
        value: 0.80,
        size: 175,
        thickness: 2,
        fill: "#009fff",
        emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle skyblue
    $("#progress12").circleProgress({
        value: 0.55,
        size: 175,
        thickness: 2,
        fill: "#009fff",
        emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle skyblue
    $("#progress13").circleProgress({
        value: 0.55,
        size: 175,
        thickness: 2,
        fill: "#009fff",
        emptyFill: "rgba(0, 0, 0, 0)"
    });

    //Set progress circle skyblue
    $("#progress14").circleProgress({
        value: 0.75,
        size: 175,
        thickness: 2,
        fill: "#009fff",
        emptyFill: "rgba(0, 0, 0, 0)"
    });
}

})(jQuery);

