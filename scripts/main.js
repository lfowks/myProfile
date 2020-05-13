// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library


    $(".myImg").click(function(e){

        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   
      
    });

    $("#aboutSticky").click(function(e){
      $("#aboutLink a").click();
    });
    $("#skillsSticky").click(function(e){
      $("#skillsLink a").click();
    });
    $("#experienceSticky").click(function(e){
      $("#experienceLink a").click();
    });
    $("#portfolioSticky").click(function(e){
      $("#portfolioLink a").click();
    });
    $("#educationSticky").click(function(e){
      $("#educationLink a").click();
    });

    $("#homeSticky").click(function(e){
      window.location.href = "#";
    });


    $("#navigation .nav-item").click(function(){
      $("#btnCloseToggle").click();
    });


    
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
