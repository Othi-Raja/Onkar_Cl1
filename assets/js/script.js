(function ($) { 'use strict';


  $('.main-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        vertical: true,
        verticalSwiping:true,
        autoplaySpeed: 6000
      });

 // Portfolio Popp Up
  $('.portfolio-gallery').each(function () {
        $(this).find('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

// Menu scrollspy
    $('body').scrollspy({ target: '#navbarmain' });


$(window).scroll(function() {

    var $this = $(this),
      st = $this.scrollTop(),
      navbar = $('.site-header');

    if (st > 10) {
      if ( !navbar.hasClass('scrolled') ) {
        navbar.addClass('scrolled');  
      }
    } 
    if (st < 20) {
      if ( navbar.hasClass('scrolled') ) {
        navbar.removeClass('scrolled sleep');
      }
    } 
    if ( st > 40 ) {
      if ( !navbar.hasClass('awake') ) {
        navbar.addClass('awake'); 
      }
    }
    if ( st < 350 ) {
      if ( navbar.hasClass('awake') ) {
        navbar.removeClass('awake');
        navbar.addClass('sleep');
      }
    }

  }); 


    /*
     * ----------------------------------------------------------------------------------------
     *  SMOTH SCROOL JS
     * ----------------------------------------------------------------------------------------
     */

    $('a.smoth-scroll').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1000);
        e.preventDefault();
    });

$(document).ready(function () {

// data - background
	// $('[data-background]').each(function () {
	// 	$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
	// });

/* ==========================================================================
      COUNTER UP 
 ========================================================================== */

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

	

   /* Closes the Responsive Menu on Menu Item Click*/
    $('.navbar-collapse .navbar-nav li a').on('click', function () {
        $('.navbar-toggler:visible').click();
    });
    /*END MENU JS*/



	// Init Magnific Popup
	$('.portfolio-popup').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
		mainClass: 'mfp-with-zoom',
		navigateByImgClick: true,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function (openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	});


});



  
    $(window).on ('load', function (){ // makes sure the whole site is loaded

          // ----------------------- 
        // Progress Bar--------------------
        // 
    $('.progress-bar').each(function(){
            var width = $(this).data('percent');
            $(this).css({'transition': 'width 3s'});
            $(this).appear(function() {
                console.log('hello');
                $(this).css('width', width + '%');
                $(this).find('.count').countTo({
                    from: 0,
                    to: width,
                    speed: 3000,
                    refreshInterval: 50
                });
            });
        });


    });  //End On Load Function

	
 // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });

})(jQuery);


function validateForm() {
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("emailError");

  // Regular expression for basic email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.focus();

      // Set a timeout to clear the error message after 3 seconds (adjust the time as needed)
      setTimeout(function() {
          emailError.textContent = "";
      }, 3000);

      return false;
  } else {
      emailError.textContent = ""; // Clear the error message if email is valid
  }

  // Additional validation or form submission logic can be added here
}

window.addEventListener('scroll', function() {
  var serviceItem = document.querySelector('.service-item');
  var offset = serviceItem.offsetTop;
  var scrollPosition = window.scrollY;

  if (scrollPosition > offset) {
      serviceItem.querySelector(':before').style.opacity = 1;
  } else {
      serviceItem.querySelector(':before').style.opacity = 0;
  }
});
// $(window).on("load",function(){
//   $(".loader-wrapper").fadeOut("slow");
// });
// emailJs
// const sendEmail=()=>{
//   var templateParams = {
//     from_name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     subject: document.getElementById("subject").value,
//     message: document.getElementById("message").value

// };
// emailjs.send('service_o7ze7xz','template_uvra0mq',templateParams).then(function(res){
//   alert('sucessfull')
// })
// }

// (function(){
//   emailjs.init("VNTleMBW5RpUMxBDv");
// })();