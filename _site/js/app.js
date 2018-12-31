

// console.log('hello');

  // ============ AUTOMATIC SCROLL ===========
$(document).ready(function(){


    // $('html, body').animate({
    //   scrollTop: $(window.location.hash).offset().top
    // }, 'slow');

// ============ INSTAFEED JAVASCRIPT ============
var feed = new Instafeed({
  get: 'user',
  userId: '327369499',
  accessToken: '327369499.45456d4.8257602705464a11bd104aad06022598',
  type: 'image',
  get: 'tagged',
  tagName: 'awesome',
  limit: 12,
  sortBy: 'most-recent',
  resolution: 'standard_resolution',
  clientId: '45456d4d07ef4cd9b7a8749b370107c2',
  template: '<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
  });
  feed.run();

});
