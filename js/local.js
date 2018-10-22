$(function ($) {
    $('a').each(function () {
        $(this).attr("target", "_blank")
    });
    $('.task').hide().click(function () {
        let str = prompt("consult ithanmang@163.com");
        if (str !== '' && str === '901478') {
        } else {
            return false;
        }
    });
});