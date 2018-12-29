// $(()=> {
//
// })
console.log('hello');
$(document).ready(function(){
    $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top
    }, 'slow');
});
