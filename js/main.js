$(document).ready(function () {
    $('.nav-tab').hover(function () {
        $(this).css('color', '#0140b1');
    }, function () {
        $(this).css('color', 'initial');
    });
    $(function () {
        $('.tlt').textillate({ in: { effect: 'rollIn' } });
    });
    $('a').confirmMailto();
});
