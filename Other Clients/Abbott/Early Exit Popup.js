//----------BEGIN - LivingLens Integration Code----------
$(document).ready(function() {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);

    if (curPage == 9) {

        //----------BEGIN - Video Upload Confirmation When Next Pushed----------
        //The following code checks to make sure a recording has been published before going to the next survey page. If not, it changes the properties of a warning message in the survey so that it changes from hidden to visible.

        //diverts the survey from following the normal process when the Next button is pushed
        $('.nextButton').unbind('click');
        //new process to follow when Next button is pushed
        $('.nextButton').click(function() {
            checkUploadStatus();
        });

        function checkUploadStatus() {
            //retrieves yes/no value from hidden survey field
            VideoUploadStatus = $('#LivingLensVideoPublished option:selected').text();
            //retrieves yes/no value from hidden survey field
            VideoFilterStatus = $('#LivingLensFiltersAppended option:selected').text();

            //if the video has been successfully uploaded to the LivingLens site and the filters have been successfully appended, then proceed with the normal Next button process 
            if(VideoUploadStatus=='Yes' && VideoFilterStatus=='Yes' ){
                nextButtonClicked();}
            //otherwise make warning message visible, and then allow for the Next button to proceed with the normal process the next time it is pushed            
            else {
                    switch (CommentMode) {
                        case '0':
                            $('.alleg-VideoLoadStatus').show();
                            break;
                        default:
                            $('.alleg-ImageLoadStatus').show();
                     }                     
                    $('.nextButton').unbind('click');
                    $('.nextButton').click(function() {
                        nextButtonClicked();
                    });
            }
            return true;
        }
        //----------END - Video Upload Confirmation When Next Pushed----------
        
        //----------BEGIN - variables to be updated for each new integration----------
        var LL_ClientID = "5d769d07ddbdda0f341fe9cd";
        var LL_APIKey = "34d23b2c-4044-ba02-90cf-292c4ba27fd5";
        var SurveyName = "Relationship Feedback (rNPS)";
        
        //get values from survey questions to be pushed into LivingLens as a filter
        var RespondentCountry = $('input[name=mcx-tag-Country]').val();
        var IsTop200 = $('input[name=mcx-tag-Top200]').val();
        var IsAlinity = $('input[name=mcx-tag-Alinity]').val();
        
       if (IsTop200 == 0) {
           var IsTop200Text = "Top 200";
       } else {
           var IsTop200Text = "Not Top 200";
       }  
 
       if (IsAlinity == 0) {
           var IsAlinityText = "Alinity";
       } else {
           var IsAlinityText = "Not Alinity";
       } 
        
        //retrieve the value of the comment_mode question IF IT EXISTS IN THE SURVEY
        var CommentMode = $('input[name=mcx-tag-COMMENT_MODE]').val();

        //use the comment_mode answer to configure the LivingLens widget for (1) audio, video or image and (2) file upload. This switch statement also (3) determines the text to use for the clickable URL link
        //in most cases this option should probably not be given to the survey taker - if the option will not be presented the code needs to be changed to simply set the LL_DataMedia variable to "video" and  LL_DataMedia variable to "false"
        switch (CommentMode) {
            case '0':
                var LL_DataMedia = "video";
                var LL_DataUpload = "false";
                var LL_URLText = "View Video";
                var LL_IntroText = "Q00C401FC_text";
                break;
            default:
                var LL_DataMedia = "image";
                var LL_DataUpload = "true";
                var LL_URLText = "View Image";
                var LL_IntroText = "Q00C401FD_text";
        } 
                
        //----------END - variables to be updated for each new integration----------

        //retrieve respondent authentication code from mcx 
        var mcx_respondent = "Relationship Feedback: " + $('input[name=respondentkey]').val();
        //store respondent authentication code from mcx into a survey question with tag LivingLensVideoName
        $('#LivingLensVideoName').val(mcx_respondent);
        
        function addDiv() {

            var captureDiv = document.createElement("div");
            captureDiv.setAttribute("id", "media-capture-1");
            captureDiv.setAttribute("data-clientid", LL_ClientID);
            captureDiv.setAttribute("data-apikey", LL_APIKey);
            
           //setting the respondent id in LivingLens to the same value as the question in MCX: LivingLensRespondent
            captureDiv.setAttribute("data-respondentid", mcx_respondent);
            
            //these values should come from the language settings. Currently hard coded
            captureDiv.setAttribute("data-countrycode", "US");
            captureDiv.setAttribute("data-languagecode", "en");
            captureDiv.setAttribute("data-transcriptionRequests", "AutomaticTranslation");

            //recording type - video or audio
            captureDiv.setAttribute("data-media", LL_DataMedia);

            //minimum length of a video 
            captureDiv.setAttribute("data-minlength","1");

            //maximum length of a video 
            captureDiv.setAttribute("data-maxlength","300");
            
            //disable the 'Upload a file' functionality
            captureDiv.setAttribute("data-upload",LL_DataUpload);

            document.getElementById(LL_IntroText).insertAdjacentElement('afterEnd', captureDiv);
 
            var callback = function(mediaCapture) {
                mediaCapture.onEvent('uploadSuccessful', function(data) {

                    //retrieve and store LivingLens UploadID into a hidden MCX field
                    var LL_UploadId = data.uploadId;
                    $('#LivingLensUploadId').val(LL_UploadId);

                    //convert upload id to video id
                    var LastUploadIdCharacters = LL_UploadId.slice(-8);
                    var UploadIdAsDecimal = parseInt(LastUploadIdCharacters, 16);
                    var NewUploadIdAsDecimal = UploadIdAsDecimal - 1;
                    var NewLastUploadIdCharacters = NewUploadIdAsDecimal.toString(16);
                    var LL_VideoId = LL_UploadId.slice(0,16) + NewLastUploadIdCharacters;

                    //update hidden survey field to indicate successful upload
                    $('#LivingLensVideoPublished').val(1);

                    //create and store a clickable URL to the LivingLens video into a hidden MCX field
                    var LL_VideoURL = "<a href=https://app.livinglens.tv/media/" + LL_DataMedia + "/" + LL_VideoId + " target=_blank>" + LL_URLText + "</a>";
                    $('#LivingLensVideoURL').val(LL_VideoURL);

                    //----------BEGIN - section to pass filters to LivingLens - THIS NEEDS TO BE UPDATED FOR EVERY SURVEY----------
                    var filters = [{
                        group: 'Survey Name',
                        filters: [SurveyName]
                    }, {
                        group: 'Country',
                        filters: [RespondentCountry]
                    }, {
                        group: 'Top 200',
                        filters: [IsTop200Text]
                    }, {
                        group: 'Alinity',
                        filters: [IsAlinityText]                        
                    }];
                    //----------END - section to pass filters to LivingLens----------
                    
                    mediaCapture.appendFilters(LL_UploadId, filters);
                    
                    //update hidden survey field to indicate filters have been appended
                    mediaCapture.onEvent('appendFiltersSuccessful', function () {
                    $('#LivingLensFiltersAppended').val(1);
                    });

                });

            }

            LivingLens.startMediaCapture({
                target: 'media-capture-1',
                callback: callback
            });

        }

        addDiv();

    }

});
//----------END - LivingLens Ingration Code----------
//fade in content to avoid content flashing
$(window).load(function() {
$('#headerLogoImage').css('visibility','visible').hide().fadeIn(0);
$('#canvas').css('visibility','visible').hide().fadeIn(0);
$('.bottomNavigation').css('visibility','visible').hide().fadeIn(0);
$('.topNavigation').css('visibility','visible').hide().fadeIn(0);

//fix Q7 button size
  var divHeight = $('#Q7_MaintainRelationship_row > td:nth-child(3) > label:nth-child(2)').height(); 
    $('#Q7_MaintainRelationship_row > td:nth-child(1) > label:nth-child(2)').css('height', divHeight+'px');
    $('#Q7_MaintainRelationship_row > td:nth-child(2) > label:nth-child(2)').css('height', divHeight+'px');
    $('#Q7_MaintainRelationship_row > td:nth-child(4) > label:nth-child(2)').css('height', divHeight+'px');
    $('#Q7_MaintainRelationship_row > td:nth-child(5) > label:nth-child(2)').css('height', divHeight+'px');
    $('#Q7_MaintainRelationship_row > td:nth-child(1) > label:nth-child(2) > span:nth-child(1) > span:nth-child(1)').css('margin-top','0')
    $('#Q7_MaintainRelationship_row > td:nth-child(2) > label:nth-child(2) > span:nth-child(1) > span:nth-child(1)').css('margin-top','0')
    $('#Q7_MaintainRelationship_row > td:nth-child(4) > label:nth-child(2) > span:nth-child(1) > span:nth-child(1)').css('margin-top','0')
    $('#Q7_MaintainRelationship_row > td:nth-child(5) > label:nth-child(2) > span:nth-child(1) > span:nth-child(1)').css('margin-top','0')
});

