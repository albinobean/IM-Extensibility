$(document).ready(function() {
    var logo = '';
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    if(curPage==1){
        logo=$('#LogoPath').val();
    } else {
        logo=parseInt($('input[name=mcx-tag-LogoPath]').val(), 10);
    }
    $('#headerLogoImage').attr('src',logo);
    $('#headerLogoImage').show();
});