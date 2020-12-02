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

// Randomly select answer code
function SelectFirstRadio(qTag,allowAnswerChange){
    //The HTML of the question is different if it is using same-page display logic
    //This should be true if the answers' display logic is based on previous questions on the same page
    var answerSelected=false;
    var visibleRowsIdentifier='#' + qTag + '_question .question table tr:not("row-disabled")';
    //See if one of the visible answers is already selected -- don't change if one has already been selected
    answerSelected=$(visibleRowsIdentifier + ' .checked').length>0 && !allowAnswerChange;
    $(visibleRowsIdentifier).each(function(){
        if($(this).css('display')!='none' && !answerSelected){
            $(this).find('.iCheck-helper').click();
            answerSelected=true;
            return;
        }
    });
}
SelectFirstRadio('Individual_Role',true);