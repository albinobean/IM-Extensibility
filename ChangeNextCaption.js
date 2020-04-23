$(document).ready(function(){
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    switch(curPage) {
        case 1:
            changeNextCaptionOnLanguageChange("Language"); //Change to the question tag set for the language selector question
            break;
    }
});
function changeNextCaptionOnLanguageChange(LanguageTag){
    $('#' + LanguageTag + '_question .answerText').click(function(){
        SetNextCaption($(this).html());
    });
    $('#' + LanguageTag + '_question label').click(function(){
        SetNextCaption($(this).find('.answerText').html());
    });
    $('#' + LanguageTag + '_question .iCheck-helper').click(function(){
        SetNextCaption($(this).parent().parent().parent().find('.answerText').html());
    });
}
function SetNextCaption(Language){
    var cap='';
    switch (Language) {
        case 'English':
            cap='Next';
            break;
        case 'Spanish (Latin America)':
            cap='Siguiente';
            break;
        default:
            cap=$('.nextButton')[0].html();
    }
    $('.nextButton').html(cap);
}
