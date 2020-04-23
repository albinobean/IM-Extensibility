$(document).ready(function(){
    AddPlaceholderTextToPleaseSpecify('Please specify');
    ConvertHelpTextToPleaseSpecifyPlaceholder();
    ConvertHelpTextToPlaceholder();
});
function ConvertHelpTextToPleaseSpecifyPlaceholder(qid){
    $('#' + qid + '_question .help-text-link').each(function(){
        var quest=$('#' + qid + '_question');
        quest.find('.help-text-link').hide();
        var placeholder=$(this).children('img').attr('aria-label');
        quest.find('.question input').attr('placeholder',placeholder);
    });
}

function AddPlaceholderTextToPleaseSpecify(placeholder){
    $('.question input').attr('placeholder',placeholder)
}

function AddPlaceholderTextToQuestion(qid,placeholder){
    $('#' + qid +'_question input, #' + qid +'_question textarea').attr('placeholder',placeholder)
}

function ConvertHelpTextToPlaceholder(qid){
    var quest=$('#' + qid + '_question');
    quest.find('.help-text-link').hide();
    var placeholder=quest.find('.help-text-link').children('img').attr('aria-label');
    quest.children('textarea').attr('placeholder',placeholder);
    quest.children('input').attr('placeholder',placeholder);
}