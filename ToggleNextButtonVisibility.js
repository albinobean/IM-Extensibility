$(document).ready(function () {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    switch(curPage) {
        case 1:
            SetNextButtonVisibleToAnswer('NextButtonVisibility','Show');
    }
});
function evaluateNextButtonVisibility(delay){
    if(!delay){delay=500}; // Set default value
    setTimeout(function(){
        if($('.ShowNextWhenSelected .checked').length>0){
            $('.nextButton').show();
        } else {
            $('.nextButton').hide();
        }
    },delay);
}
function SetNextButtonVisibleToAnswer(qTag,answerText){
    $('#' + qTag + '_question .answerText:contains("' + answerText + '")').addClass('ShowNextWhenSelected');
    $('#' + qTag + '_question .answerText:contains("' + answerText + '")').parent().parent().parent().find('.ControlCell').addClass('ShowNextWhenSelected');
    $('#' + qTag + '_question .answerText').click(function(){evaluateNextButtonVisibility()});
    $('#' + qTag + '_question .ControlCell').click(function(){evaluateNextButtonVisibility()});
    $('#' + qTag + '_question .iCheck-helper').click(function(){evaluateNextButtonVisibility()});
    evaluateNextButtonVisibility(0);
}
SetNextButtonVisibleToAnswer('NextButtonVisibility','Show');