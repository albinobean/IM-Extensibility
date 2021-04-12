//Additional CSS is also required for this to fully function
//Call this function from your document.ready function: advancedPreview('alleg-hide');
function advancedPreview(hiddenElementClass){
    var classOfHiddenElements='.' + hiddenElementClass;
    if($('#TestModeBanner').length>0 && $(classOfHiddenElements).length>0){
        var toggle=$('<span id="previewOnlyToggle" style="margin-right:5px;">Show hidden fields</span><label class="switch"><input type="checkbox"><span class="slider round"></span></label>')
        toggle.click(function(){
            localStorage.setItem('showPreviewOnlyQuestions',$(this).children('input:checked').length)
            if($(this).children('input:checked').length==1){$(classOfHiddenElements).show();} else {$(classOfHiddenElements).hide();}
        });
        $('#TestModeBanner').children('tbody').children('tr').children('td').prepend(toggle);
        if(localStorage.getItem('showPreviewOnlyQuestions')==1){
            toggle.children('input').prop('checked',true);
            $(classOfHiddenElements).show();
        }
    }
}