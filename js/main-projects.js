$(window).on('load', function () {
    $(".preload").delay(800).fadeOut('slow');
  });
$("li span").on('click', function () {
    console.log('hey');
    if (!$(this).siblings().hasClass("opened")) {
        
        $(".opened").slideToggle().removeClass("opened");
        $(this).siblings().slideToggle().addClass("opened");
    } else {
        $(this).siblings().slideToggle().removeClass("opened");
    }
});
function blinkingNeon() {
    $('.sign__word span').toggleClass('badNeon');
    setTimeout(()=>{$('.sign__word span').toggleClass('badNeon')},100);
    setTimeout(()=>{$('.sign__word span').toggleClass('badNeon')},300);
};
setInterval(blinkingNeon,4000);
console.log('Look at the code here: https://github.com/Frankyshtein/frankyshtein.github.io/tree/dev');