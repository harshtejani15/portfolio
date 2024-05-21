


(window).scroll(function() {
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


// counter 

$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var duration = 2000; 
  var steps = []; 

  for (i = 0; i < countersQuantity; i++) {
    steps[i] = counter[i] / (duration / 10); 
  }

  var count = function(start, value, id, step) {
    var localStart = start;
    var interval = setInterval(function() {
      if (localStart < value) {
        localStart += step;
        counters[id].innerHTML = Math.ceil(localStart); 
      } else {
        clearInterval(interval);
      }
    }, 10);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j, steps[j]); 
  }
});



// jss
$(window).load(function(){
	$('.cssloader-parent').fadeOut(1000,function(){
		$(this).remove();
	});
});

// $(document).ready(function() {
//   // Function to show loader for 2 seconds
//   function showLoader() {
//       var loaderParent = $('<div class="cssloader-parent"><div class="cssloader"><div class="sh1"></div><div class="sh2"></div><h4 class="lt">loading</h4></div>    </div>'); // Create loader-parent element
//       $('body').append(loaderParent); // Append loader-parent to body
//       loaderParent.fadeIn(1000); // Fade in loader-parent
//       setTimeout(function() {
//           loaderParent.fadeOut(1000, function() {
//               loaderParent.remove(); // Remove loader-parent after fading out
//           });
//       }, 100); // Show loader for 2 seconds
//   }

//   // Attach click event handler to trigger the showLoader function
//   $(document).on('click', function() {
//       showLoader(); // Show loader on click
//   });
// });




document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const formData = new FormData(this);

  // Disable the submit button to prevent multiple submissions
  const submitButton = document.getElementById("submitButton");
  submitButton.disabled = true;

  // Send form data to Web3Forms' endpoint
  fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
  })
  .then(response => {
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      return response.json(); // Parse JSON response
  })
  .then(data => {
      // Handle successful form submission
      console.log(data); // Log the response from Web3Forms
      // Show submit message
      document.getElementById("submitMessage").style.display = "block";
      // Hide submit button after successful submission
      submitButton.style.display = "none";
      // Re-enable the submit button
      submitButton.disabled = false;
      // Reset the form
      document.getElementById("myForm").reset();
  })
  .catch(error => {
      // Handle errors
      console.error("Error:", error);
      // You can update the UI or show an error message here
      // Re-enable the submit button in case of error
      submitButton.disabled = false;
  });
});
