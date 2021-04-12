// function SelectFirstRadio(qTag,SamePageDisplayLogic){
//     //The HTML of the question is different if it is using same-page display logic
//     //This should be true if the answers' display logic is based on previous questions on the same page
//     var answerSelected=false;

//     if(SamePageDisplayLogic){
//         var visibleRowsIdentifier='#' + qTag + '_question .question table .row-enabled';
//     } else {
//         var visibleRowsIdentifier='#' + qTag + '_question .question table tr';
//     }
//     //See if one of the visible answers is already selected -- don't change if one has already been selected
//     answerSelected=$(visibleRowsIdentifier + ' .checked').length>0;
//     $(visibleRowsIdentifier).each(function(){
//         if($(this).css('display')!='none' && !answerSelected && !$(this).hasClass('row-disabled')){
//             $(this).find('.iCheck-helper').click();
//             answerSelected=true;
//             return;
//         }
//     });
// }

// Select the first visible answer.  It returns the text of answer.
function SelectFirstRadio(qTag,allowAnswerChange){
    let answerText='';
    let answerSelected=false;
    let visibleRowsIdentifier='#' + qTag + '_question .question table tr:not("row-disabled")';
    //See if one of the visible answers is already selected -- don't change if one has already been selected
    answerSelected=$(visibleRowsIdentifier + ' .checked').length>0 && !allowAnswerChange;
    let answerId=$(`#${qTag}_question .checked input[type="radio"]`).attr('id');
    if(answerSelected) return $(`label[for="${answerId}"] .answerText`).text();
    $(visibleRowsIdentifier).each(function(){
        if($(this).css('display')!='none' && !answerSelected){
            $(this).find('.iCheck-helper').click();
            $(this).find('input[type="radio"]').click();
            answerText=$(this).find('.answerText').html();
            // console.log(answerText);
            answerSelected=true;
        }
    });
    return answerText;
}
SelectFirstRadio('Purchased4-6Months',false);