var InMomentFavIcon='https://maritzcxenterpriseoperations.allegiancetech.com/surveys/images/VW8KA6/Preview/favicon16x16.png'
$(document).ready(function () {
    setFavicon(InMomentFavIcon);
    var strlang = $("input[name='language']").val();
    if(strlang=='arabic'){
        $('#survey').addClass('rtl');
        $('#survey').css('direction','rtl');
    }
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    var pageName=pageNames['page' + curPage];
    document.title=pageName;
    
    switch(curPage) {
        case 1:
            $('#survey').hide();
            if(localStorage.MCXDesiredLanguage){
                $("#LanguageSelector option").each(function() {
                    if($(this).text() == localStorage.MCXDesiredLanguage) {
                        $(this).attr('selected', 'selected');
                    }
                });
            };
            localStorage.MCXDesiredLanguage=$('#LanguageSelector option:selected').text();
            nextButtonClicked();
            break;
        case 2:
            $('.backButton').hide(); //Hide the back button since it is the first respondent-facing page
            //If they change the language, go back and then come back to refresh the page
            if(strlang=='Hebrew' || strlang=='Arabic' || strlang=='Moroccan Arabic' ){$('#FakeLanguageSelector').css('float','left');}
            if(localStorage.MCXDesiredLanguage){
                $("#FakeLanguageSelector option").each(function() {
                    if($(this).text() == localStorage.MCXDesiredLanguage) {
                        $(this).attr('selected', 'selected');
                        localStorage.removeItem('MCXDesiredLanguage');
                    }
                });
            };
            $('#FakeLanguageSelector').change(function(){
                localStorage.MCXDesiredLanguage=$('#FakeLanguageSelector option:selected').text();
                backButtonClicked();
            });
            addPreviewOnlyToggle();
            showModalBeforeExit(1);
            break;
        case 3:
            // Placeholder
            AddPlaceholderTextToPleaseSpecify('Please specify');
            ConvertHelpTextToPleaseSpecifyPlaceholder('placeholderOtherHelp');
            AddPlaceholderTextToQuestion('placeholderShort','Short text here')
            AddPlaceholderTextToQuestion('placeholderLong','Long text here')
            ConvertHelpTextToPlaceholder('placeholderHelp');
            break;
        case 5:
            // Randomly select values
            SelectFirstRadio('randomRadio',false);
            SelectFirstCheckboxes('randomCheckbox',3);
            break;
        case 6:
            $('.nextButton').unbind();
            $('.nextButton').click(function(){
                logSurveyResponse($('#LTR_row .ui-state-active').text());
                setTimeout(nextButtonClicked(),3000);
            });
            break;
        case 8:
            $('#buttonToRadio_row').closest('table').addClass('last2ButtonsToRadios');
            $('#multiQuestion7_row').closest('table').addClass('last2ButtonsToRadios');
            $('#multiQuestion11_row').closest('table').addClass('last2ButtonsToRadios');
            multiQuestion7
            break;
        case 9:
            $('.alleg-smartProbeBelow .smart-probe-container').each(function(){
                $(this).parent().append($(this));
            });
            break;

    }
});

// Randomly select answer code
function SelectFirstRadio(qTag,SamePageDisplayLogic){
    //The HTML of the question is different if it is using same-page display logic
    //This should be true if the answers' display logic is based on previous questions on the same page
    var answerSelected=false;

    if(SamePageDisplayLogic){
        var visibleRowsIdentifier='#' + qTag + '_question .question table .row-enabled';
    } else {
        var visibleRowsIdentifier='#' + qTag + '_question .question table tr';
    }
    //See if one of the visible answers is already selected -- don't change if one has already been selected
    answerSelected=$(visibleRowsIdentifier + ' .checked').length>0;
    console.log(answerSelected);
    $(visibleRowsIdentifier).each(function(){
        if($(this).css('display')!='none' && !answerSelected){
            $(this).find('.iCheck-helper').click();
            answerSelected=true;
            return;
        }
    });
}
SelectFirstRadio('randomRadio',false);

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
// End Randomly select answers

// Placeholder code
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
// End Placeholder code
// Modal code
var addEvent = function(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
};
function modalAnswerCallback(){
    var answerClicked=$(this).text();
    // Add cases for each button that they could have pressed
    switch(answerClicked){
        case "Answer text 1":
            // setTimeout(nextButtonClicked,1000);
            // Any required questions on this page should have display logic to NOT show if this answer is selected.
            // Otherwise, they will get an error saying they skipped a required question.  
            // These required questions will not save their responses since they will not be displayed.
            break;
        case "Answer text 2":
            break;
    }
}
function showModal(){
    $('#modalBackground').show();  
    $('.alleg-modalElement').show(); 
    $('.alleg-modalImage').show();  
    $('#modalShown_question input')[0].click();

}
function hideModal(){
    $('#modalBackground').hide();   
}
function addModal(){
    var modalBackground=$('<div></div>');
    modalBackground.attr('id','modalBackground');
    $('#template').append(modalBackground);
    modalBackground.click(hideModal);
    var modalFrame=$('<div></div>');
    modalFrame.attr('id','modalFrame');
    modalBackground.append(modalFrame);
    modalFrame.append($('.alleg-modalElement, .alleg-modalImage'));
    $('.alleg-modalElement .ui-button').click(modalAnswerCallback);
}
function showModalBeforeExit(MaxTimesToShow){
    // Set MaxTimesToShow as -1 to show it unlimited times
    addModal();
    if(!sessionStorage.getItem('ModalShowingsLeft')){
        sessionStorage.setItem('ModalShowingsLeft',MaxTimesToShow)
    }
    
    addEvent(document, "mouseout", function(event) {
        if(parseInt(sessionStorage.getItem('ModalShowingsLeft'))==0){return}
        event = event ? event : window.event;
        var from = event.relatedTarget || event.toElement;
        if ((!from || from.nodeName == "HTML") && event.clientY <= 100 && sessionStorage.getItem('firstVisit') != "true") {
            sessionStorage.setItem('ModalShowingsLeft',parseInt(sessionStorage.getItem('ModalShowingsLeft'))-1);
            showModal();
        }
    });
}
// End Modal code
function logSurveyResponse(score){
    var url='https://script.google.com/macros/s/AKfycbwU4n30OecLCtAvKsM02WDVhzHcXeCnWN7QnIkWt95-KoDPEbY/dev'
    var data={
        survey:$('input[name=id]').val(),
        score:score
    }
    $.get(url,data,function(data,status){

    });
}
function checkNextButtonEligibility(questionTag,validAnswers){

}
function setFavicon(iconUrl){
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = iconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
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