$(window).on('resize', function(){
    var divHeight = $('#Q7_MaintainRelationship_row > td:nth-child(3) > label:nth-child(2)').height(); 
    $('#Q7_MaintainRelationship_row > td:nth-child(1) > label:nth-child(2)').css('height', divHeight+'px');
    $('#Q7_MaintainRelationship_row > td:nth-child(2) > label:nth-child(2)').css('height', divHeight+'px');
    $('#Q7_MaintainRelationship_row > td:nth-child(4) > label:nth-child(2)').css('height', divHeight+'px');
    $('#Q7_MaintainRelationship_row > td:nth-child(5) > label:nth-child(2)').css('height', divHeight+'px');
    $('#Q7_MaintainRelationship_row > td:nth-child(1) > label:nth-child(2) > span:nth-child(1) > span:nth-child(1)').css('margin-top','0')
    $('#Q7_MaintainRelationship_row > td:nth-child(2) > label:nth-child(2) > span:nth-child(1) > span:nth-child(1)').css('margin-top','0')
    $('#Q7_MaintainRelationship_row > td:nth-child(4) > label:nth-child(2) > span:nth-child(1) > span:nth-child(1)').css('margin-top','0')
    $('#Q7_MaintainRelationship_row > td:nth-child(5) > label:nth-child(2) > span:nth-child(1) > span:nth-child(1)').css('margin-top','0')

});


