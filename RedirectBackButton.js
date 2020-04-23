function RedirectBackButton(targetPage){

    $('.backButton').unbind();
    $('.backButton').click(function(){
        var newCurrPage=parseInt(targetPage);
        newCurrPage++
        $('input[name=currentpage]').val(newCurrPage)
        backButtonClicked();
    });
}