var templateHTML;
var templateURL='https://raw.githubusercontent.com/albinobean/IM-Extensibility/master/Email%20Builder/Template.html'
$(document).ready(function(){
//    Create preview frame
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    $('#template').append($('<div id="emailPreview"></div>'));
    retrieveTemplateHTML(); 
    document.title=pageNames['page' + curPage];
    moveHelpTextAfter();
    
    switch(curPage) {
        case 1:
            addElementToggleListeners();
            break;       
        case 2:
            addToggleListeners();
            $('.saveButton').unbind();
            $('.saveButton').click(function(){
                refreshPreview();
                // saveButtonClicked();
            });
            break;
        }
});
function addToggleListeners(){
    addToggleListener('pageShadow',togglePageShadow);
    
}
function toggleVisibility(inputElement,elementClass){
    if($(inputElement).prop('checked')=='checked'){
        $(elementClass).show();
    } else {
        $(elementClass).hide();
    }
}
function addToggleVisibilityListener(qTag,answerText,elementClass){
    
}
function addTextBoxChangeListener(qTag,cssAttr,elementClass){

}
function textBoxChanged(qTag,cssAttr,elementClass){

}
function addElementToggleListeners(){
    var elementToggles=['bannerContainer','contentBannerContainer','heroImageContainer']
    for(var i=0;i<elementToggles.length;i++){
        addElementToggleListener('Q00000004_Q00000005_A' + (i+1),elementToggles[i])
    }
}
function addElementToggleListener(answerTag,elementTag){
    $('#' + answerTag).click(function(){
        if($('#' + answerTag).is(':checked')){
            $('#' + elementTag).show();
        } else {
            $('#' + elementTag).hide();
        }
    });
}
function addToggleListener(tag,callback){
    $('#' + tag).change(callback);
}
function togglePageShadow(){
    
    if($('#pageShadow').is(':checked')){
        $('#emailBody').css('box-shadow','0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)');
    } else {
        $('#emailBody').css('box-shadow','');
    }
}
function retrieveTemplateHTML(){
  $.ajax(templateURL, {
    success: function(response) {
        var curPage = parseInt($('input[name=currentpage]').val(), 10);
        templateHTML=response;
        $('#emailPreview').html(templateHTML);
        if(curPage>1){initializeHTMLEditors('editableHTML');} // Don't enable HTML editors on page 1
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
    var toolbarOptions=[
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons            
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        
        [{ 'color': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        
        ['clean'],                                         // remove formatting button
        ['link','source']
    ]
    $('.' + cls).each(function(){
        var myID=$(this).attr('id');
        if(cls.substring(1,6)=='alleg-'){
            console.log('ALLEG: ' + cls);
            var quillContainerId=myID;
        } else {
            console.log('OTHER: ' + cls);
            var quillContainerId=myID + 'quillContainer';
            var quillContainer='<div class="quillContainer" id="' + quillContainerId + '">' + $(this).html() + '</div>';
            $(this).html(quillContainer);   
        }
        quills.push(new Quill('#' + quillContainerId,{
            modules:{
                toolbar:toolbarOptions
            },
            theme:'snow'
        }));
    });
}
function refreshPreview(){
    $('')
}