$(document).ready(function() {
    var randomAnswer = Math.floor((Math.random() * 2) + 1);
    var curPage = parseInt($('input[name=currentpage]').val(), 10);

    if ($('#Q50percent').val() === "") {
        $('#Q50percent').val(randomAnswer)
    }

    if (curPage == 2) {
        //Page2 Phone and Email display logic
        $('#Q1b_LTRTranslatedComments').hide()
        $('#Q00AE9DF5_text, #Q00B0E536_text').hide();


            if ($('#Respondent_Status :selected').text() == '[1] Customer, and willing to participate' && $('#Q00AE9DF5_text').text() == 'Phone') {
                $("#Q1b_LTRTranslatedComments").show();
            } else if ($('#Q00AE9DF5_text').text() == 'Email' && $('#fakeLanguageSelector :selected').text() == 'English') {
                $("#Q1b_LTRTranslatedComments").show();
            } else if ($('#Q00B0E536_text').text() == 'Yes, submit now') {
                $("#Q1b_LTRTranslatedComments").show();
}

        $('#Q00003D26_table :ui-button').click(function() {
            if ($('#Respondent_Status :selected').text() == '[1] Customer, and willing to participate' && $('#Q00AE9DF5_text').text() == 'Phone') {
                $("#Q1b_LTRTranslatedComments").show();
            } else if ($('#Q00AE9DF5_text').text() == 'Email' && $('#fakeLanguageSelector :selected').text() == 'English') {
                $("#Q1b_LTRTranslatedComments").show();
            }
        });


        $('button.nextButton.minimal').click(function() {
            if ($("#Q1b_LTRTranslatedComments").css("display") == "none") {
                $("#Q1b_LTRTranslatedComments, #Q1b_LTRTranslatedComments_not-specific, #Q1b_LTRTranslatedComments_too-little, .smart-probe-arrow-left, div.smart-probe-message").remove();
                nextButtonClicked();
            }
        });

        // Make dropdown width consistent
        $('select').css("width","275px");

    } else if (curPage == 6) {

        //pipe forward 50percent question text
        $('#Q50percent_question').hide();
        $('#Q00AA11EA_text').css('display', 'none');
        if ($('#Q00AA11EA_text').text() == 'English' && $('#Q50percent').val() == "1") {
            $('#Q00B77C10_table').css('display', 'none'); // table
            $('#Q00B77D74_text').css('display', 'none'); // email
            $('#Q00B77D75_text').css('display','none'); //phone
        } else if ($('#Q00AA11EA_text').text() == 'English' && $('#Q00DB761A_text').text() == 'Phone') {
             $('#Q00B77C10_table').css('display', 'block'); // table
              $('#Q00B77D75_text').css('display','block'); // phone
              $('#Q00B77D74_text').css('display','none'); // email
        } else if ($('#Q00AA11EA_text').text() == 'English'  && $('#Q00DB761A_text').text() == 'Email') {
             $('#Q00B77C10_table').css('display', 'block'); // table
             $('#Q00B77D74_text').css('display','block'); // email
             $('#Q00B77D75_text').css('display','none'); // phone
        } else {
            $('#Q00B77C10_table').css('display', 'none'); // table
            $('#Q00B77D74_text').css('display', 'none'); // email
            $('#Q00B77D75_text').css('display','none'); //phone
       }     
}

    var count = $('.progressBar ul').children('.done').size() * 10;
    $('<div class="percentComplete">' + count + '%</div>').insertAfter('.progressBar ul');

    $("#LanguageSelector > option:nth-child(5)").remove();
});

