$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#scroll-top').fadeIn();
    } else {
        $('#scroll-top').fadeOut();
    }
});

$("#scroll-top").click(function() {
    $("html, body").animate({
    	scrollTop: 0
    }, 0);
 });


$(document).ready(function () {


$('.toggle').click(function() {
	$("body").toggleClass('menu_open');
})

$('.navmenu ul li a').click(function() {
	$("body").removeClass('menu_open');
})




$(document).ready(function(){
  var previousLi = null;

  $('.navmenu ul li a').click(function(){
    // Remove the "active" class from the previously clicked list item
    if (previousLi !== null) {
      $(previousLi).removeClass('active');
    }

    // Add the "active" class to the clicked list item
    $(this).addClass('active');

    // Update the previously clicked list item
    previousLi = this;
  });
})


$('.has-dropdown').click(function() {
	$('.dd-box-shadow').toggleClass('dropdown-active');

})


$('#dd-box-shadow ').click(function() {
	$('.drowpdown-menu-ul').toggleClass('dropdown-active');

})

$('.testimonial').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


	
	/**
	 * Frequently Asked Questions Toggle
	 */
	document.querySelectorAll('.accordion-item h2').forEach((faqItem) => {
	  faqItem.addEventListener('click', () => {
	    faqItem.parentNode.classList.toggle('faq-active');
	  });
	});

  /**
     * Init isotope layout and filters
     */

  function initIsotopeLayout() {
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aosInit === 'function') {
            aosInit();
          }
        }, false);
      });

    });
  }
  window.addEventListener('load', initIsotopeLayout);
  








// fixed header
    $(window).scroll(function() {
        var header = $('.header');
        var scroll = $(window).scrollTop();
        var homeScroll = 100;
        if (scroll > homeScroll) {
            header.addClass('fixed');
            jQuery('#return-to-top').fadeIn(300);
        } else {
            header.removeClass('fixed');
            jQuery('#return-to-top').fadeOut(300);
        }
    });

});





// jss
$(window).load(function(){
	$('.cssloader-parent').fadeOut(1000,function(){
		$(this).remove();
	});
});




// contact 
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  // Get form data
  var formData = new FormData(this);
  
  // Send form data to server-side script (e.g., PHP)
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "send_email.php"); // Replace "send_email.php" with your server-side script URL
  xhr.onload = function() {
      if (xhr.status === 200) {
          alert("Email sent successfully!");
          // Optionally, you can redirect the user to a thank you page or clear the form fields
          // window.location.href = "thank_you.html";
          // document.getElementById("contactForm").reset();
      } else {
          alert("Failed to send email. Please try again later.");
      }
  };
  xhr.send(formData);
});


