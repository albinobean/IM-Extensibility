/*
    - To use, create call the function from the appropriate page and include the maximum number of answers allowed
 */

//EXAMPLE IMPLEMENTATION
$(document).ready(function(){
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    switch (curPage) {
        case 1:
            AddCheckboxAnswerLimit('myCheckboxQuestionTag',4);
            break;
        case 2:
            AddRankAnswerLimit('myRankQuestionTag',3);
            break;
    }
});

//Copy the following into your code OUTSIDE of any other functions

//To format the checkboxes once disabled, use input[disabled]+ins

//Adds the callback so that it is reevaluated each time an answer is checked/unchecked
function AddRankAnswerLimit(qTag,mx){
    LimitRanks(qTag,mx);
    //Add callback to labels
    $('#' + qTag + '_question .question label').click(function(){
        LimitRanks(qTag,mx);
    });
    //Add callback to boxes
    $('#' + qTag + '_question table table td ins').click(function(){
        LimitAnswers(qTag,mx);
    });
}
//Adds the callback so that it is reevaluated each time an answer is checked/unchecked
function AddCheckboxAnswerLimit(qTag, mx){
    LimitAnswers(qTag,mx);
    //Add callback to labels
    $('#' + qTag + '_question table table td label').click(function(){
        LimitAnswers(qTag,mx);
    });
    //Add callback to checkboxes
    $('#' + qTag + '_question table table td ins').click(function(){
        LimitAnswers(qTag,mx);
    });
}

function LimitAnswers(qTag,mx){

    var boxes=$('#' + qTag + '_question input:checkbox');
    if($('#' + qTag + '_question input:checkbox:checked').length>=mx){
        for(i=0;i<boxes.length;i++){
            var bx=$('#' + qTag + '_question input:checkbox')[i];
            if(bx.checked){
                bx.disabled=false;
            } else {
                bx.disabled=true;
            }
        }
    } else {
        for(i=0;i<boxes.length;i++){
            $('#' + qTag + '_question input:checkbox')[i].disabled=false;
        }
    }
}

function LimitRanks(qTag,mx){
    if($('#' + qTag + '_question .question input[value!=""]').length>=mx){
        $('#' + qTag + '_question .question input[value=""] + button').attr('disabled',true);
    } else {
        $('#' + qTag + '_question .question input + button').attr('disabled',false);
    }
}


