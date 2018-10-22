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
    $('hr').css({
        marginTop: '20px',
        border: '5px solid rgba(0, 0, 0, 0.02)',
        borderRadius: '10px'
    });
    let flag = true;
    $('hr').on('click', function (e) {
        if (flag) {
            $('.task').slideDown()
            flag = false;
        } else {
            $('.task').slideUp();
            flag = true;
        }
    });
    console.log('ceshi !');

});