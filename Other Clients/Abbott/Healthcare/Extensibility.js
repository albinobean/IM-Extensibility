// TABLES WITH N/A BUTTON
$(document).ready(function () {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    if (curPage == 15) {
        $("#Q00001DE2 .scale th.Scale1Cell").attr('colSpan', "11");
        $("#Q00001DE2.mobileTable tr:nth-of-type(3) th.Scale1Cell").attr('colSpan', "11");
    }
    if (curPage == 16) {
        $("#Q00004DBD .scale th.Scale1Cell").attr('colSpan', "11");
        $("#Q00004DCC .scale th.Scale1Cell").attr('colSpan', "11");
        $("#Q00004DCC.mobileTable tr:nth-of-type(3) th.Scale1Cell").attr('colSpan', "11");
    }
    if (curPage == 18) {
        $("#Q00004F0D .scale th.Scale1Cell").attr('colSpan', "11");
        $("#Q00004F0D.mobileTable tr:nth-of-type(3) th.Scale1Cell").attr('colSpan', "11");
    }
});

// MAKE CHECKBOXES BEHAVE LIKE BUTTONS
$(document).ready(function () {
    $('div[class*="icheckbox"] input').on('ifChanged', function(e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('checked');
        } else {
            $(this).closest('tr').removeClass('checked');
        }
    })
});

// MAKE RADIO BUTTONS BEHAVE LIKE BUTTONS
$(document).ready(function () {
    $('div[class*="iradio"] input').on('ifChanged', function(e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('checked');
        } else {
            $(this).closest('tr').removeClass('checked');
        }
    })
});

// PROGRESS BAR
$(document).ready(function() {
    $('.navigationContainer ul li').each(function(){
        if($(this).hasClass("done")){
            return true;
        }else{
            $(this).prev().addClass("donelast");
            return false; 
        }
    });
});

// CUSTOM STAR RATING
$(document).ready(function() {
$(".stars").each(function() {
    var star = $(this);
    var comboId = star.attr("id").slice(0, -'_stars'.length);
    var combo = $('#' + comboId);
 
    $(star).raty({
        path: 'https://abbottfreestyle.mcxplatform.de/surveys/images/BR6TFH/Preview/',
        starOn: 'imo_staron.png',
        starOff: 'imo_staroff.png',
        number: $('option', combo).size() - 1,
        width: false,
        score: starsValueFromSelectValue(combo),
        hints: $("option", combo).toArray().reduce(function(acc, o) {
            return o.getAttribute('value')? acc.concat([o.innerHTML]) : acc;
        }, []),
        click: function (score, evt) {
            InqUtils.SyncComboBoxToStars(comboId, score);
        }
    });
    $(star).attr("tabindex", "0");
    starsKeyboardHook(star);
});
});

// FOOTER
$(document).ready(function () {
    var toInsert = document.createElement("div");
    var strlang = $("input[name='language']").val();
    $("body").addClass(strlang);
    
    var privacylnk = "https://inmoment.com/privacy-policy/english/";
    var privacy = "Privacy Policy";
    var contactlnk = "https://inmoment.com/contact/";
    var contact = "Contact us";
    
    var htmltext = "<div class='container'><a href='"+ privacylnk +"' target='_blank' title='"+ privacy +"'>"+ privacy +"</a>|<a href='"+ contactlnk +"' target='_blank' title='"+ contact +"'>"+ contact +"</a></div>";
    
    toInsert.id = "alleg-footer";
    toInsert.innerHTML = htmltext;
    var exist = document.getElementById("mainForm");
    if (exist !== null)
    exist.appendChild(toInsert);
});

// COUNTRY SELECTION
$(document).ready(function () {
    var lA = parseInt($('#mcx-tag-A').val());
    $("body").addClass("country" + lA);
});

