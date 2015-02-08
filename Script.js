// code to keep nav at the top from here:
// http://jsfiddle.net/livibetter/HV9HM/

function nav_top() {
    var top_of_screen = $(window).scrollTop();
    var top_of_nav = $('#anchor').offset().top;

    if (top_of_screen > top_of_nav) {
        $('nav').addClass('stick');
    }
    else {
        $('nav').removeClass('stick');
    }
}

$(function () {
    $(window).scroll(nav_top);
    nav_top();
})