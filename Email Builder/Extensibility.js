var templateHTML;
var templateURL='https://raw.githubusercontent.com/albinobean/IM-Extensibility/master/Email%20Builder/Template.html'
var colorValidation=/(inherit|#([\da-f]{3}){1,2}|rgba?\((\d{1,3},\W?){2}\d{1,3}(,\W?([\d\.]){1,4})?\)|hsla?\([0123]\d{0,2},\W?(0|(100|\d{1,2})%),\W?(0|(100|\d{1,2})%)()(,\W?([\d\.]){1,4})?\))/i
$(document).ready(function(){

    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    document.title=pageNames['page' + curPage];
    moveHelpTextAfter();
    
    switch(curPage) {
        case 1:
            
            break;       
        case 2:
            //    Create preview frame
            $('#template').append($('<div id="emailPreview"></div>'));
            retrieveTemplateHTML();     
            addElementToggleListeners();
            addToggleListeners();
            addColorChangeListeners();
            showCorrectNumberOfButtons();
            showCorrectNumberOfAnchors();
            refreshPreview();
            break;
        }
});
function addButtonConfigListeners(){
    for(var i=0;i<12;i++){
        $('#button' + i + 'Config_row input[title="Button Text"]').change(function(){

        });
    }
}
function addColorChangeListeners(){
    var elementId;
    $('.alleg-backgroundColorSelector').each(function(){
        var colorCodeBox=$('#' + $(this).attr('id').replace('_question',''));
        var colorCode=colorCodeBox.val();
        var backgroundElementIds={
            banner:'bannerContainer',
            contentBanner:'contentBannerContainer',
            emailBackgroundColor:'emailBody'
        }
        var backgroundClasses={
            buttonBackgroundColor:'',
            buttonContainerBackgroundColor:''
        }
        if($(this).attr('id')!=''){
            var elementId=backgroundElementIds[$(this).attr('id').replace('BackgroundColor_question','')];
            var className=backgroundClasses[$(this).attr('id').replace('BackgroundColor_question','')];
            if(elementId!=''){
                colorCodeBox.change(function(){
                    $('#' + elementId).css('background-color',colorCodeBox.val());
                })
            }
            if(className!=''){
                colorCodeBox.change(function(){
                    $('.' + className).css('background-color',colorCodeBox.val());
                })
            }
        } 
        
        
    });
    $('.alleg-fontColorSelector').each(function(){
        var colorCodeBox=$('#' + $(this).attr('id').replace('_question',''));
        var colorCode=colorCodeBox.val();
        var fontElementIds={

        }
        var fontClasses={

        }
        if($(this).attr('id')!=''){
            var elementId=fontElementIds[$(this).attr('id').replace('FontColor_question','')];
            var className=fontClasses[$(this).attr('id').replace('FontColor_question','')];
            if(elementId!=''){
                colorCodeBox.change(function(){
                    $('#' + elementId).css('background-color',colorCodeBox.val());
                })
            }
            if(className!=''){
                colorCodeBox.change(function(){
                    $('.' + className).css('background-color',colorCodeBox.val());
                })
            }
        } 
    });
    
}
function showCorrectNumberOfAnchors(){
    $('input[name="Q0000009C.Q0000009D"]').change(function(){
        // Hide all anchors to start
        $('.scaleAnchor').hide();
        switch($(this).attr('value')){
            case 3: //Show all 5 anchors
                $('.scaleAnchor').show();
                break;
            case 2: //Show 3 anchors
                $('#scaleAnchor3').show();
                // No break so it continues on to show left and right as well
            case 1:
                $('#leftScaleAnchor').show();
                $('#rightScaleAnchor').show();
        }
        for(var i=2;i<11;i++){
            if(i<buttonsToShow){
                $('#emailPreview #Button' + i).show();
                $('#emailPreview #Star' + i).show();
            } else {
                $('#emailPreview #Button' + i).hide();
                $('#emailPreview #Star' + i).hide();
            }
        }
        
    });
}
function showCorrectNumberOfButtons(){
    $('input[name="Q0000003E.Q0000003F"]').change(function(){
        var buttonsToShow=parseInt($(this).attr('value'))+2;
        console.log(buttonsToShow);
        for(var i=2;i<11;i++){
            if(i<buttonsToShow){
                $('#emailPreview #Button' + i).show();
                $('#emailPreview #Star' + i).show();
            } else {
                $('#emailPreview #Button' + i).hide();
                $('#emailPreview #Star' + i).hide();
            }
        }
        
    });
}
function showCorrectNumberOfPrepopColumns(colsToShow){
    for(var i=3;i<6;i++){
        setTableColumnVisibility('button1Config',i,i<=colsToShow+1)
    }
}
function setTableColumnVisibility(questionTagInTable,colNumber,visible){
    var tbl=$('#' + questionTagInTable + '_row').parent();
    // console.log('TABLE: ' + tbl.children().length);
    tbl.children().each(function(){
        var rw=$(this);
        // console.log('ROW: ' + rw.children().length)
        for(var i=0;i<rw.children().length;i++){
            if(i==colNumber){
                // console.log(i);
                if(visible){
                    $(rw.children()[i]).show();
                } else {
                    $(rw.children()[i]).hide();
                }
            }
        }
    });
}
showCorrectNumberOfPrepopColumns();
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
    if($('storedHTML').val()){
        var curPage = parseInt($('input[name=currentpage]').val(), 10);
        $('#emailPreview').html($('storedHTML').val());
        refreshPreview();
        if(curPage>1){initializeHTMLEditors('editableHTML');} // Don't enable HTML editors on page 1
    } else {
        $.ajax(templateURL, {
            success: function(response) {
                var curPage = parseInt($('input[name=currentpage]').val(), 10);
                templateHTML=response;
                $('#emailPreview').html(templateHTML);
                refreshPreview();
                if(curPage>1){initializeHTMLEditors('editableHTML');} // Don't enable HTML editors on page 1
                
            }
          }); 
    }
  
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
        [{ 'align': [] }],
        
        ['clean'],                                         // remove formatting button
        ['link','source']
    ]
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
            modules:{
                toolbar:toolbarOptions
            },
            theme:'snow'
        }));
    });
}
function refreshPreview(){
    $('.alleg-backgroundColorSelector input[type=text]').change();
    $('.alleg-fontColorSelector input[type=text]').change();
    $('input[title="Button Text"]').change();
    $('input[name="Q0000003E.Q0000003F"]').change(); //Refresh the number of answer options to show
    $('input[name="Q0000009C.Q0000009D"]').change(); //Refresh the number of anchors to show    
}
function populateHTMLQuestions(){
    var tempHTML=$('#emailPreview').html();
    tempHTML=replaceMSOPlaceholders(tempHTML);
    $('#preheaderBlock').html($('#preheader').val());
    $('#emailPreviewHTML').val(tempHTML);
    populateEmailSource(tempHTML);
}
function populateEmailSource(tempHTML){
    var URLBase=''
    var reg=/\[SURVEY URL\]/gi;
    $('#emailSource').val(tempHTML.replace(reg,URLBase))
}
function replaceMSOPlaceholders(tempHTML){
    var placeholders={};
    // Placeholder text is in brackets in the HTML set to equal the tag of the question textbox that holds the replacement value
    placeholders['ButtonColor']='buttonBackgroundColor'; //This finds [ButtonColor] in the HTML and replaces it with the value of the buttonBackgroundColor question
    placeholders['ButtonFontColor']='';
    
    
    for(var placeholder in placeholders){
        var reg=new RegExp('\\[' + placeholder + '\\]','gi')
        tempHTML=tempHTML.replace(reg,$('#' + placeholders[placeholder]).val())
    }
    for(var i=0;i<11;i++){
        var reg=new RegExp('\\[ButtonText' + i + '\\]','gi')
        tempHTML=tempHTML.replace(reg,$('#Button' + i).text().trim());
    }
    return tempHTML;
}