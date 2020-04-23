function GroupRadioQuestions(qClass,validationQuestionTag){
    $('.' + qClass + ' .iCheck-helper').click(function(){
        if(validationQuestionTag){$('#' + validationQuestionTag + '_question').find('.iCheck-helper')[0].click();;}
        var questionChanged=$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().attr('id');
        $('.' + qClass + ':not(#' + questionChanged + ') input').prop('checked',false);
        $('.' + qClass + ':not(#' + questionChanged + ') input').parent().removeClass('checked');
    });
}