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

function limitRowAnswers(rowTag,mx){
    var boxes=$('#' + rowTag + '_row input:checkbox');
    if($('#' + rowTag + '_row input:checkbox:checked').length>=mx){
        for(i=0;i<boxes.length;i++){
            var bx=$('#' + rowTag + '_row input:checkbox')[i];
            if(bx.checked){
                bx.disabled=false;
            } else {
                bx.disabled=true;
            }
        }
    } else {
        for(i=0;i<boxes.length;i++){
            $('#' + rowTag + '_row input:checkbox')[i].disabled=false;
        }
    }
}
function addTableCheckboxAnswerLimit(rowTag,mx){
    limitRowAnswers(rowTag,mx);
    $('#' + rowTag + '_row td label').click(function(){
        limitRowAnswers(rowTag,mx);
    });
    $('#' + rowTag + '_row td ins').click(function(){
        limitRowAnswers(rowTag,mx);
    });
    $('#' + rowTag + '_row td input').click(function(){
        limitRowAnswers(rowTag,mx);
    });
}
//Adds the callback so that it is reevaluated each time an answer is checked/unchecked
function AddRankAnswerLimit(qTag,mx){
    LimitRanks(qTag,mx);
    //Add callback to labels
    $('#' + qTag + '_question .question label').click(function(){
        setTimeout(LimitRanks(qTag,mx),1000);
    });
    // Add callback to boxes
    $('#' + qTag + '_question .ControlCell button').click(function(){
        setTimeout(LimitRanks(qTag,mx),1000);
    });

}
//Adds the callback so that it is reevaluated each time an answer is checked/unchecked
function AddCheckboxAnswerLimit(qTag, mx){
    LimitAnswers(qTag,mx);
    //Add callback to labels
    $('#' + qTag + '_question table table td label').click(function(){
        setTimeout(LimitAnswers(qTag,mx),1000);
    });
    //Add callback to checkboxes
    $('#' + qTag + '_question table table td ins').click(function(){
        setTimeout(LimitAnswers(qTag,mx),1000)
    });

}

function LimitRanks(qTag,mx){
    if($('#' + qTag + '_question .question input[value!=""]').length>=mx){
        $('#' + qTag + '_question .question input[value=""] + button').attr('disabled',true);
    } else {
        $('#' + qTag + '_question .question input + button').attr('disabled',false);
    }
}