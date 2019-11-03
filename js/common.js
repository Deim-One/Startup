$(window).on('load', function () {
    var preloader = $('.loader-area'),
        loader = preloader.find('.loader');
    loader.fadeOut();
    preloader.delay(350).fadeOut('slow');
});

$(function() {
    new WOW().init();

	$(window).scroll( function () {
        if ($(this).scrollTop() > 50) {
            $('.fixed-top').addClass('menu-scroll');
        } else {
            $('.fixed-top').removeClass('menu-scroll');
        }

        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click( function () {
        $("html, body").animate( {scrollTop: 0}, 500 );
        return false;
    });

	$('.navbar-nav .nav-link, .btn-started').click( function() {
		$('.navbar-nav').find( '.nav-item.active' ).removeClass('active');
	    $(this).parent('.nav-item').addClass('active');
		var target = $(this).attr('href');
		$('html, body').animate(
		    {
			    scrollTop: $(target).offset().top
		    },
			500
		);
	});
	
	var lastId,
        topMenu = $(".navbar-nav"),
        topMenuHeight = topMenu.outerHeight() + 100,
        // All list items
        menuItems = topMenu.find(".nav-link"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map( function() {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

	$(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;
   
        // Get id of current scroll item
        var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
   
        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
        }                   
    });
	
	$('.slider').slick({
			    slidesToShow: 4,
			    slidesToScroll: 1,
				prevArrow: '<button type="button" class="arrow arrow-prev d-flex justify-content-center align-items-center"><i class="fas fa-angle-left"></i></button>',
                nextArrow: '<button type="button" class="arrow arrow-next d-flex justify-content-center align-items-center"><i class="fas fa-angle-right"></i></button>',
				responsive: [
				    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
				]
	});
});