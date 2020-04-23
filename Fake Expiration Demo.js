$(document).ready(function() {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    switch (curPage) {
        case 1:
            // nextButtonClicked();
            break;
        case 4:
            if (new Date($('input[name=mcx-tag-expiration]').val()) > new Date()) {
                $('.alleg-expirationMessage').show();
                $('.alleg-thankYou').hide();
            }
            break;
        default:
            if (new Date($('input[name=mcx-tag-expiration]').val()) > new Date()) {
                $('input[name=currentpage]').val(4);
                nextButtonClicked();
            }
            break;
    }
});