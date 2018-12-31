// console.log('hello');


// ============ INSTAFEED JAVASCRIPT ============
$(document).ready(function() {
console.log('hello');
  var feed = new Instafeed({
    get: 'user',
    userId: '327369499',
    // junes tarot online deployment access token:
    accessToken: '327369499.81094f6.7ab95b1f31e14797976c8069f9916ca8',
    // local junes tarot access token:
    // accessToken: '327369499.45456d4.8257602705464a11bd104aad06022598',
    type: 'image',
    limit: 12,
    sortBy: 'most-recent',
    resolution: 'standard_resolution',
    // useHttp: true,
    // first try client id:
    // clientId: '45456d4d07ef4cd9b7a8749b370107c2',
    // junes tarot online deployment client id:
    clientId: '81094f69284547778497e07c897440f9',
    template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
  });
  if ($('#instafeed').length){
  feed.run();
}
// =========== MAGNIFIC CODE FOR POP UP MODAL ON CLICK - NOT WORKING YET===
// $('.gallery').magnificPopup({
//       type: 'image',
//       // the next line tells it to target the anchor tag for what to display
//       delegate: 'a',
//       gallery: {
//           enabled: true
//       }
//   });
  // ==============SMOOTH SCROLL ===================
  // THE FOLLOWING CODE WAS TAKEN FROM https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  $("a").on('click', function(event) {
// Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 'slow', function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  // END CODE USED FROM https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  // ======================================
});