$(document).ready(function() {

    // Center Table Scale Headers
    centerHeaders("#Q00003D26", 9, 9);
    centerHeaders("#Q0000FFE4", 9, 9);
    centerHeaders("#Q00003D37", 9, 9);
    centerHeaders("#Q0036381C", 9, 9);
    centerHeaders("#Q004EE062", 9, 9);
    centerHeaders("#Q0090FBC3", 9, 9);
    centerHeaders("#Q004EE03D", 9, 9);
    centerHeadersButtons("#Q00003D26_S1", 9, 9);
    centerHeadersButtons("#Q0000FFE4_S1", 9, 9);
    centerHeadersButtons("#Q00003D37_S1", 9, 9);
    centerHeadersButtons("#Q0036381C_S1", 9, 9);
    centerHeadersButtons("#Q004EE03D_S1", 9, 9);
    centerHeadersButtons("#Q004EE062_S1", 9, 9);
    centerHeadersButtons("#Q0090FBC3_S1", 9, 9);


    function centerHeaders(tableID, percent, colBet) {
        $(tableID + '_scale_header table tbody tr td').attr('class', "ScaleHeaderCenter");
        for (i = 0; i < colBet; i++) {
            $(tableID + '_scale_header table tbody tr td:nth-child(1)').after('<td></td>');
        }
        $(tableID + '_scale_header table tbody tr td').attr('style', "width:" + percent + "%;");
    }

    function centerHeadersButtons(tableID, percent, colBet) {
        $(tableID + ' div table tbody tr td').attr('class', "ScaleHeaderCenter");
        for (i = 0; i < colBet; i++) {
            $(tableID + ' div table tbody tr td:nth-child(1)').after('<td></td>');
        }
        $(tableID + ' div table tbody tr td').attr('style', "width:" + percent + "%;");
    }

    //Create naLastCol container at end of tables with NA or DK
    var lastColTables = ["#Q0000FFE4_S1", "#Q00003D37_S1", "#Q004EDFF9_S1", "#Q004EE062_S1", "#Q0090FBC3_S1"]

    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    if (curPage == 3) {
        $(lastColTables[0]).attr("colspan", "11");
        $(lastColTables[0]).after("<th colspan='1' style='border:none; border-bottom: 1px solid #aaa;'></th>");
        $(lastColTables[1]).attr("colspan", "11");
        $(lastColTables[1]).after("<th colspan='1' style='border:none; border-bottom: 1px solid #aaa;'></th>");

    } else if (curPage == 4) {
        $(lastColTables[2]).attr("colspan", "11");
        $(lastColTables[2]).after("<th colspan='1' style='border:none; border-bottom: 1px solid #aaa;'></th>");

    } else if (curPage == 5) {
        $(lastColTables[3]).attr("colspan", "11");
        $(lastColTables[3]).after("<th colspan='1' style='border:none; border-bottom: 1px solid #aaa;'></th>");

    } else if (curPage == 6) {
        $(lastColTables[4]).attr("colspan", "11");
        $(lastColTables[4]).after("<th colspan='1' style='border:none; border-bottom: 1px solid #aaa;'></th>");

    }
});

$(document).ready(function() {
    var strlang = $("input[name='language']").val();
    if (strlang == "arabic") {
        $('body').css("direction", "rtl");
        $('.navigationContainer').css("margin-right", "15px");
        $('#canvas').css("margin", "0 20px 0");
        $('.left').css("text-align", "right");
        $('.tableDescription').css("text-align", "right");
        $('.alleg-margin0').css("text-align", "right");
        $('.alleg-margin1').css("text-align", "right");
        $('.alleg-margin2').css("text-align", "right");
        $('#Q0000B9CE_text').css("text-align", "right");
        $('.left table').css("float", "right");
        $('.lang-index-5 .normal').css("text-align", "right");
        $('.lang-index-5 .normal').attr("style", "text-align:right");
    }
});

