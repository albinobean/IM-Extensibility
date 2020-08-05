var templateHTML;
var templateURL='https://raw.githubusercontent.com/albinobean/IM-Extensibility/master/Email%20Builder/Template.html'
var colorValidation=/(inherit|#([\da-f]{3}){1,2}|rgba?\((\d{1,3},\W?){2}\d{1,3}(,\W?([\d\.]){1,4})?\)|hsla?\([0123]\d{0,2},\W?(0|(100|\d{1,2})%),\W?(0|(100|\d{1,2})%)()(,\W?([\d\.]){1,4})?\))/i
var elementToggles={
    Q00000004_Q00000005_A:['bannerContainer','contentBannerContainer','heroImageContainer','contentStartSurveyButton','Quickstart','emailClosingText','closingStartSurveyButton','signatureSection','contentFooter','contentFooterContainer','footerContainer','footerBannerContainer'] //Main
}
var imageURLMap={
    signatoryImageURL:'signatoryImage',
    heroImageURL:'heroImage',
    bannerLeftLogoURL:'bannerLeftLogo',
    bannerRightLogoURL:'bannerRightLogo',
    contentLeftLogoURL:'contentLeftLogo',
    contentRightLogoURL:'contentRightLogo',
    contentFooterLeftLogoURL:'contentFooterLeftLogo',
    contentFooterRightLogoURL:'contentFooterRightLogo',
    footerLeftLogoURL:'footerLeftLogo',
    footerRightLogoURL:'footerRightLogo'
}
$(document).ready(function(){

    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    document.title=pageNames['page' + curPage];
    moveHelpTextAfter();
    addPreviewOnlyToggle();
    
    
            //    Create preview frame
        $('#template').append($('<div id="emailPreview"></div>'));
        retrieveTemplateHTML();     
        addElementToggleListeners();
        addEmailTypeChangeListener();
        addPreviousHTMLListener();
        addToggleListeners();
        addImageURLChangeListeners();
        addColorChangeListeners();
        showCorrectNumberOfButtons();
        showCorrectNumberOfAnchors();
        showCorrectNumberOfPrepopColumns();
        addFontChangeListener();
        setPrepopTableHeaders();
        addPageWidthListener();
        applyHoverColors();
        addImageWidthChangeListeners();

        refreshPreview();
        $('.nextButton').unbind();
        $('.nextButton').click(function(){
            populateHTMLQuestions();
            nextButtonClicked();
        });
});
function addImageWidthChangeListeners(){
    $('.alleg-imageWidth .questionText').append("<p class='questionDescription'>This is the default width.  Height is automatically relative to the height.</p>")
    $('.alleg-imageMaxWidth .questionText').append("<p class='questionDescription'>This allows the image to resize dynamically for smaller screens.</p>")
    $('.alleg-imageWidth input[type="text"]').change(function(){
        var elementName=$(this).attr('id').replace(/Width$/,'');
        $('#' + elementName).attr('width',$(this).val());
        var height=$('#' + elementName).height()/$('#' + elementName).width()*$(this).val(); //Calculates the height for Outlook even if the current view is applying a maxHeight
        $('#' + elementName).attr('height',height);
    });
    $('.alleg-imageMaxWidth input[type="text"]').change(function(){
        if(/^1?\d{0,2}$/.test($(this).val())) $(this).val($(this).val() + '%');
        var elementName=$(this).attr('id').replace(/MaxWidth$/,'');
        //Max width is relative to the parent, but the user is setting the max width against the full page, not just the table cell

        var pageWidth
        if($('#emailContainer').css('max-width')){
            pageWidth=parseInt($('#emailContainer').css('max-width').replace(/px/,''));
        } else {
            pageWidth=$('#pageWidth').val();
        }
        var parent=$('#' + elementName).parent();
        if(parent.length>0){
            if(!parent.css('width')) parent.css('width','10px');
            var parentWidth=parseInt(parent.css('width').replace(/px/,''));
            $('#' + elementName).css('max-width',parseInt($(this).val())*pageWidth/parentWidth + '%');
        }
        
    });
}
function addImageURLChangeListeners(){
    for(var q in imageURLMap){
        $('#' + q + '_question input[type="text"]').change(function(){
            $('#' + imageURLMap[$(this).attr('id')]).attr('src',$(this).val());
        });
    }
    // $('#signatoryImageURL').change(function(){
    //     $('#signatoryImage').attr('src',$(this).val());
    // });
    // $('#heroImageURL').change(function(){
    //     $('#heroImage').attr('src',$(this).val());
    // });
}
function addPageWidthListener(){
    $('#pageWidth').change(function(){
        var width=$(this).val();
        $('.email-container').css('max-width',width + 'px');
        $('#heroImage').width(width);
        $('#heroImage').css('max-width',width + 'px');
        $('.alleg-imageMaxWidth input[type="text"]').change();
    });
}
function setPrepopTableHeaders(){
    for(var i=1;i<4;i++){
        $('#Prepop' + i + '_row input').change(function(){
            var prepopNum=parseInt($(this).closest('tr').attr('id').substring(6,7));
            // console.log(prepopNum);
            // console.log('CURR: ' + $('#Q00000049_S' + i + ' .scaleText').html());
            $('#Q00000049_S' + prepopNum + ' .scaleText').html($(this).val());
        });
    }
}
setPrepopTableHeaders();
function addEmailTypeChangeListener(){
    $('#emailType_question input[type="radio"]').change(function(){
        if($(this).val()==0){
            // Survey Email
            $('#baseURL').val($('#baseURL').val().replace(/CASE LINK/gi,'SURVEY URL'));
            $('emailBody').removeClass('caseTemplate');
            $('emailBody').addClass('surveyTemplate');
        } else {
            // Case Email
            $('#baseURL').val($('#baseURL').val().replace(/SURVEY URL/gi,'CASE LINK'));
            $('emailBody').removeClass('surveyTemplate');
            $('emailBody').addClass('caseTemplate');
        }        
    });
}
function addPreviousHTMLListener(){
    $('input[name="Q00003D1B.Q00003D1C"]').change(function(){
        if($(this).attr('value')==0){
            $("#storedHTML_question").show();
        } else {
            $("#storedHTML_question").hide();
        }
    });
}
function addFontChangeListener(){
    var fontFamily;
    $('input[name="Q000017BE.Q000017BF"]').change(function(){

        if($('label[for="' + $(this).attr('id') + '"]').text()=='Other'){
            if($('input[name="Q000017BE.Q000017BF.other"]').val()==''){
                fontFamily='Arial, Helvetica, sans-serif';
            } else {
                fontFamily=$('input[name="Q000017BE.Q000017BF.other"]').val();
            }
        } else {
            fontFamily=$('label[for="' + $(this).attr('id') + '"]').text();
        }
        // console.log(fontFamily);
        $('#emailPreview').html($('#emailPreview').html().replace(/font-family[^;]*/gi,'font-family: ' +fontFamily.replace(/\"/g,"'")));
    });
    $('input[name="Q000017BE.Q000017BF.other"]').change(function(){
        $('input[name="Q000017BE.Q000017BF"]').change();
    });
}
addFontChangeListener();
function applyHoverColors(){
    $('#buttonBackgroundColorOnHover').change(function(){
        $('#emailPreview').html().replace(/(:hover[^\{]*\{[^\}]*background:\s?)#?[^;!\s]*/gim,"$1" + $('#buttonBackgroundColorOnHover').val());
    });

}

function addColorChangeListeners(){
    var elementId;
    $('.alleg-backgroundColorSelector').each(function(){
        var colorCodeBox=$('#' + $(this).attr('id').replace('_question',''));
        var colorCode=colorCodeBox.val();
        var backgroundElementIds={
            banner:'bannerContainer',
            contentBanner:'contentBannerContainer',
            emailBackgroundColor:'emailBody',
            buttonContainerBackgroundColor:'QSButtonTable'
        }
        var backgroundClasses={
            buttonBackgroundColor:'button-td',
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
    });
}
function showCorrectNumberOfButtons(){
    $('input[name="Q0000003E.Q0000003F"]').change(function(){
        var buttonsToShow=parseInt($(this).attr('value'))+2;
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
function showCorrectNumberOfPrepopColumns(){
    $('input[name="Q0000007C.Q0000007D"]').change(function(){
        var colsToShow=$(this).val();
        for(var i=3;i<=4;i++){
            setTableColumnVisibility('button1Config',i,i-1<=colsToShow)
        }
    });
}
function setTableColumnVisibility(questionTagInTable,colNumber,visible){
    var tbl=$('#' + questionTagInTable + '_row').parent();
    tbl.children().each(function(){
        var rw=$(this);
        var i=1
        rw.children().each(function(){
            if(colNumber==i){

                if(visible){
                    $(this).show();
                } else {
                    $(this).hide();
                }
            }
            i++;
        });
    });
}
showCorrectNumberOfPrepopColumns();
function addToggleListeners(){
    // addToggleListener('pageShadow',togglePageShadow);
    $('#pageShadow').change(function(){
        if($(this).is(':checked')){
            $('#emailPage').css('box-shadow','0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)');
        } else {
            $('#emailPage').css('box-shadow','');
        }
    });
    $('#signatoryImageToggle').change(function(){
        if($(this).is(':checked')){
            $('#signatureImageContainer').show();
        } else {
            $('#signatureImageContainer').hide();
        }
    });
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
    for(var q in elementToggles){
        var elements=elementToggles[q];
        for(var i=0;i<elements.length;i++){
            addElementToggleListener(q + (i+1),elements[i])
        }
    }
    
    // Banner elements
    $('#bannerElements_question input[type="checkbox"]').each(function(){
        var elements=['bannerLeftLogoContainer','bannerText','bannerRightLogoContainer'];
        addElementToggleListener($(this).attr('id'),elements[$(this).attr('value')]);
    });
    // Content Banner Elements
    
    $('#contentBannerElements_question input[type="checkbox"]').each(function(){
        var elements=['contentLeftLogoContainer','contentBannerText','contentRightLogoContainer'];
        addElementToggleListener($(this).attr('id'),elements[$(this).attr('value')]);
    });
    // Content Footer Elements
    $('#contentFooterElements_question input[type="checkbox"]').each(function(){
        var elements=['contentFooterLeftLogoContainer','contentFooterBannerText','contentFooterRightLogoContainer'];
        addElementToggleListener($(this).attr('id'),elements[$(this).attr('value')]);
    });
    // Footer Banner Elements
    $('#footerBannerElements_question input[type="checkbox"]').each(function(){
        var elements=['footerLeftLogoContainer','footerBannerText','footerRightLogoContainer'];
        addElementToggleListener($(this).attr('id'),elements[$(this).attr('value')]);
    });

}
function addElementToggleListener(answerTag,elementTag){
    $('#' + answerTag).change(function(){
        // console.log(answerTag + ' clicked');
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
    
    
}
function retrieveTemplateHTML(){
    if($('storedHTML').val()){
        $('#emailPreview').html($('storedHTML').val());
        refreshPreview();
        initializeHTMLEditors('editableHTML');
    } else {
        $.ajax(templateURL, {
            success: function(response) {
                templateHTML=response;
                $('#emailPreview').html(templateHTML);
                refreshPreview();
                initializeHTMLEditors('editableHTML');
                
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
    for(var q in elementToggles){
        var elements=elementToggles[q];
        for(var i=0;i<elements.length;i++){
            if($('#' + q + (i+1)).is(':checked')){
                $('#' + elements[i]).show();
            }  else {
                $('#' + elements[i]).hide();
            }
        }
    }
    
    $('.alleg-backgroundColorSelector input[type=text]').change();
    $('.alleg-fontColorSelector input[type=text]').change();
    $('.alleg-imageURL input[type=text]').change();
    $('input[name="Q0000007C.Q0000007D"]').change(); //Show the correct number of prepop table columns
    $('input[name="Q0000003E.Q0000003F"]').change(); //Refresh the number of answer options to show
    $('input[name="Q0000009C.Q0000009D"]').change(); //Refresh the number of anchors to show    
    $('input[name="Q000017BE.Q000017BF"]').change(); //Refresh the font family
    $('input[name="Q00003D1B.Q00003D1C"]').change(); //Set visibility of storedHTML question
    $('#contentBannerElements_question input[type="checkbox"]').change();
    $('#bannerElements_question input[type="checkbox"]').change();
    $('#contentFooterElements_question input[type="checkbox"]').change();
    $('#footerBannerElements_question input[type="checkbox"]').change();
    $('.alleg-imageWidth input[type="text"]').change();
    $('#signatoryImageToggle').change();
    // $('.alleg-imageMaxWidth input[type="text"]').change(); //This is called in $('#pageWidth').change();
    $('#pageWidth').change();

}
function addPreviewOnlyToggle(){
    if($('#TestModeBanner').length>0 && $('.alleg-previewOnly').length>0){
        var toggle=$('<span id="previewOnlyToggle" style="margin-right:5px;">Show Preview-only fields</span><label class="switch"><input type="checkbox"><span class="slider round"></span></label>')
        toggle.click(function(){
            localStorage.setItem('showPreviewOnlyQuestions',$(this).children('input:checked').length)
            if($(this).children('input:checked').length==1){$('.alleg-previewOnly').show();} else {$('.alleg-previewOnly').hide();}
        });
        $('#TestModeBanner').children('tbody').children('tr').children('td').prepend(toggle);
        if(localStorage.getItem('showPreviewOnlyQuestions')==1){
            toggle.children('input').prop('checked',true);
            $('.alleg-previewOnly').show();
        }
    }
}
function populateHTMLQuestions(){
    var tempHTML=$('#emailPreview').html().trim().replace(/\s{4}/gm,'\t');
    tempHTML=replaceMSOPlaceholders(tempHTML);
    tempHTML=tempHTML.replace(/emailBody/gi,'body');
    removeUnusedElements();
    $('#preheaderBlock').html($('#preheader').val());
    $('#emailPreviewHTML').val(tempHTML);
    tempHTML=tempHTML.replace(/\s?contenteditable=true\s?/gim,' ');
    populateEmailSource(tempHTML);
}
function populateEmailSource(tempHTML){
    var URLBase=$('#baseURL').val();
    var reg=/\[(SURVEY URL|CASE LINK)\][^\'\"]*/gim;
    $('#emailSource').val(tempHTML.replace(reg,URLBase))
}
function replaceMSOPlaceholders(tempHTML){
    var placeholders={};
    // Placeholder text is in brackets in the HTML set to equal the tag of the question textbox that holds the replacement value
    placeholders['ButtonColor']='buttonBackgroundColor'; //This finds [ButtonColor] in the HTML and replaces it with the value of the buttonBackgroundColor question
    placeholders['ButtonFontColor']='buttonFontColor';
    placeholders['pageWidth']='pageWidth';
    
    for(var placeholder in placeholders){
        var reg=new RegExp('\\[' + placeholder + '\\]','gi')
        tempHTML=tempHTML.replace(reg,$('#' + placeholders[placeholder]).val())
    }
    // Set text of quick start buttons
    for(var i=0;i<11;i++){
        var reg=new RegExp('\\[ButtonText' + i + '\\]','gi')
        tempHTML=tempHTML.replace(reg,$('#Button' + i).text().trim());
    }
    // Set text of Start Survey buttons
    tempHTML=tempHTML.replace('[ClosingStartSurveyButtonText]',$('#closingStartSurveyButton').text());
    tempHTML=tempHTML.replace('[ContentStartSurveyButtonText]',$('#contentStartSurveyButton').text());

    // Set button width 
    var QSButtonCount=parseInt($('#buttonCount_question .survey-answer-selected+td .answerText').text());
    tempHTML=tempHTML.replace('[QuickStartButtonWidth]',Math.floor(600/QSButtonCount));
    // Start Buttons
    tempHTML=tempHTML.replace('[StartButtonWidth1]',$('#startButton1').width());
    tempHTML=tempHTML.replace('[StartButtonWidth2]',$('#startButton2').width());
    
    return tempHTML;
}
function removeUnusedElements(){
    $('.ql-toolbar').remove();
    $('.ql-clipboard').remove();
    $('.ql-tooltip').remove();
    $('.quillContainer').removeClass('quillContainer');
    $('.ql-snow').removeClass('ql-snow');
    $('.ql-container').each(function(){
        $(this).replaceWith($(this).find('.ql-editor').html());
    });
    $('.ql-container').removeClass('ql-container');
}