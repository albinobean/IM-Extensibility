// Must include a reference to Google Chart APIs in the "External Javascript Files" section under Client Extensibility: https://www.gstatic.com/charts/loader.js
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
                var scores=[];
                // scores.push(logScoreObject('LTR',$('#LTR_row .ui-state-active').text()));
                scores.push(logScoreObject('Transition Rating',$('#TransitionRating_row .ui-state-active').text()));
                scores.push(logScoreObject('Most Challenging',$('#mostChallenging_question .survey-answer-selected+td .answerText').text()));
                scores.push(logScoreObject('Work Remotely',$('#workRemotelyPercent_question .survey-answer-selected+td .answerText').text()));
                scores.push(logScoreObject('Digital Transformation',$('#digitalTransformation_question .survey-answer-selected+td .answerText').text()));
                logSurveyResults(scores);
                setTimeout(nextButtonClicked(),3000);
            });
            // $('#LTR_row').click(function(){
            //     logSurveyResponse('LTR',$('#LTR_row .ui-state-active').text());
            // })
            // $('.nextButton').unbind();
            // $('.nextButton').click(function(){
            //     logSurveyResponse('LTR',$('#LTR_row .ui-state-active').text());
            //     logSurveyResponse('Transition Rating',$('#TransitionRating_row .ui-state-active').text());
            //     logSurveyResponse('Most Challenging',$('#mostChallenging_question .survey-answer-selected input').val());
            //     logSurveyResponse('Work Remotely',$('#workRemotelyPercent_question .survey-answer-selected input').val());
            //     logSurveyResponse('Digital Transformation',$('#digitalTransformation_question .survey-answer-selected input').val());
            //     setTimeout(nextButtonClicked(),3000);
            // });
            break;
        case 7:
            prepareCharts();
            break;
        case 9:
            $('#buttonToRadio_row').closest('table').addClass('last2ButtonsToRadios');
            $('#multiQuestion7_row').closest('table').addClass('last2ButtonsToRadios');
            $('#multiQuestion11_row').closest('table').addClass('last2ButtonsToRadios');
            multiQuestion7
            break;
        case 10:
            $('.alleg-smartProbeBelow .smart-probe-container').each(function(){
                $(this).parent().append($(this));
            });
            break;
        case 11:
            moveHelpTextAfter();
            $('input[type="text"]').change(function(){
                setSmartProbeConfiguration('smartProbeConfig',$('#numberOfWords').val(),$('#tooShortPrompt').val(),$('#keywordsConfig').val(),$('#keywordsNumberOfWords').val(),$('#keywordPrompt').val());
            });
            break;
        case 12:
            createCommentProgressBar('inputEncouragement',30,0.5,0.7);
            var imageUrls=[];
            for(var i=0;i<11;i++){
                imageUrls.push('https://dell.inquisiteasp.com/surveys/images/KRYF39/Preview/button_' + i + '_53.jpg');
            }
            changeImagesBasedOnCommentProgress('inputEncouragement',imageUrls,30);
            activeSmartProbe('inputEncouragement');
            break;
        case 13:
            makeRankDraggable('dragRank',4);
            break;
    }
    advancedFormatting();
});

