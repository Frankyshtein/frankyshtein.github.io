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
