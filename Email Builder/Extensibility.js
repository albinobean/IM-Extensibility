var templateHTML;
var templateURL='https://raw.githubusercontent.com/albinobean/IM-Extensibility/master/Email%20Builder/Template.html'
$(document).ready(function(){
//    Create preview frame
    $('#template').append($('<div id="emailPreview"></div>'));
    retrieveTemplateHTML();
    moveHelpTextAfter();
    addPreviewOnlyToggle();
    addToggleListeners();
    $('.saveButton').unbind();
    $('.saveButton').click(function(){
        refreshPreview();
        // saveButtonClicked();
    });
    initializeHTMLEditors('alleg-HTMLEditor');
    initializeHTMLEditors('editableHTML');
});
function addToggleListeners(){
    // $('#pageShadow').change(function(){
    //     alert('clicked')
    //     if($('#pageShadow').attr('checked')){
    //         $('#emailBody').css('box-shadow','0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)');
    //     } else {
    //         $('#emailBody').css('box-shadow','');
    //     }
    // });
    addToggleListener('pageShadow',togglePageShadow);
}
function addToggleListener(tag,callback){
    $('#' + tag).change(callback);
}
function togglePageShadow(val){
    if(val){
        $('#emailBody').css('box-shadow','0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)');
    } else {
        $('#emailBody').css('box-shadow','');
    }
}
function retrieveTemplateHTML(){
  $.ajax(templateURL, {
    success: function(response) {
        templateHTML=response;
        $('#emailPreview').html(templateHTML);
    }
  }); 
};
function moveHelpTextAfter(){
    $('.help-text-link').each(function(){
        $(this).closest('.questionText').append("<p class='questionDescription'>" + $(this).children('img').attr('aria-label') + "</p>")
    });
}
function addPreviewOnlyToggle(){
    if($('#TestModeBanner').length>0 && $('.alleg-previewOnly').length>0){
        var toggle=$('<span id="previewOnlyToggle" style="margin-right:5px;">Show Preview-only fields</span><label class="switch"><input type="checkbox"><span class="slider round"></span></label>')
        toggle.click(function(){
            sessionStorage.setItem('showPreviewOnlyQuestions',$(this).children('input:checked').length)
            if($(this).children('input:checked').length==1){$('.alleg-previewOnly').show();} else {$('.alleg-previewOnly').hide();}
        });
        $('#TestModeBanner').children('tbody').children('tr').children('td').prepend(toggle);
        if(sessionStorage.getItem('showPreviewOnlyQuestions')==1){toggle.click();}
    }
}
function initializeHTMLEditors(cls){
    var quills=[];
    $('.' + cls).each(function(){
        var myID=$(this).attr('id');
        if(cls.substring(1,6)=='alleg-'){
            var quillContainerId=myID;
        } else {
            var quillContainerId=myID + 'quillContainer';
            var quillContainer='<div class="quillContainer" id="' + quillContainerId + '">' + $(this).html() + '</div>';
            $(this).html(quillContainer);   
        }
        quills.push(new Quill('#' + quillContainerId,{
            theme:'snow'
        }));
    });
}
function refreshPreview(){
    $('')
}