//This is for the fake language selector that jumps to page 1 and selects real selector to translate page 2
$(document).ready(function () {
    var strlang = $("input[name='language']").val();
    
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
        switch(curPage) {
            case 1:
                if(sessionStorage.MCXDesiredLanguage){
                    $("#LanguageSelector option").each(function() {
                        if($(this).text() == sessionStorage.MCXDesiredLanguage) {
                            $(this).attr('selected', 'selected');
                        }
                    });
                };
                sessionStorage.MCXDesiredLanguage=$('#LanguageSelector option:selected').text();
                nextButtonClicked();
                break;
            case 2:
                $('.backButton').hide(); //Hide the back button since it is the first respondent-facing page
                //If they change the language, go back and then come back to refresh the page
                if(strlang=='Hebrew' || strlang=='Arabic' || strlang=='Moroccan Arabic' ){$('#AltLanguageSelector').css('float','left');}
                if(sessionStorage.MCXDesiredLanguage){
                    $("#AltLanguageSelector option").each(function() {
                        if($(this).text() == sessionStorage.MCXDesiredLanguage) {
                            $(this).attr('selected', 'selected');
                        }
                    });
                };
                $('#AltLanguageSelector').change(function(){
                    sessionStorage.MCXDesiredLanguage=$('#AltLanguageSelector option:selected').text();
                    backButtonClicked();
                });
                break;
//  End of language selector code
            case 5:
                $('.nextButton').unbind();
                $('.nextButton').click(function () {
                    age = parseInt($('input[name = "Q0000039E.Q0000039F"]').val())
                    // This checks the Age that is provided, ensuring that respondents are between the age of 18 to 80
                    if (parseInt($('input[name = "Q0000039E.Q0000039F"]').val()) < 18 || parseInt($('input[name = "Q0000039E.Q0000039F"]').val()) > 80) {
                        $("#Q00005044_Q00005045_A1 + .iCheck-helper").click()
                    // This checks to make sure that Diabetes is checked
                    } else if (!$("#Q000003A7_Q000003A8_A4").is(":checked")) {
                        $("#Q00005048_Q00005049_A1 + .iCheck-helper").click()
                    }
                    nextButtonClicked();
                });
                break;
            case 6:
                $('.nextButton').unbind();
                $('.nextButton').click(function () {
                    // This checks to make sure that answers 4,5,6,or 7 are checked, otherwise it clicks Term for MethodTerm
                     if (!$("#Q000003B7_Q000003B8_A4").is(":checked") && !$("#Q000003B7_Q000003B8_A5").is(":checked") && !$("#Q000003B7_Q000003B8_A6").is(":checked") && !$("#Q000003B7_Q000003B8_A7").is(":checked")) {
                         $("#Q0000504C_Q0000504D_A1 + .iCheck-helper").click();
                    } else {
                         $("#Q0000504C_Q0000504D_A2 + .iCheck-helper").click();
                    }
                nextButtonClicked();
                });
                break;
            case 8:
                // Sets a flag to be either one answer or multiple answers depending on number of checked checkboxes
                $('.nextButton').unbind();
                $('.nextButton').click(function () {
                    var checkboxes = $('input[type="checkbox"]:checked').length
                    if (checkboxes == 1) {
                        $("#Q0000C3C7_Q0000C3C8_A1 + .iCheck-helper").click()
                    } else {
                        $("#Q0000C3C7_Q0000C3C8_A2 + .iCheck-helper").click()
                    }
                    nextButtonClicked();
                });
                break;
            case 15:
                        //$("#Q00001DE2_table").addClass("alleg-single-button")
                        if($('.is-mobile').length > 0){
                            $('[id$="_row"]:visible').after($('.ScaleHeader.SingleScaleHeader'))
                        };  
/*                        var a = document.getElementsByClassName("Scale1Cell")[10];
                        $(a).after('<th style="width: 3.5%; border-top: 0 !important; border-bottom: 1px solid #253746 !important;" class="clearcell"></th>');
                        for (i = 22; i <= 203; i += 12) {
                            var a = document.getElementsByClassName("Scale1Cell")[i];
                            $(a).after('<td width="3.5%" class="clearcell"></td>');
                        }
                        break; */
            case 18:
                fixedRandomizationArray = [1,2,3,4,5,6,7,8,9]; 
                var randomAnswerOptionArray = fixedRandomizationArray.sort(sortRandom);  
  
                function sortRandom(a, b) {  
                   return 0.5 - Math.random();
                }
    
                $('[id*="Q12_"]').each(function(){
                    questionTag = this.id.replace('_question','') 
                    for(i=0;i<=randomAnswerOptionArray.length;i++){
                        $('#'+questionTag+'_question tr:eq(10)').before($('#'+questionTag+'_question tr:eq('+randomAnswerOptionArray[i]+')'))
                    };
                });
                break;

            case 20:
                // Obtains the age from S1
                age = parseInt(document.querySelector("#Q0019CAA9_text > span > div").innerText)

                // Inserts text after the numeric box
                var tpyText
                var yrsAgo
                if($("input[name='language']").val() == "english") {
                    tpyText = "<span>times per year</span>"
                    yrsAgo = "<span>years ago</span>"
                } else if($("input[name='language']").val() == "french") {
                    tpyText = "<span>fois par an</span>"
                    yrsAgo = "<span>ans</span>"
                } else if($("input[name='language']").val() == "german") {
                    tpyText = "<span>Mal im Jahr</span>"
                    yrsAgo = "<span>Jahre</span>"
                } else if($("input[name='language']").val() == "japanese") {
                    tpyText = "<span>?/?</span>"
                    yrsAgo = "<span>??</span>"
                }
                $("#Q13").after(tpyText)
                $("#Q13_question > span").css("-webkit-text-size-adjust","none").css("font-feature-settings","liga","kern").css("-webkit-font-smoothing","antialiased").css("font","400 1rem / 130% 'IBM Plex Sans', Arial, Helvetica, sans-serif !important").css("color","#001d30").css("margin-left","10px").css("padding:","0").css("box-sizing","border-box")
                $("#Q14").after(yrsAgo)
                $("#Q14_question > span").css("-webkit-text-size-adjust","none").css("font-feature-settings","liga","kern").css("-webkit-font-smoothing","antialiased").css("font","400 1rem / 130% 'IBM Plex Sans', Arial, Helvetica, sans-serif !important").css("color","#001d30").css("margin-left","10px").css("padding:","0").css("box-sizing","border-box")
                // Clears out the __Years box when "Less than one year" is checked
                $("#Q000BBCED_Q000BBCEE_question > div > ins").attr("onclick","clearYears()")
                $("#Q000BBCED_Q000BBCEE_question > span > div > label").attr("onclick","clearYears()")
                // Unchecks "Less than one year" when __Years box is typed in
                $("#Q14").keyup(function() {
                    document.querySelector("#Q000BBCED_Q000BBCEE").checked = false
                    $("#Q000BBCED_Q000BBCEE").iCheck("update")
                })
                $('.nextButton').click(function () {
                    if(parseInt(document.querySelector("#Q14").value) > age) {
                        return false;
                    }
                    nextButtonClicked()
                });
                break;
         case 21:
                 var scriteria = $('#mcx-tag-Q26').val();
                 var srespondentkey = $('#Q00000008_text').text()
                 var sPID = (42197 * parseInt(srespondentkey)) - 38557
            
   //If the last question is not answered redirect to the term link, else redirect to the completed link
                 if (scriteria == "<!--mcx-Q26-->") { 
                    var sURL = 'https://dkr1.ssisurveys.com/projects/end?rst=2&psid=' + srespondentkey;
                 } else {
                    var sURL = 'https://dkr1.ssisurveys.com/projects/end?rst=1&psid=' + srespondentkey + '&high='+sPID
                }
                window.location.href = sURL;
                break;
        }
    });
    // Used in case 20 to empty the __Years box
    function clearYears() {
        if(document.querySelector("#Q000BBCED_Q000BBCEE").checked) {
            document.querySelector("#Q14").value = ""
        }
    }
    
    var age