function changeImagesBasedOnCommentProgress(commentTag,imageUrlArray,targetWords){
    var comment=$('#' + commentTag);
    comment.addClass('commentWithImageEngagement');
    var imgContainer=$('<div id="' + commentTag + 'EngagementImage" class="commentQualityImage"></div>')
    var commentQuestion=$('#' + commentTag + '_question');
    commentQuestion.append(imgContainer);
    comment.on('keyup',function(){
        setImageByWordCount(imgContainer,commentTag,imageUrlArray,targetWords);
    });
    setImageByWordCount(imgContainer,commentTag,imageUrlArray,targetWords);
}
function setImageByWordCount(imgContainer,commentTag,imageUrlArray,targetWords){
    var ndx=Math.floor(countWords(commentTag)/targetWords * imageUrlArray.length);
    if(ndx>=imageUrlArray.length) ndx=imageUrlArray.length-1;
    imgContainer.css('background-image','url(' + imageUrlArray[ndx] + ')');
}
function countWords(questionTag){
    return $('#' + questionTag).val().replace(/\s\s*/g,' ').split(' ').length;
}
function setProgressBar(progressBar,commentTag,targetWords,yellowThreshold,greenThreshold){
    const progress=countWords(commentTag)/targetWords;
    const container=progressBar.parent();
    console.log(`Progress: ${progress}`);
    container.removeClass('yellowProgressBar');
    container.removeClass('greenProgressBar');
    if(yellowThreshold && progress>=yellowThreshold) {
        console.log('Yellow');
        container.addClass('yellowProgressBar');
    }
    if(greenThreshold && progress>=greenThreshold) {
        console.log('Green');
        container.addClass('greenProgressBar');
    }
    progressBar.css('height',(1 - progress) * 100 + '%');
}
function createCommentProgressBar(commentTag,targetWords,yellowThreshold,greenThreshold){
    var progressBarContainer=$('<div id="' + commentTag + 'ProgressBarContainer" class="progressBarContainer"></div>');
    var progressBar=$('<div id="' + commentTag + 'ProgressBar class="progressBarForComment" style="height:100%;"></div>');
    progressBarContainer.append(progressBar);
    var comment=$('#' + commentTag);
    comment.addClass('commentWithProgressBar')
    comment.css('float','left');
    $('#' + commentTag + '_question').prepend(progressBarContainer);
    comment.on('keyup',function(){
        setProgressBar(progressBar,commentTag,targetWords,yellowThreshold,greenThreshold);
    });
    setProgressBar(progressBar,commentTag,targetWords,yellowThreshold,greenThreshold);
}