// The first page respondents see includes both Language Selector and the NPS question. The page will auto refresh when selecting a new language.
$(document).ready(function() {
    var strlang = $("input[name='language']").val();

    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    switch (curPage) {
        case 1:
            $('#survey').hide();
            if (localStorage.MCXDesiredLanguage) {
                $("#LanguageSelector option").each(function() {
                    if ($(this).text() == localStorage.MCXDesiredLanguage) {
                        $(this).attr('selected', 'selected');
                    }
                });
            };
            localStorage.MCXDesiredLanguage = $('#LanguageSelector option:selected').text();
            nextButtonClicked();
            break;
        case 2:
            $('.backButton').hide(); //Hide the back button since it is the first respondent-facing page
            //If they change the language, go back and then come back to refresh the page
            if (strlang == 'Hebrew' || strlang == 'Arabic' || strlang == 'Moroccan Arabic') { $('#fakeLanguageSelector').css('float', 'left'); }
            if (localStorage.MCXDesiredLanguage) {
                $("#fakeLanguageSelector option").each(function() {
                    if ($(this).text() == localStorage.MCXDesiredLanguage) {
                        $(this).attr('selected', 'selected');
                    }
                });
            };
            $('#fakeLanguageSelector').change(function() {
                localStorage.MCXDesiredLanguage = $('#fakeLanguageSelector option:selected').text();
                backButtonClicked();
            });
            break;
        default:
            localStorage.removeItem('MCXDesiredLanguage');
            break;
    }

    //***************POP-UP CONFIRMATION ON EXIT*******************
    //Pop-up
    var addEvent = function(obj, evt, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(evt, fn, false);
        } else if (obj.attachEvent) {
            obj.attachEvent("on" + evt, fn);
        }
    };

    var curPage = parseInt($('input[name=currentpage]').val(), 10);

    if (curPage == 2) {
        //sessionStorage.setItem('firstVisit', 'false')
     $('#POPUP_question').hide();

        addEvent(document, "mouseout", function(event) {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if ((!from || from.nodeName == "HTML") && event.clientY <= 100 && sessionStorage.getItem('firstVisit') != "true") {
           
 /**************COPY THE BELOW FOR EACH LANGUAGE - REMOVE ENGLISH FROM IF STATEMENT ABOVE***************/

            if($('#fakeLanguageSelector :selected').val() == "0") {
                  var invite = $("#Q00CFBD37_text").text()
                  var accept = $("#Q00CFBD38_text").text()
                  var decline = $("#Q00CFBD39_text").text()
            }

            if($('#fakeLanguageSelector :selected').val() == "1") {
                  var invite = 'Kami memperhatikan bahwa Anda tidak menyelesaikan survei.<br/>Apakah Anda ingin menutup survei Anda sekarang atau melanjutkan?'
                  var accept = 'Ya, kirim sekarang'
                  var decline = 'Tidak, saya ingin melanjutkan'
            }

            if($('#fakeLanguageSelector :selected').val() == "2") {
                  var invite = $("#Q00CFBD3A_text").text()
                  var accept = $("#Q00CFBD3B_text").text()
                  var decline = $("#Q00CFBD3C_text").text()
            }

            if($('#fakeLanguageSelector :selected').val() == "3") {
                  var invite = $("#Q00CFBD4C_text").text()
                  var accept = $("#Q00CFBD4D_text").text()
                  var decline = $("#Q00CFBD4E_text").text()
            }

            if($('#fakeLanguageSelector :selected').val() == "4") {
                  var invite = 'Vi har bemærket, at du ikke har færdiggjort undersøgelsen.<br/>Vil du afslutte undersøgelsen nu, eller vil du fortsætte?'
                  var accept = 'Ja, send den nu'
                  var decline = 'Nej, jeg vil fortsætte'
            }

            if($('#fakeLanguageSelector :selected').val() == "5") {
                  var invite = 'Wir haben festgestellt, dass Sie diese Umfrage nicht vollständig abgeschlossen haben.<br/>Möchten Sie die Umfrage jetzt beenden oder fortsetzen?'
                  var accept = 'Ja, jetzt beenden'
                  var decline = 'Nein, fortsetzen'
            }

            if($('#fakeLanguageSelector :selected').val() == "6") {
                  var invite = 'We noticed that you didn’t complete the survey.<br/>Did you want to close your survey now or continue?'
                  var accept = 'Yes, submit now'
                  var decline = 'No, I want to continue'
            }

            if($('#fakeLanguageSelector :selected').val() == "7") {
                  var invite = 'Hemos observado que no ha completado la encuesta. ¿Quiere cerrar la encuesta ahora o continuar?'
                  var accept = 'Sí, enviar ahora'
                  var decline = 'No, deseo continuar'
            }

            if($('#fakeLanguageSelector :selected').val() == "8") {
                  var invite = 'Nos dimos cuenta de que no completó la encuesta.<br/>¿Quería cerrar su encesta ahora o continuar?'
                  var accept = 'Sí, enviar ahora'
                  var decline = 'No, quiero continuar'
            }

            if($('#fakeLanguageSelector :selected').val() == "9") {
                  var invite = 'Nous avons remarqué que vous n’aviez pas terminé l’enquête.Souhaitez-vous l’envoyer maintenant ou continuer d’y répondre ?'
                  var accept = 'Oui, je souhaite l’envoyer maintenant'
                  var decline = 'Non, je souhaite continuer'
            }

            if($('#fakeLanguageSelector :selected').val() == "10") {
                  var invite = 'Huomasimme, että et tehnyt kyselyä loppuun.<br/>Haluatko sulkea kyselyn nyt vai jatkaa vastaamista?'
                  var accept = 'Kyllä, lähetä nyt'
                  var decline = 'Ei, haluan jatkaa'
            }

            if($('#fakeLanguageSelector :selected').val() == "11") {
                  var invite = $("#Q00CFBD3D_text").text()
                  var accept = $("#Q00CFBD3E_text").text()
                  var decline = $("#Q00CFBD3F_text").text()
            }

            if($('#fakeLanguageSelector :selected').val() == "12") {
                  var invite = 'Abbiamo rilevato che non ha completato il sondaggio.<br/>Desidera concludere il sondaggio adesso o proseguire?'
                  var accept = 'Sì, invia adesso'
                  var decline = 'No, desidero proseguire'
            }

            if($('#fakeLanguageSelector :selected').val() == "13") {
                  var invite = $("#Q00CFBD40_text").text()
                  var accept = $("#Q00CFBD41_text").text()
                  var decline = $("#Q00CFBD42_text").text()
            }

            if($('#fakeLanguageSelector :selected').val() == "14") {
                  var invite = $("#Q00CFBD43_text").text()
                  var accept = $("#Q00CFBD44_text").text()
                  var decline = $("#Q00CFBD45_text").text()
            }

            if($('#fakeLanguageSelector :selected').val() == "15") {
                  var invite = 'We hebben vastgesteld dat u de enquête niet helemaal hebt ingevuld.<br/>Wilt u de enquête nu afsluiten of wilt u doorgaan?'
                  var accept = 'Ja, nu verzenden'
                  var decline = 'Nee, ik wil doorgaan'
            }

            if($('#fakeLanguageSelector :selected').val() == "16") {
                  var invite = 'Vi la merke til at du ikke fullførte undersøkelsen.<br/>Vil du lukke undersøkelsen nå eller fortsette?'
                  var accept = 'Ja, send inn nå'
                  var decline = 'Nei, jeg vil fortsette'
            }

            if($('#fakeLanguageSelector :selected').val() == "17") {
                  var invite = 'Zauwazylismy, ze ankieta nie zostala wypelniona.<br/>Czy chce Pan/Pani zamknac ankiete czy kontynuowac?'
                  var accept = 'Tak, przeslij ankiete.'
                  var decline = 'Nie, chce kontynuowac.'
            }

            if($('#fakeLanguageSelector :selected').val() == "18") {
                  var invite = 'Percebemos que você não concluiu a pesquisa.<br/>Você deseja encerrar a pesquisa agora ou continuar?'
                  var accept = 'Sim, enviar agora'
                  var decline = 'Não, quero continuar'
            }

            if($('#fakeLanguageSelector :selected').val() == "19") {
                  var invite = 'Verificámos que não concluiu o inquérito.<br/>Pretenderia terminar o inquérito agora ou continuar?'
                  var accept = 'Sim, submeter agora'
                  var decline = 'Não, pretendo continuar'
            }
            
            if($('#fakeLanguageSelector :selected').val() == "20") {
                  var invite = $("#Q00CFBD46_text").text()
                  var accept = $("#Q00CFBD47_text").text()
                  var decline = $("#Q00CFBD48_text").text()
            }

            if($('#fakeLanguageSelector :selected').val() == "21") {
                  var invite = 'Vi märkte att du inte slutförde undersökningen.<br/>Vill du stänga undersökningen nu eller fortsätta med den?'
                  var accept = 'Ja, skicka nu'
                  var decline = 'Nej, jag vill fortsätta'
            }

            if($('#fakeLanguageSelector :selected').val() == "22") {
                  var invite = $("#Q00CFBD49_text").text()
                  var accept = $("#Q00CFBD4A_text").text()
                  var decline = $("#Q00CFBD4B_text").text()
            }

            if($('#fakeLanguageSelector :selected').val() == "23") {
                  var invite = 'Kayitlarimiza göre anketi tamamlamadiginiz görülüyor.<br/>Simdi anketi kapatmak mi yoksa sürdürmek mi istiyorsunuz?'
                  var accept = 'Evet, anketi simdi gönder'
                  var decline = 'Hayir, devam etmek istiyorum'
            }

            if($('#fakeLanguageSelector :selected').val() == "24") {
                  var invite = $("#Q00D68107_text").text()
                  var accept = $("#Q00D68108_text").text()
                  var decline = $("#Q00D68109_text").text()
            }

/*************************END COPY*********************/

                javascript: (window.mcxAddModal = function() {
                        var logoURL = "https://add-abbott.allegiancetech.com/surveys/images/DRK2Q3/Preview/abbott_logov2.jpg"; //Update company logo for pop-up invite
                        window.declineSurvey = function() {
                            var child = document.getElementById('mcxInviteModal');
                            $('#POPUP').val('No, continue');
                            child.parentNode.removeChild(child);
                        };
                        window.acceptSurvey = function() {
                            $('#POPUP').val('YES');
                            $('input[name=nextpage]').val(8);
                            nextButtonClicked();
                            var child = document.getElementById('mcxInviteModal');
                            child.parentNode.removeChild(child);
                        };
                        var mcxInviteModal = document.createElement("div");
                        mcxInviteModal.setAttribute("id", "mcxInviteModal");
                        mcxInviteModal.innerHTML = '<div id="mcx_invite_div"><div id="mcx_logo_container">\
        <img src="https://add-abbott.allegiancetech.com/surveys/images/DRK2Q3/Preview/abbott_logov2.jpg" id="mcx_invite_logo" />\
        </div><div id="mcx_invite_content"><p id="mcx_invite_words">'+invite+'</p>\
            </div><div id="mcx_buttons"><div id="mcx_accept" onclick="acceptSurvey()">'+accept+'</div>\
        <div id="mcx_decline" onclick="declineSurvey()">'+decline+'</div></div></div>';


                        if (!document.getElementById('mcxInviteModal')) {
                            document.body.insertBefore(mcxInviteModal, document.body.firstChild);
                        }
                        document.getElementById("mcxInviteModal").style.cssText = 'background: rgba(0,0,0, .4); width: 100%; \
        height: 100vh; position: fixed; text-align: center; cursor: default; margin: 0; padding: 0; text-indent: 0; transition: all 0.8s; z-index: 9999;';
                        document.getElementById('mcx_invite_div').style.cssText = "width: 500px; border-radius: 12px; border: 8px solid #1e94e8; position: absolute; left: calc(50% - 250px); \
        top: calc(50% - 250px); font-weight: bold; background: #fff; padding-top: 40px; padding-bottom: 20px;";
                        document.getElementById('mcx_logo_container').style.cssText = "width: 400px; position: relative; margin: 0 auto;";
                        document.getElementById('mcx_invite_logo').style.cssText = "width: 150px; position: relative;";
                        document.getElementById("mcx_invite_content").style.cssText = "width: 500px; border-radius: 5px; position: relative; \
        padding: 30px 30px 30px 30px; text-align: center; font-size: 18px; box-sizing: border-box;";
                        document.getElementById('mcx_invite_words').style.cssText = "line-height: 22px;";
                        document.getElementById("mcx_buttons").style.cssText = "width: 100%; height: 60px; position: relative;";
                        document.getElementById("mcx_accept").style.cssText = "width: 150px; height: 40px; line-height: 20px; \
        font-size: 16px; border-radius: 3px; background: white; color: black; position: absolute; left: 60px; cursor: pointer;";
                        document.getElementById("mcx_decline").style.cssText = "width: 200px; height: 40px; line-height: 20px; \
        font-size: 16px; border-radius: px; color: #1e94e8; position: absolute; right: 60px; cursor: pointer;";
                        var logoHeight, logoWidth;

                        function getWH() {
                            var logo = document.getElementById('mcx_invite_logo');
                            var content = document.getElementById('mcx_invite_content');
                            if (logo && logo.height && logo.width) {
                                logoHeight = logo.height;
                                logoWidth = logo.width;
                                if (logoHeight > 260) {
                                    console.log("Adjusting height");
                                    logo.style.width = 'auto';
                                    logo.style.height = '260px';
                                } else if (logoHeight < 130) {
                                    logo.style.marginTop = "20px";
                                }
                            } else {
                                setTimeout(getWH, 9);
                            }
                        }
                        getWH();
                        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        if (screenWidth < 700) {
                            document.getElementById("mcx_invite_div").style.transform = "scale(0.5)";
                        }
                    })
                    ();
                sessionStorage.setItem('firstVisit', 'true')
            }
        });
    };
    //POP-UP END CODE

if(curPage == 8) {
//display logic for open ends on living lense intro page

//EMAIL - PHONE ON READY
 $('#Q9a_ImproveNonEnglishComments_question').hide();
 $('#Q9b_ImproveEnglishComments_question').hide();

if($('#Q00D9D17E_text').text() == 'Email' && $('#Q00D9D17F_text').text() == 'English'){
    $('#Q9a_ImproveNonEnglishComments_question').hide();
$('#Q9b_ImproveEnglishComments_question').hide();
} else if($('#Q00D9D17E_text').text() == 'Email' && $('#Q00D9D17F_text').text() != 'English'){
    $('#Q9a_ImproveNonEnglishComments_question').hide();
$('#Q9b_ImproveEnglishComments_question').hide();
} else if($('#Q00D9D17E_text').text() == 'Phone' && $('#Q00D9D17F_text').text() == 'English'){
    $('#Q9a_ImproveNonEnglishComments_question').show();
$('#Q9b_ImproveEnglishComments_question').hide();
} else if($('#Q00D9D17E_text').text() == 'Phone' && $('#Q00D9D17F_text').text() != 'English') {
    $('#Q9a_ImproveNonEnglishComments_question').show();
$('#Q9b_ImproveEnglishComments_question').show();
} else {
    $('#Q9a_ImproveNonEnglishComments_question').hide();
$('#Q9b_ImproveEnglishComments_question').hide();
}; 

if($('#Q00D9D17E_text').text() == 'Email' && $('#Q00D9D17F_text').text() != 'English'){
    $('#Q9a_ImproveNonEnglishComments_question').show();
}

//EMAIL ON CLICK
$('#COMMENT_MODE_question input:radio').click(function() {
if($('#Q00D9D17E_text').text() == 'Email' && $('#Q00D9D17F_text').text() == 'English' && $('#Q00B77BFD_Q00B77BFE_A3').is(':checked')){
    $('#Q9a_ImproveNonEnglishComments_question').show();
$('#Q9b_ImproveEnglishComments_question').hide();
} else if($('#Q00D9D17E_text').text() == 'Email' && $('#Q00D9D17F_text').text() != 'English' && $('#Q00B77BFD_Q00B77BFE_A3').is(':checked')){
    $('#Q9a_ImproveNonEnglishComments_question').hide();
$('#Q9b_ImproveEnglishComments_question').show();
} else {
    $('#Q9a_ImproveNonEnglishComments_question').hide();
$('#Q9b_ImproveEnglishComments_question').hide();
}; 
});

//skip to page 10 if radio question unselected
$('.nextButton').unbind();
$('.nextButton').click(function() {
if($('#COMMENT_MODE_question input:radio:checked').length == 0) {
  $('[name=nextpage]').val(10);
  localStorage.setItem('skipped',1)
} else {
  localStorage.setItem('skipped',0)
}
nextButtonClicked();
});

}; //end page 8

var curPage = parseInt($('input[name=currentpage]').val(), 10);
if (curPage == 10 && localStorage.skipped == 1) {
     $('.backButton').unbind();
     $('.backButton').click(function() {
          $('[name=nextpage]').val(8);
          nextButtonClicked();
    });
};

//Phone anonymous - hide finish button and close with back button so survey is not submitted
$('#Q00EC8723_text').hide();
$('#Q00EC8722_text').hide();

if($('#Q00EC8722_text').text() == 'Phone' && $('#Q00EC8723_text').text() == 'Customer asked to be anonymous') {
   $('.nextButton').hide();
   $('.backButton').html('Close');
   $('.backButton').unbind();
   $('.backButton').click(function(){
       window.close();      
   });
};


});
