/*Burger-active*/

$(document).ready(function() {
	$('.burger-menu').click(function(event) {
		$('.burger-menu,.topbar-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});



/*fixation topbar with screen width less than 725px*/
function checkWidth() {
    if ($(window).width() > 725) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
}
$(window).resize(checkWidth);


/*scroll window make the action with topbar if screen width more than 725px*/
$(window).scroll(function() {
var height = $(window).scrollTop();
if(height > 10){
$('header').addClass('sticky');
$('.header-wrapper').addClass('topbar-size');
} else{
$('header').removeClass('sticky');
$('.header-wrapper').removeClass('topbar-size');
}
});


$(document).ready(function(){
  $('.top-slider').slick({
    arrows: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 7000,
    fade: false,
    infinite: true,
    cssEase: "ease-out",
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    },
    ]
  });
});


function checkWidth() {
    if ($(window).width() < 768) {
        $('.header-xl').removeClass('.br');
    } else {
        $('.slide-text__header-xl').removeClass('sticky');
    }
}
$(window).resize(checkWidth);



$(document).ready(function(){
  $('.benefits__body').slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: 'progressive',
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: 'progressive',
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: 'progressive',
      }
    },
    ]
  });
});


//magnific-popup initalize
$(document).ready(function() {
  $('.mosaic-gallery').magnificPopup({
    delegate: 'a',
    type:'image',
    closeOnBgClick: true,
    //disableOn: 767.98,
    gallery: {
    enabled: true,
    tCounter: ''
    },
    image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function(item) {
    return item.el.attr('title');
    }
  }
  });
});


$(document).ready(function(){
  $('.ourclients__bottom').slick({
    arrows: true,
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
      }
    },
    {
      breakpoint: 1130,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
      }
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
      }
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
      }
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
      }
    },
    ]
  });
});



$(document).ready(function() {
  $('.footer-link-address').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});



/*$(document).ready(function(){
  $('.mosaic-gallery').mosaicflow({
    itemSelector: '.mosaic-gallery__item',
    minColumns: 3,
    minItemWidth: 300,
  });
});*/

/*$(document).ready(function(){
  $('.benefits__body').slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: 'progressive',
      }
    }
    ]
  });
});*/


/*magnific-popup initalize
$(document).ready(function() {
  $('.').magnificPopup({
  	delegate: 'a',
  	type:'image',
  	closeOnBgClick: true,
  	gallery: {
    enabled: true,
    tCounter: ''
  	},
  	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
		return item.el.attr('title');
		}
	}
  });
});
*/