function setSmartProbeConfiguration(qTag,numberOfWords,tooLittlePrompt,keywords,keywordNumberOfWords,keywordPrompt){
    if(numberOfWords){
        $('#' + qTag + '_too-little').attr('data-number-of-words',numberOfWords);
    }
    if(tooLittlePrompt){
        $('#' + qTag + '_too-little .smart-probe-message-source').html(tooLittlePrompt);
    }
    if(keywords){
        $('#' + qTag + '_not-specific').attr('data-keywords',keywords);
    }
    if(keywordNumberOfWords){
        $('#' + qTag + '_not-specific').attr('data-number-of-words',keywordNumberOfWords);
    }
    if(keywordPrompt){
        $('#' + qTag + '_not-specific .smart-probe-message-source').html(keywordPrompt);
    }
}
// Randomly select answer code
function SelectFirstRadio(qTag,SamePageDisplayLogic,allowAnswerChange){
    //The HTML of the question is different if it is using same-page display logic
    //This should be true if the answers' display logic is based on previous questions on the same page
    var answerSelected=false;

    if(SamePageDisplayLogic){
        var visibleRowsIdentifier='#' + qTag + '_question .question table .row-enabled';
    } else {
        var visibleRowsIdentifier='#' + qTag + '_question .question table tr';
    }
    //See if one of the visible answers is already selected -- don't change if one has already been selected
    answerSelected=$(visibleRowsIdentifier + ' .checked').length>0 && !allowAnswerChange;
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
function logSurveyResults(scores){
    var url='https://script.google.com/macros/s/AKfycbwU4n30OecLCtAvKsM02WDVhzHcXeCnWN7QnIkWt95-KoDPEbY/dev';
    var data={
        scores:JSON.stringify(scores),
        callType:'addScores',
        survey:$('input[name=id]').val(),
        authKey:$('input[name="respondent"]').val()
    };
    $.get(url,data,function(status){
        nextButtonClicked();
    });
}
function logScoreObject(question,score){
    return {
        survey:$('input[name=id]').val(),
        authKey:$('input[name="respondent"]').val(),
        question:question,
        score:score,
        callType:'addScore'
    };
}
function logSurveyResponse(question,score){
    var url='https://script.google.com/macros/s/AKfycbwU4n30OecLCtAvKsM02WDVhzHcXeCnWN7QnIkWt95-KoDPEbY/dev';
    var data={
        survey:$('input[name=id]').val(),
        authKey:$('input[name="respondent"]').val(),
        question:question,
        score:score,
        callType:'addScore'
    };
    $.get(url,data,function(status){
        // nextButtonClicked();
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
function advancedFormatting(){
    if($('#TestModeBanner').length>0){
        // Add the toggle to show hidden questions
        if($('.alleg-previewOnly').length>0){
            var toggle=$('<span id="previewOnlyToggle" style="margin-right:5px;">Show Preview-only fields</span><label class="switch"><input type="checkbox"><span class="slider round"></span></label>');
            toggle.click(function(){
                localStorage.setItem('showPreviewOnlyQuestions',$(this).children('input:checked').length)
                if($(this).children('input:checked').length==1){
                    $('.alleg-previewOnly').show();
                    $('#template').addClass('showHiddenItems');
                } else {
                    $('.alleg-previewOnly').hide();
                    $('#template').removeClass('showHiddenItems');
                }
            });
            $('#TestModeBanner').children('tbody').children('tr').children('td').prepend(toggle);
            if(localStorage.getItem('showPreviewOnlyQuestions')==1){
                toggle.children('input').prop('checked',true);
                $('.alleg-previewOnly').show();
            }
        }
        // Create a prepop preview link
        const baseUrl='';
        const savedAnswers=(/mcx-tag-([^"]*)\"\sname=\"mcx-tag-\1\"\svalue=\"[^"]*\"/g).exec($('#mainForm').html());
        for(let i=0;i<savedAnswers.length;i++){
            
        }
    }
}
function moveHelpTextAfter(){
    $('.help-text-link').each(function(){
        $(this).closest('.questionText').append("<p class='questionDescription'>" + $(this).children('img').attr('aria-label') + "</p>")
    });
}

// Report back to respondents - draw charts
var returnedChartData;
var googleAPI='https://script.google.com/macros/s/AKfycbwU4n30OecLCtAvKsM02WDVhzHcXeCnWN7QnIkWt95-KoDPEbY/dev';
function getGoogleDataTable(questionTag,selectedAnswer,showAsPercent,showLabels){
    var barColor='#C8C9C7';
    var highlightBarColor='#00447C';
    var rawData=returnedChartData[questionTag];
    var data=[['Answer','Score',{role:'style'},{role:'annotation'}]];
    
    if(showLabels) {
        var data=[['Answer','Score',{role:'style'},{role:'annotation'}]];
    } else {
        var data=[['Answer','Score',{role:'style'}]];
    }
    
    for(var i=0;i<rawData.length;i++){
        if(rawData[i][0] && rawData[i][0].length>0){
            if(rawData[i][0]==selectedAnswer){
                var color=highlightBarColor;
            } else {
                var color=barColor;
            }
            var values=[];
            if(showAsPercent){
                values=[rawData[i][0],rawData[i][2],color];
                if(showLabels) values.push(rawData[i][2]);
            } else {
                values= [rawData[i][0],rawData[i][1],color];
                if(showLabels) values.push(rawData[i][1]);
            }
            data.push(values);
        }
    }
    console.log(data);

    // console.log(JSON.stringify(data));
    var dataTable=google.visualization.arrayToDataTable(data);   
    if(showAsPercent){
        var formatter=new google.visualization.NumberFormat({pattern:'#.#%'});
        formatter.format(dataTable,1);
        // if(showLabels) formatter.format(dataTable,3);
    }    
    if(showLabels){
        var view = new google.visualization.DataView(dataTable);
        view.setColumns([0, 1,
                        { calc: "stringify",
                            sourceColumn: 1,
                            type: "string",
                            role: "annotation" },
                        2]);
                        formatter.format(view,3);
        return view;       
    }
    return dataTable;
}

function drawBarChart(questionTag,elementId,chartOptions,selectedAnswer,showAsPercent,showLabels,chartTitle){   
    var chart= new google.visualization.BarChart(document.getElementById(elementId));
    if(!chartOptions) chartOptions={};
    if(!chartOptions['legend']) chartOptions['legend']={}
    chartOptions['legend']['position']='none';
    if(showAsPercent){

        if(!chartOptions['hAxis']) chartOptions['hAxis']={};
        chartOptions['hAxis']['format']='percent';
        if(!chartOptions['vAxis']) chartOptions['vAxis']={};
        chartOptions['vAxis']['format']='percent';
    }
    if(chartTitle) chartOptions.title=chartTitle;
    console.log(chartOptions);
    chart.draw(getGoogleDataTable(questionTag,selectedAnswer,showAsPercent,showLabels),chartOptions);
    $('#' + elementId).show();
}
// This is the function that should be called on the appropriate page to start the process of getting data and then drawing charts
function prepareCharts(){
    google.charts.load('current',{'packages':['corechart']});
    google.charts.setOnLoadCallback(retrieveChartData);
}
function retrieveChartData(){
    if(!returnedChartData){
        var data={
            survey:$('input[name=id]').val(),
            callType:'dataSummary'
        }
        $.get(googleAPI,data,function(data,status){
            console.log(data);
            data=JSON.parse(data);
            returnedChartData=data['dataSummary'];
            // console.log(returnedChartData);
            drawCharts();
        });
    } else {
        drawCharts();
    }
}
// This is fired after the data is received.  Call your drawChart functions from here
function drawCharts(){
    var chartOptions={
        width:$('#survey').width() * .45,
        height:450,
        backgroundColor: 'none',
        titleTextStyle:{fontSize:16}
    }
    // drawBarChart('LTR',$('.alleg-LTRContainer').attr('id'),chartOptions,$('#mcx-tag-LTR').val(),true);
    
    if($('#mcx-tag-TransitionRating').val()){
        selectedAnswer=parseInt($('#mcx-tag-TransitionRating').val()) + 1;
        drawBarChart('Transition Rating',$('.alleg-TransitionRatingContainer').attr('id'),chartOptions,selectedAnswer,true,true,'Transition Rating')
    }
    if($('#mcx-tag-workRemotelyPercent').val()){
        selectedAnswer=['0% - 25%','26% - 50%','51% - 75%','76% - 99%','100%'][parseInt($('#mcx-tag-workRemotelyPercent').val())];
        drawBarChart('Work Remotely',$('.alleg-WorkRemotelyContainer').attr('id'),chartOptions,selectedAnswer,true,true,'Percent Working Remotely')
    }
    chartOptions.width=$('#survey').width();
    if($('#mcx-tag-mostChallenging').val()){
        selectedAnswer=['Provision of equipment','Security of data or information','Providing support','Speed of access to tools / software needed','Staffing and resource management within IT','Lack of collaboration tools','Training of staff to use new tools','Communication to remote workforces'][parseInt($('#mcx-tag-mostChallenging').val())];
        drawBarChart('Most Challenging',$('.alleg-MostChallengingContainer').attr('id'),chartOptions,selectedAnswer,true,true,'Most Challenging')
    }
    chartOptions.height=600;
    if($('#mcx-tag-digitalTransformation').val()){
        var selectedAnswer=['No digital plans; limited initiatives','Ad hoc/siloed digital projects only','Coordinated digital initiatives in place','Company-wide digital transformation in progress','Digital is fully embedded in everything we do'][parseInt($('#mcx-tag-digitalTransformation').val())];
        drawBarChart('Digital Transformation',$('.alleg-DigitalTransformationContainer').attr('id'),chartOptions,selectedAnswer,true,true,'Digital Transformation Stage')
    }
}
function moveSmartProbeBelow(){
    $('.smart-probe-container').each(function(){
        $(this).parent().append($(this));
    });
}
function activeSmartProbe(qTag){
    $(`#${qTag}_question .smart-probe-container`).each(function(){
        $(this).parent().append($(this));
        $(this).addClass('active-smart-probe-container');
    })
    $(`#${qTag}_too-little`).attr('data-number-of-words',0); //Disables the too little words or else it will immediately pop up
    const keywords=$(`#${qTag}_not-specific`).attr('data-keywords').split(',');
    $(`#${qTag}_question textarea`).on('keyup',function(){
        const response=$(this).val();
        for(let i=0;i<keywords.length;i++){
            if(response.indexOf(keywords[i])>=0){
                Allegiance.validateSmartProbe();
            }
        }
    });
}
let itemBeingDragged;
const classWhileRankIsBeingDragged='rankBeingDragged';
function makeRankDraggable(qtag,maxScores){
    const questionTable=$(`#${qtag}_question table.question table`);
    let answerRows=questionTable.find('tr');
    let answerValues=answerRows.toArray().map(function(r){return $(r).find('.answerText').text().trim()});
    sortRankQuestionByScore(qtag);
    for(let i=0;i<answerRows.length;i++){
        let rw=answerRows[i];
        $(rw).attr('draggable','true');
        $(rw).on('dragstart',function(e){
            $(this).addClass(classWhileRankIsBeingDragged);
            itemBeingDragged=$(e.target);
        });
        $(rw).on('dragend',function(e){
            $(`.${classWhileRankIsBeingDragged}`).removeClass(classWhileRankIsBeingDragged);

        });
        $(rw).on('drop',function(e){
            e.preventDefault();
            e.stopPropagation();
            if(itemBeingDragged !== this){
                const movingValue=$(itemBeingDragged).find('.answerText').text().trim();
                const moveFrom=answerValues.indexOf(movingValue);
                // console.log(`From: ${movingValue} (${moveFrom})`);
                const placeOnTopOf=$(e.target).closest('tr').find('.answerText').text().trim();
                const moveTo=answerValues.indexOf(placeOnTopOf);
                if(moveTo>moveFrom){
                    $(e.target).closest('tr').after($(itemBeingDragged));
                } else {
                    $(e.target).closest('tr').before($(itemBeingDragged));
                }
                fillRankScoresByOrder(qtag,maxScores)
                // console.log(`To: ${placeOnTopOf} (${moveTo})`);
                console.log(`${moveFrom} => ${moveTo}`);
                answerRows=questionTable.find('tr');
                answerValues=answerRows.toArray().map(function(r){return $(r).find('.answerText').text().trim()});
            }
            
        });
        $(rw).on('dragover',function(e){
            e.preventDefault();
        })
    }
}
const classOfAllowableRanks='eligibleToRank';
function fillRankScoresByOrder(qtag,maxScores){
    $(`#${qtag}_question .${classOfAllowableRanks}`).removeClass(classOfAllowableRanks);
    let inputs=$(`#${qtag}_question table.question table tr input`);
    inputs.val('');
    const highlightMax=maxScores ? inputs.length>maxScores : false;
    for(let i=0;i<inputs.length;i++){
        if(!maxScores || i<maxScores){
            if(highlightMax) $(inputs[i]).closest('tr').addClass(classOfAllowableRanks);
            $(inputs[i]).val(i+1);
            $(inputs[i]).parent().find('button').text(i + 1);
        } else {
            $(inputs[i]).val('');
            $(inputs[i]).parent().find('button').text('');
        }
        
    }
}
function sortRankQuestionByScore(qtag){
    const questionTable=$(`#${qtag}_question table.question table`);
    const answerRows=questionTable.find('tr');
    for(let i=answerRows.length;i>0;i--){
        questionTable.prepend($(`#${qtag}_question table.question table input[value="${i}"]`).closest('tr'));
    }
}
makeRankDraggable('dragRank');