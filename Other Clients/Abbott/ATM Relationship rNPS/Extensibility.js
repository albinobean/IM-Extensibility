$(window).on('resize', function () {
    fixQ7ButtonSize()
});
function fixQ7ButtonSize() {
    var divHeight = $('#Q7_MaintainRelationship_row > td:nth-child(3) > label:nth-child(2)').height();
    $('#Q7_MaintainRelationship_row > td:nth-child(1) > label:nth-child(2)').css('height', divHeight + 'px');
    $('#Q7_MaintainRelationship_row > td:nth-child(2) > label:nth-child(2)').css('height', divHeight + 'px');
    $('#Q7_MaintainRelationship_row > td:nth-child(4) > label:nth-child(2)').css('height', divHeight + 'px');
    $('#Q7_MaintainRelationship_row > td:nth-child(5) > label:nth-child(2)').css('height', divHeight + 'px');
    $('#Q7_MaintainRelationship_row > td:nth-child(1) > label:nth-child(2) > span:nth-child(1) > span:nth-child(1)').css('margin-top', '0');
    $('#Q7_MaintainRelationship_row > td:nth-child(2) > label:nth-child(2) > span:nth-child(1) > span:nth-child(1)').css('margin-top', '0');
    $('#Q7_MaintainRelationship_row > td:nth-child(4) > label:nth-child(2) > span:nth-child(1) > span:nth-child(1)').css('margin-top', '0');
    $('#Q7_MaintainRelationship_row > td:nth-child(5) > label:nth-child(2) > span:nth-child(1) > span:nth-child(1)').css('margin-top', '0');
}
function fadePageIn() { //fade in content to avoid content flashing
    $('.pageBackground').fadeIn(500)
    $('#headerLogoImage').css('visibility', 'visible').hide().fadeIn(500);
    $('#canvas').css('visibility', 'visible').hide().fadeIn(500);
    $('.bottomNavigation').css('visibility', 'visible').hide().fadeIn(500);
    $('.topNavigation').css('visibility', 'visible').hide().fadeIn(500);
}
function fixDescTextSpacing() {
    //fix margin bottom for descriptive texts
    $('[id$="_text"]').removeClass('object');
    $('[id$="_text"]').addClass('descText');
}
function anonymize(curPage) {
    if (curPage == 2) {
        if (!localStorage.returnPage) {
            fadePageIn();
        }
    } else {
        localStorage.removeItem('anonymous')
        localStorage.removeItem('returnPage')
    }
}
$(document).ready(function () {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    if (curPage != 2) fadePageIn();
    fixDescTextSpacing();
    anonymize(curPage);
    switch (curPage) {
        case 999:
            fixQ7ButtonSize(); //This question is never shown on page 1.  If it is moved, this needs to be moved
            break;
        case 6:
            //pipe forward 50percent question text
            $('#Q50percent_question').hide();
            $('#Q00AA11EA_text').css('display', 'none');
            if ($('#Q00AA11EA_text').text() == 'English' && $('#Q50percent').val() == "1") {
                $('#Q00B77C10_table').css('display', 'none'); // table
                $('#Q00B77D74_text').css('display', 'none'); // email
                $('#Q00B77D75_text').css('display', 'none'); //phone
            } else if ($('#Q00AA11EA_text').text() == 'English' && $('#Q00DB761A_text').text() == 'Phone') {
                $('#Q00B77C10_table').css('display', 'block'); // table
                $('#Q00B77D75_text').css('display', 'block'); // phone
                $('#Q00B77D74_text').css('display', 'none'); // email
            } else if ($('#Q00AA11EA_text').text() == 'English' && $('#Q00DB761A_text').text() == 'Email') {
                $('#Q00B77C10_table').css('display', 'block'); // table
                $('#Q00B77D74_text').css('display', 'block'); // email
                $('#Q00B77D75_text').css('display', 'none'); // phone
            } else {
                $('#Q00B77C10_table').css('display', 'none'); // table
                $('#Q00B77D74_text').css('display', 'none'); // email
                $('#Q00B77D75_text').css('display', 'none'); //phone
            }
            break;

    }

    /********ANONYMIZE ON PAGE  ALL OTHER PAGES****************/

   
    //end anonymize

    if (curPage == 2) {
        
        //fix language/respondent status/recommend dropdown
        $('#fakeLanguageSelector').removeClass('select2-hidden-accessible');
        $('#fakeLanguageSelector_question span:nth-child(1) > span:nth-child(1)').hide()

        $('#Respondent_Status').removeClass('select2-hidden-accessible');
        $('#Respondent_Status_question span:nth-child(1) > span:nth-child(1)').hide()

        $('#PromoterRecommendations').removeClass('select2-hidden-accessible');
        $('#PromoterRecommendations_question span:nth-child(1) > span:nth-child(1)').hide()

        //Page2 Phone and Email display logic
        $('#Q1b_LTRTranslatedComments').hide();
        $('#Q00AE9DF5_text, #Q00B0E536_text').hide();


        if ($('#Respondent_Status :selected').text() == '[1] Customer, and willing to participate' && $('#Q00AE9DF5_text').text() == 'Phone') {
            $("#Q1b_LTRTranslatedComments").show();
        } else if ($('#Q00AE9DF5_text').text() == 'Email' && $('#fakeLanguageSelector :selected').text() == 'English') {
            $("#Q1b_LTRTranslatedComments").show();
        } else if ($('#Q00B0E536_text').text() == 'Yes, submit now') {
            $("#Q1b_LTRTranslatedComments").show();
        }

        $('#Q00003D26_table input:radio').click(function () {
            if ($('#Respondent_Status :selected').text() == '[1] Customer, and willing to participate' && $('#Q00AE9DF5_text').text() == 'Phone') {
                $("#Q1b_LTRTranslatedComments").show();
            } else if ($('#Q00AE9DF5_text').text() == 'Email' && $('#fakeLanguageSelector :selected').text() == 'English') {
                $("#Q1b_LTRTranslatedComments").show();
            }
        });

        $('button.nextButton.minimal').unbind();
        $('button.nextButton.minimal').click(function () {
            if ($("#Q1b_LTRTranslatedComments").css("display") == "none") {
                $("#Q1b_LTRTranslatedComments, #Q1b_LTRTranslatedComments_not-specific, #Q1b_LTRTranslatedComments_too-little, .smart-probe-arrow-left, div.smart-probe-message").remove();
            }
            nextButtonClicked();
        });

        // Make dropdown width consistent
        $('select').css("width", "275px");

        /********ANONYMIZE ON PAGE 2****************/
        $('[type="text"]').parent().hide();
        if ((!localStorage.anonymous || !localStorage.anonymous == 0) && localStorage.anonymized != 1) {
            $('#Anonymous_question > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1) > ins:nth-child(2)').click();
            if ($('#Customer_Name').val() == "Anonymous") {
                $('#Customer_Name').val($('#OnlineCustomer_Name').val())
            };
            for (i = 6; i <= $('[type="text"]').length; i++) {
                i = i + 1
                var origPrepop = $('[type="text"]:eq(' + i + ')').val();
                $('[type="text"]:eq(' + (i - 1) + ')').val(origPrepop);
            };
            if (!sessionStorage.firstVisit || sessionStorage.firstVisit != "false") {
                $('.page2 .saveButton').click();
            };
            sessionStorage.firstVisit = "false"
            if (localStorage.returnPage) {
                parent.$('[name=nextpage]').val(localStorage.returnPage);
                nextButtonClicked();
            };
        };

        if (localStorage.anonymous == 1) {
            $('#Anonymous_question > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > ins:nth-child(2)').click();
            $('#alleg-footer > div > div.footer1 > a:nth-child(4)').css('color', 'red')
            for (i = 6; i <= $('[type="text"]').length; i++) {
                $('[type="text"]:eq(' + i + ')').val('');
                i = i + 1
            }
            $('#OnlineCustomer_Name').val($('#Customer_Name').val());
            $('#Customer_Name').val('Anonymous');
            localStorage.anonymized = 1
            if (localStorage.returnPage) {
                parent.$('[name=nextpage]').val(localStorage.returnPage);
                nextButtonClicked();
            };
        };

    }

    var count = $('.progressBar ul').children('.done').size() * 10;
    $('<div class="percentComplete">' + count + '%</div>').insertAfter('.progressBar ul');

    $("#LanguageSelector > option:nth-child(5)").remove();

    // Center Table Scale Headers
    if ($('[name="language"]').val() == 'arabic') {
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
    };

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

        //change text for Account Management Team text for Netherlands only 
        var textArr = $('#Q010A676B_text').text().split(",")
        var countryLookUp = $('#Q010A676A_text').text();
        var curLang = $('[name="language"]').val().toLowerCase();

        if (countryLookUp == "Norway" || countryLookUp == "Sweden" || countryLookUp == "Denmark" || countryLookUp == "Finland") {
            var newText = textArr[(textArr.indexOf(curLang) + 1)];
            $('#Q004EDFF9_Q1 > span:nth-child(1)').text(newText)
        };

    } else if (curPage == 5) {
        $(lastColTables[3]).attr("colspan", "11");
        $(lastColTables[3]).after("<th colspan='1' style='border:none; border-bottom: 1px solid #aaa;'></th>");

    } else if (curPage == 6) {
        $(lastColTables[4]).attr("colspan", "11");
        $(lastColTables[4]).after("<th colspan='1' style='border:none; border-bottom: 1px solid #aaa;'></th>");
    }

    var strlang = $("input[name='language']").val();
    if (strlang == "arabic") {
        $('body').css("direction", "rtl");
        $('#survey > fieldset > div.right.topNavigation > table').css("direction", "ltr");
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

    // The first page respondents see includes both Language Selector and the NPS question. The page will auto refresh when selecting a new language.

    var strlang = $("input[name='language']").val();

    var curPage = parseInt($('input[name=currentpage]').val(), 10);

    switch (curPage) {
        case 1:
            localStorage.anonymized = 0
            $('#survey').hide();
            let allLanguages = [];
            if (sessionStorage.MCXDesiredLanguage) {
                $("#LanguageSelector option").each(function () {
                    allLanguages.push($(this).text());
                    if (isLanguageSelected($(this).text())) {
                        $(this).attr('selected', 'selected');
                    }
                });
            };
            sessionStorage.allLanguages = JSON.stringify(allLanguages);
            sessionStorage.MCXDesiredLanguage = $('#LanguageSelector option:selected').text();
            localStorage.langArr = $('#Q00F52F08_text').text();
            // nextButtonClicked();
            break;
        case 2:
            console.log(sessionStorage.allLanguages);
            $('.backButton').hide(); //Hide the back button since it is the first respondent-facing page
            //If they change the language, go back and then come back to refresh the page
            if (strlang == 'Hebrew' || strlang == 'Arabic' || strlang == 'Moroccan Arabic') { $('#fakeLanguageSelector').css('float', 'left'); }
            if (sessionStorage.MCXDesiredLanguage) {
                $("#fakeLanguageSelector option").each(function () {
                    if (isLanguageSelected($(this).text())) {
                        $(this).attr('selected', 'selected');
                    }
                });
            };
            $('#fakeLanguageSelector').change(function () {
                sessionStorage.MCXDesiredLanguage = $('#fakeLanguageSelector option:selected').text();
                backButtonClicked();
            });
            break;
        default:
            sessionStorage.removeItem('MCXDesiredLanguage');
            break;
    }

    //***************POP-UP CONFIRMATION ON EXIT*******************
    //Pop-up
    var addEvent = function (obj, evt, fn) {
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

        addEvent(document, "mouseout", function (event) {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if ((!from || from.nodeName == "HTML") && event.clientY <= 100 && sessionStorage.getItem('firstVisit') != "true") {

                /**************COPY THE BELOW FOR EACH LANGUAGE - REMOVE ENGLISH FROM IF STATEMENT ABOVE***************/

                if ($('#fakeLanguageSelector :selected').val() == "0") {
                    var invite = $("#Q00CFBD37_text").text()
                    var accept = $("#Q00CFBD38_text").text()
                    var decline = $("#Q00CFBD39_text").text()
                }

                if ($('#fakeLanguageSelector :selected').val() == "1") {
                    var invite = 'Kami memperhatikan bahwa Anda tidak menyelesaikan survei.<br/>Apakah Anda ingin menutup survei Anda sekarang atau melanjutkan?'
                    var accept = 'Ya, kirim sekarang'
                    var decline = 'Tidak, saya ingin melanjutkan'
                }

                if ($('#fakeLanguageSelector :selected').val() == "2") {
                    var invite = $("#Q00CFBD3A_text").text()
                    var accept = $("#Q00CFBD3B_text").text()
                    var decline = $("#Q00CFBD3C_text").text()
                }

                if ($('#fakeLanguageSelector :selected').val() == "3") {
                    var invite = $("#Q00CFBD4C_text").text()
                    var accept = $("#Q00CFBD4D_text").text()
                    var decline = $("#Q00CFBD4E_text").text()
                }

                if ($('#fakeLanguageSelector :selected').val() == "4") {
                    var invite = 'Vi har bemærket, at du ikke har færdiggjort undersøgelsen.<br/>Vil du afslutte undersøgelsen nu, eller vil du fortsætte?'
                    var accept = 'Ja, send den nu'
                    var decline = 'Nej, jeg vil fortsætte'
                }

                if ($('#fakeLanguageSelector :selected').val() == "5") {
                    var invite = 'Wir haben festgestellt, dass Sie diese Umfrage nicht vollständig abgeschlossen haben.<br/>Möchten Sie die Umfrage jetzt beenden oder fortsetzen?'
                    var accept = 'Ja, jetzt beenden'
                    var decline = 'Nein, fortsetzen'
                }

                if ($('#fakeLanguageSelector :selected').val() == "6") {
                    var invite = 'We noticed that you didn’t complete the survey.<br/>Did you want to close your survey now or continue?'
                    var accept = 'Yes, submit now'
                    var decline = 'No, I want to continue'
                }

                if ($('#fakeLanguageSelector :selected').val() == "7") {
                    var invite = 'Hemos observado que no ha completado la encuesta. ¿Quiere cerrar la encuesta ahora o continuar?'
                    var accept = 'Sí, enviar ahora'
                    var decline = 'No, deseo continuar'
                }

                if ($('#fakeLanguageSelector :selected').val() == "8") {
                    var invite = 'Nos dimos cuenta de que no completó la encuesta.<br/>¿Quería cerrar su encuesta ahora o continuar?'
                    var accept = 'Sí, enviar ahora'
                    var decline = 'No, quiero continuar'
                }

                if ($('#fakeLanguageSelector :selected').val() == "9") {
                    var invite = 'Nous avons remarqué que vous n’aviez pas terminé l’enquête.Souhaitez-vous l’envoyer maintenant ou continuer d’y répondre ?'
                    var accept = 'Oui, je souhaite l’envoyer maintenant'
                    var decline = 'Non, je souhaite continuer'
                }

                if ($('#fakeLanguageSelector :selected').val() == "10") {
                    var invite = 'Huomasimme, että et tehnyt kyselyä loppuun.<br/>Haluatko sulkea kyselyn nyt vai jatkaa vastaamista?'
                    var accept = 'Kyllä, lähetä nyt'
                    var decline = 'Ei, haluan jatkaa'
                }

                if ($('#fakeLanguageSelector :selected').val() == "11") {
                    var invite = $("#Q00CFBD3D_text").text()
                    var accept = $("#Q00CFBD3E_text").text()
                    var decline = $("#Q00CFBD3F_text").text()
                }

                if ($('#fakeLanguageSelector :selected').val() == "12") {
                    var invite = 'Abbiamo rilevato che non ha completato il sondaggio.<br/>Desidera concludere il sondaggio adesso o proseguire?'
                    var accept = 'Sì, invia adesso'
                    var decline = 'No, desidero proseguire'
                }

                if ($('#fakeLanguageSelector :selected').val() == "13") {
                    var invite = $("#Q00CFBD40_text").text()
                    var accept = $("#Q00CFBD41_text").text()
                    var decline = $("#Q00CFBD42_text").text()
                }

                if ($('#fakeLanguageSelector :selected').val() == "14") {
                    var invite = $("#Q00CFBD43_text").text()
                    var accept = $("#Q00CFBD44_text").text()
                    var decline = $("#Q00CFBD45_text").text()
                }

                if ($('#fakeLanguageSelector :selected').val() == "15") {
                    var invite = 'We hebben vastgesteld dat u de enquête niet helemaal hebt ingevuld.<br/>Wilt u de enquête nu afsluiten of wilt u doorgaan?'
                    var accept = 'Ja, nu verzenden'
                    var decline = 'Nee, ik wil doorgaan'
                }

                if ($('#fakeLanguageSelector :selected').val() == "16") {
                    var invite = 'Vi la merke til at du ikke fullførte undersøkelsen.<br/>Vil du lukke undersøkelsen nå eller fortsette?'
                    var accept = 'Ja, send inn nå'
                    var decline = 'Nei, jeg vil fortsette'
                }

                if ($('#fakeLanguageSelector :selected').val() == "17") {
                    var invite = 'Zauwazylismy, ze ankieta nie zostala wypelniona.<br/>Czy chce Pan/Pani zamknac ankiete czy kontynuowac?'
                    var accept = 'Tak, przeslij ankiete.'
                    var decline = 'Nie, chce kontynuowac.'
                }

                if ($('#fakeLanguageSelector :selected').val() == "18") {
                    var invite = 'Percebemos que você não concluiu a pesquisa.<br/>Você deseja encerrar a pesquisa agora ou continuar?'
                    var accept = 'Sim, enviar agora'
                    var decline = 'Não, quero continuar'
                }

                if ($('#fakeLanguageSelector :selected').val() == "19") {
                    var invite = 'Verificámos que não concluiu o inquérito.<br/>Pretenderia terminar o inquérito agora ou continuar?'
                    var accept = 'Sim, submeter agora'
                    var decline = 'Não, pretendo continuar'
                }

                if ($('#fakeLanguageSelector :selected').val() == "20") {
                    var invite = $("#Q00CFBD46_text").text()
                    var accept = $("#Q00CFBD47_text").text()
                    var decline = $("#Q00CFBD48_text").text()
                }

                if ($('#fakeLanguageSelector :selected').val() == "21") {
                    var invite = 'Vi märkte att du inte slutförde undersökningen.<br/>Vill du stänga undersökningen nu eller fortsätta med den?'
                    var accept = 'Ja, skicka nu'
                    var decline = 'Nej, jag vill fortsätta'
                }

                if ($('#fakeLanguageSelector :selected').val() == "22") {
                    var invite = $("#Q00CFBD49_text").text()
                    var accept = $("#Q00CFBD4A_text").text()
                    var decline = $("#Q00CFBD4B_text").text()
                }

                if ($('#fakeLanguageSelector :selected').val() == "23") {
                    var invite = 'Kayitlarimiza göre anketi tamamlamadiginiz görülüyor.<br/>Simdi anketi kapatmak mi yoksa sürdürmek mi istiyorsunuz?'
                    var accept = 'Evet, anketi simdi gönder'
                    var decline = 'Hayir, devam etmek istiyorum'
                }

                if ($('#fakeLanguageSelector :selected').val() == "24") {
                    var invite = $("#Q00D68107_text").text()
                    var accept = $("#Q00D68108_text").text()
                    var decline = $("#Q00D68109_text").text()
                }

                if ($('#fakeLanguageSelector :selected').val() == "25") {
                    var invite = 'Všimli jsme si, že jste dotazník nedokoncili. <br/>Chcete nyní dotazník uzavrít, nebo pokracovat?'
                    var accept = 'Ano, odeslat nyní'
                    var decline = 'Ne, chci pokracovat'
                }

                /*************************END COPY*********************/

                javascript: (window.mcxAddModal = function () {
                    var logoURL = "https://add-abbott.allegiancetech.com/surveys/images/DRK2Q3/Preview/abbott_logov2.jpg"; //Update company logo for pop-up invite
                    window.declineSurvey = function () {
                        var child = document.getElementById('mcxInviteModal');
                        $('#POPUP').val('No, continue');
                        child.parentNode.removeChild(child);
                    };
                    window.acceptSurvey = function () {
                        $('#POPUP').val('YES');
                        $('input[name=nextpage]').val(10);
                        nextButtonClicked();
                        var child = document.getElementById('mcxInviteModal');
                        child.parentNode.removeChild(child);
                    };
                    var mcxInviteModal = document.createElement("div");
                    mcxInviteModal.setAttribute("id", "mcxInviteModal");
                    mcxInviteModal.innerHTML = '<div id="mcx_invite_div"><div id="mcx_logo_container">\
        <img src="https://add-abbott.allegiancetech.com/surveys/images/DRK2Q3/Preview/abbott_logov2.jpg" id="mcx_invite_logo" />\
        </div><div id="mcx_invite_content"><p id="mcx_invite_words">'+ invite + '</p>\
            </div><div id="mcx_buttons"><div id="mcx_accept" onclick="acceptSurvey()">'+ accept + '</div>\
        <div id="mcx_decline" onclick="declineSurvey()">'+ decline + '</div></div></div>';


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

    //Phone anonymous - hide finish button and close with back button so survey is not submitted
    $('#Q00EC8723_text').hide();
    $('#Q00EC8722_text').hide();

    if ($('#Q00EC8722_text').text() == 'Phone' && $('#Q00EC8723_text').text() == 'Customer asked to be anonymous') {
        $('.nextButton').hide();
        $('.backButton').html('Close');
        $('.backButton').unbind();
        $('.backButton').click(function () {
            window.close();
        });
    };
});

/// FOOTER
$(document).ready(function () {
    $('#divValidationMessageHeader').css("top", "0px")
    var toInsert = document.createElement("div");
    var strlang = $("input[name='language']").val();

    var lang = sessionStorage.MCXDesiredLanguage
    var langArr = localStorage.langArr.split(",")

    if (langArr.indexOf(lang) > -1) {
        var langIndex = langArr.indexOf(lang)
        var privacy = langArr[langIndex + 1]
        var company = "";
        var anonymous = langArr[langIndex + 3]
    } else {
        var privacy = "Privacy Statement";
        var company = "";
        var anonymous = "Anonymous Policy"
    }
    var companylnk = "https://www.maritzcx.com/terms-of-use/";
    var privacylnk = "https://www.corelaboratory.abbott/int/en/privacy-policy";
    var anonymouslnk = ""

    var htmltext = "<div class='container'><div class='footer1'><a href='" + privacylnk + "' target='_blank' title='" + privacy + "'>" + privacy + "</a> | <a href='" + companylnk + "' target='_blank' title='" + company + "'>" + company + "</a><span></span><a>" + anonymous + "</a></div><div class='footer2'></div></div>";

    /*toInsert.id = "alleg-footer";
    toInsert.innerHTML = htmltext;
    
    var isExisting = document.getElementById("mainForm");
    isExisting.appendChild(toInsert);
    $('#survey').append($('#alleg-footer')); //Only for original*/

    toInsert.id = "alleg-footer";
    toInsert.innerHTML = htmltext;

    var vorhanden = document.getElementById("mainForm");
    vorhanden.appendChild(toInsert);

    if (localStorage.anonymized == 1) {
        $('#alleg-footer > div > div.footer1 > a:nth-child(4)').css('color', 'red')
        $('#alleg-footer > div > div.footer1 > a:nth-child(4)').css('text-decoration', 'none')
        $('#alleg-footer > div > div.footer1 > a:nth-child(4)').attr('disabled', 'disabled')
    } else if (localStorage.anonymized == 0) {
        $('#alleg-footer > div > div.footer1 > a:nth-child(4)').css('color', 'white')
        $('#alleg-footer > div > div.footer1 > a:nth-child(4)').css('text-decoration', 'none')
    }
});
// END OF FOOTER

//POWERED BY MCX
$(document).ready(function () {

    var toInsert = document.createElement("div");
    var strlang = $("input[name='language']").val();

    var mcxCompanylnk = "https://www.maritzcx.com/";
    var privacy = "Privacy Statement";

    var htmltext = "<div class='container'><div class='poweredBy1'></div><a href='https://www.maritzcx.com/' target='_blank'><div class='poweredBy2'></div></a></div>";

    toInsert.id = "alleg-poweredBy";
    toInsert.innerHTML = htmltext;

    var isExisting = document.getElementById("mainForm");
    isExisting.appendChild(toInsert);
});

$(document).ready(function () {
    /*******************MODAL ANONYMOUS TEST******************/
    $('#alleg-footer > div > div.footer1 > a:nth-child(4)').click(function () {
        javascript: (window.mcxAddModal = function () {
            curLang = $('[name="language"]').val();
            if (curLang == "bahasa") {
                curLang = "indonesian"
            }
            if (curLang == "portuguese (europe)") {
                curLang = "portuguese"
            }
            curLangURL = "https://add-abbott.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=4VFNR6&preview=1&design=1&hidepreview=1&np=2&lg=" + curLang
            curLangURL = curLangURL.replace(/\s/g, "%20");

            var logoURL = "https://add-abbott.allegiancetech.com/surveys/images/DRK2Q3/Preview/abbott_logov2.jpg"; //Update company logo for pop-up invite
            var mcxInviteModal = document.createElement("div");

            mcxInviteModal.setAttribute("id", "mcxInviteModal");
            mcxInviteModal.innerHTML = '<iframe id="mcx_invite_div" src=' + curLangURL + '" name="' + Date.now() + '"</iframe>'
            if (!document.getElementById('mcxInviteModal')) {
                document.body.insertBefore(mcxInviteModal, document.body.firstChild);
            }
            document.getElementById("mcxInviteModal").style.cssText = 'background: rgba(0,0,0, .7); width: 100%; \
        height: 100vh; position: fixed; text-align: center; cursor: default; margin: 0; padding: 0; text-indent: 0; transition: all 0.8s; z-index: 9999;';
            document.getElementById('mcx_invite_div').style.cssText = "width: 540px; border-radius: 12px; border: 8px solid #1e94e8; position: absolute; left: calc(50% - 250px); \
        top: calc(50% - 250px); font-weight: bold; background: #fff; padding-top: 0px; padding-bottom: 0px; height: 525px;";

            var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (screenWidth < 912) {
                document.getElementById('mcx_invite_div').style.cssText = "width: 540px; border-radius: 12px; border: 8px solid #1e94e8; position: absolute; left: calc(50% - 280px); \
        top: calc(50% - 280px); font-weight: bold; background: #fff; padding-top: 0px; padding-bottom: 0px; height: 525px;";
                document.getElementById("mcx_invite_div").style.transform = "scale(0.7)";
            }
        })

        mcxAddModal();
    });
    //return '<iframe src="' + src + '" name="' + Date.now() + '" />';
    /********************END TEST***************************/
});

function isLanguageSelected(answerText) {
    // These arrays are used to translate in case the fake language selector and real language selectors have different values.
    // These arrays do not need to have all of the available languages, but the 2 arrays need to be in the same order.
    var englishLanguages = ['Polish'];
    var foreignLanguages = ['Polski'];
    var ndx;
    if (answerText == sessionStorage.MCXDesiredLanguage) {
        return true;
    } else if (englishLanguages.indexOf(sessionStorage.MCXDesiredLanguage) >= 0) {
        ndx = englishLanguages.indexOf(sessionStorage.MCXDesiredLanguage);
        return (foreignLanguages[ndx] == answerText)
    } else if (foreignLanguages.indexOf(sessionStorage.MCXDesiredLanguage) >= 0) {
        ndx = foreignLanguages.indexOf(sessionStorage.MCXDesiredLanguage);
        return (englishLanguages[ndx] == answerText)
    }
}