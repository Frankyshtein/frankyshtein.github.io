$(window).on('load', function () {
    $(".preload").delay(1000).fadeOut('slow');
  });
$("li").on('click', function () {
    if (!$(this).children("div").hasClass("opened")) {
        
        $(".opened").slideToggle().removeClass("opened");
        $(this).children("div").slideToggle().addClass("opened");
    } else {
        $(this).children("div").slideToggle().removeClass("opened");
        console.log("hey")
    }
});
