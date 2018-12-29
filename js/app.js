// $(()=> {
//
// })
console.log('hello');
$(document).ready(function(){
    $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top.scrollIntoView({
  behavior: 'smooth'
})
    }, 1000);
});
