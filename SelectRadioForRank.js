$(document).ready(function(){
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    switch (curPage) {
        case 8:
            $('.nextButton').unbind();
            $('.nextButton').click(function(){
                selectRadioForRank('PREFERENCE', 'RANKING');
                nextButtonClicked();
            })
            
            break;
    }

});
// selectRadioForRank('PREFERENCE', 'RANKING');
function selectRadioForRank(rankQuestionTag, radioQuestionTag, rank) {
    let rankAnswer = getTextOfRank(rankQuestionTag, rank);
    if (rankAnswer) {
        selectRadioByTextValue(radioQuestionTag, rankAnswer);
    } else {
        unanswerRadio(radioQuestionTag);
    }
}
function unanswerRadio(qTag){
    $(`#${qTag}_question .checked`).removeClass('checked');
    $(`#${qTag}_question input`).attr('checked',false);
}
function selectRadioByTextValue(qTag, answerText) {
    let answers=$(`#${qTag}_question .answerText`);
    let answer=answers.toArray().filter(function(itm){
        return $(itm).text()==answerText
    });
    let label=$(answer).parent().attr('for');
    let radio=$(`#${label}`);
    radio.parent().find('.iCheck-helper').click();
}
function getTextOfRank(qTag, rank) {
    rank = rank || 1;
    let selectedButton=$(`#${qTag}_question button`).toArray().filter(function(itm){
        return $(itm).text()==rank;
    })?.[0];
    return selectedButton ? $(selectedButton).closest('tr').find('.answerText').text() : '';
}