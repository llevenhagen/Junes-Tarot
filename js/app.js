

// console.log('hello');

  // ============ AUTOMATIC SCROLL ===========
$(document).ready(function(){


    $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top
    }, 'slow');

// ============ INSTAFEED JAVASCRIPT ============
var feed = new Instafeed({
  get: 'user',
  userId: '327369499',
  accessToken: '327369499.1677ed0.5eb29ae0a4554560952d1ce4b43b553c',
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
