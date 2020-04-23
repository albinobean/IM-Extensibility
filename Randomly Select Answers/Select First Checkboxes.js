function SelectFirstCheckboxes(qTag,NumberToSelect){
    unselectHiddenCheckboxes(qTag);
    if($('#' + qTag + '_question .question table tr .checked').length>NumberToSelect){
        UnselectAllCheckboxes(qTag);
    }
    if($('#' + qTag + '_question .question table tr .checked').length<NumberToSelect){
        $('#' + qTag + '_question .question table tr:not(.row-disabled)').each(function () {
            if($(this).css('display')!='none' && $(this).find('.checked').length==0){
                if (NumberToSelect > 0) {
                    $(this).find('.iCheck-helper').click();
                    NumberToSelect--;
                } else {
                    return;
                }
            }

        });
    }
}
function unselectAllCheckboxes(qTag){
    $('#' + qTag + '_question .question table tr .checked .iCheck-helper').click();
    unselectHiddenCheckboxes(qTag);
}
function unselectHiddenCheckboxes(qTag) {
    $('#' + qTag + '_question .question table tr:hidden .checked').each(function(){
        $(this).show();
        $(this).find('.iCheck-helper').click();
        $(this).hide();
    });
}
