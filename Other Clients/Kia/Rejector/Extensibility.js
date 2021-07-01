
function semiExclusiveAnswer(answerIds,exclusiveAnswerId){
    const cls='inactiveAnswer';
    const exclusiveAnswerRow=$('#' + exclusiveAnswerId).closest('tr');
    //Set the initial state when page loads
    addClassIfOneSelected(answerIds,cls,exclusiveAnswerRow);
    for(var i=0;i<answerIds.length;i++){
        var checkbox=$('#' + answerIds[i]);
        var answerRow=checkbox.closest('tr');
        var answerText=answerRow.find('.answerText');
        //Update the state when they click the checkbox
        checkbox.click(function(){
            addClassIfOneSelected(answerIds,cls,exclusiveAnswerRow);
        });
        //Update the state when they click the label
        answerText.click(function(){
            addClassIfOneSelected(answerIds,cls,exclusiveAnswerRow);
        });
    }
}
function addClassIfOneSelected(answerIds,cls,elementForClass){
    var atLeastOneSelected=false;
    for(var i=0;i<answerIds.length;i++){
        let checkbox=$('#' + answerIds[i]);
        if(checkbox.attr('checked')){
            atLeastOneSelected=true;
            break;
        }
    }
    console.log('One Selected: ' + atLeastOneSelected);
    setRowClass(elementForClass,cls,atLeastOneSelected);
}
function setRowClass(tableRow,cls,removeTheClass){
    if(removeTheClass){
        tableRow.removeClass(cls);
        tableRow.show();
    } else {
        tableRow.addClass(cls);
        tableRow.hide();
    }
}
semiExclusiveAnswer(['Q000000FF_Q00000100_A4','Q000000FF_Q00000100_A3'],'Q000000FF_Q00000100_A5');