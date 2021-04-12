//Javascript for Welcome to Reliant Survey Updating
$(document).ready(function () {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    addFooterText();
    //setupSocial();
    //postGoogle2();
    //postYelp () ;
    //postGoogle2();
    switch (curPage) {
        case 1:
            setDeviceType();
            break;
        case 4:
            textAreaEmpty();
            break;
        case 7:
            andToOr1();
            break;
        case 8:
            andToOr2();
            break;
        case 16:
            compDate();
            break;
        case 17:
            addSocial();
            break;

    }
});

function addFooterText() {
    if ($("#template").hasClass("lang-index-0")) {
        $("<div id='footerText'><p>This survey is being conducted by MaritzCX, an InMoment company, an independent third party research firm, on behalf of Reliant.  If you need technical assistance or have questions about the survey, please email the survey manager at <a href='mailto:ReliantSurvey@inmoment.com?subject=Welcome%20to%20Reliant%20Survey'>ReliantSurvey@inmoment.com</a>.<br /><br />Your responses may be shared with Reliant to help improve your future interactions with us. If you have any questions about how Reliant uses your information, please see Reliant’s <a href='https://www.reliant.com/en/about/legal/privacy-statement.jsp'>Privacy Statement</a>. </p></div > ").insertAfter(".bottomNavigation ");
    } else if ($("#template").hasClass("lang-index-1")) {
        $("<div id='footerText'><p>MaritzCX, una compañía de investigación externa e independiente, está llevando a cabo esta encuesta a nombre de Reliant.  Si necesitas asistencia o tienes preguntas sobre la encuesta, por favor envía un email a <a href='mailto:ReliantSurvey@inmoment.com?subject=Welcome to Reliant Survey'>ReliantSurvey@inmoment.com</a>.<br /><br />Tus respuestas podrán ser compartidas con Reliant para ayudar a mejorar tus interacciones futuras con nosotros. Si tienes preguntas acerca de cómo Reliant usa tu información, por favor revisa la <a href='https://www.reliant.com/en/about/legal/privacy-statement.jsp'>Declaración de Privacidad de Reliant</a>. </p></div > ").insertAfter(".bottomNavigation ");
    }

}

/*----------Old Social Buttons-----------*/
/* Not using Yelp
var cbGoogle2 = "Q00055453_text";
//var cbYelp = "Q0004DE04_text";

$(document).ready(function () {
    setupSocial();
});

function setupSocial() {
    $('#' + cbGoogle2).html('<a class = "btnGoogle btnSocial" href = "Javascript:postGoogle2();">Google Review</a>');
    $('#' + cbYelp).html('<a class = "btnYelp btnSocial" href = "Javascript:postYelp();">Yelp Review</a>');
}

function postGoogle2() {
    var strGoogle2 = 'http://google.myreliant.com/?sid=REM_2018Mar_GMB_RWelcomeSurvey';
    $("#" + cbGoogle2).attr('checked', true);
    myWindow = window.open(strGoogle2, '', 'width=1200,height=800')
    myWindow.focus()
}

function postYelp() {
    var strYelp = 'http://yelp.myreliant.com';
    $("#" + cbYelp).attr('checked', true);
    myWindow = window.open(strYelp, '', 'width=1200,height=800')
    myWindow.focus()
}


var cbFB = "Q0000973C_Q0000973D_A1";
var cbTwitter = "Q0000973C_Q0000973D_A2";
var cbGoogle = "Q000483B0_text";
var cbGoogle2 = "Q000483B0_text";
var cbYelp = "Q00041721_text";
var strURL = "http%3A%2F%2Fwww.website.com%2F";
var strTitle = "Text for the Facebook Title";
var strSummary = "Text for the Facebook Summary";
var strTweet = "Default text for Twitter"


function setupSocial() {
    $('label[for="' + cbFB + '"]').html('<a class = "btnFacebook btnSocial" href = "Javascript:postFacebook();">Facebook</a>');
    $('label[for="' + cbTwitter + '"]').html('<a class = "btnTwitter btnSocial" href = "Javascript:postTwitter();">Twitter</a>');
    $('label[for="' + cbGoogle2 + '"]').html('<a class = "btnGoogle btnSocial" href = "Javascript:postGoogle2();">Google Review</a>');
    $('#' + cbYelp).html('<a class = "btnYelp btnSocial" href = "Javascript:postYelp();">Yelp Review</a>');
    $('#' + cbGoogle2).html('<a class = "btnGoogle btnSocial" href = "Javascript:postGoogle2();">Google Review</a>');
}

function postGoogle() {
    var strGoogle = 'https://plus.google.com/share?url=' + strURL;
    $("#" + cbGoogle).attr('checked', true);
    myWindow = window.open(strGoogle, '', 'width=500,height=500')
    myWindow.focus()
}

function postGoogle2() {
    var strGoogle2 = 'http://google.myreliant.com/?sid=REM_2018Mar_GMB_RRelationshipSurvey';
    $("#" + cbGoogle2).attr('checked', true);
    myWindow = window.open(strGoogle2, '', 'width=1200,height=800')
    myWindow.focus()
}


function postYelp() {
    var strYelp = 'http://yelp.myreliant.com';
    $("#" + cbYelp).attr('checked', true);
    myWindow = window.open(strYelp, '', 'width=1200,height=800')
    myWindow.focus()
}
*/

// Finding Device Type
function setDeviceType() {
    $("#DeviceType_question").hide();

    var deviceDetector = (function () {
        var ua = navigator.userAgent.toLowerCase();
        var detect = (function (s) {
            if (s === undefined) s = ua;
            else ua = s.toLowerCase();
            if (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(ua)) {
                return 'Tablet';
            } else if (/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(ua)) {
                return 'Phone';
            } else { return 'Desktop'; }
        });
        return {
            device: detect(),
            detect: detect,
            isMobile: ((detect() != 'desktop') ? true : false),
            userAgent: ua
        };
    }());

    var dType = deviceDetector.device;
    if (dType == "Desktop") {
        $("#Q0007E72F_Q0007E730_A1").prop("checked", true);
    } else if (dType == "Tablet") {
        $("#Q0007E72F_Q0007E730_A2").prop("checked", true);
    } else if (dType == "Phone") {
        $("#Q0007E72F_Q0007E730_A3").prop("checked", true);
    }
}

//Fill B02A IsEmpty - NOT WORKING
function textAreaEmpty() {
    $("#B02A_Text").keyup(function () {
        if ($("#B02A_Text").val().length <= 0) { //textarea is empty
            //select Yes
            $("#isEmpty_question #Q00089F3C_Q00089F3D_A1").trigger("click");
        } else { //textarea is not empty
            //select No
            $("#isEmpty_question #Q00089F3C_Q00089F3D_A2").trigger("click");
        }
    });
}

//Replace "And" with "Or" on Page 7 if multiple products selected
function andToOr1() {
    var curPage = parseInt($("input[name='currentpage']").val());
    var replaced = $("#Google-Nest_Received_questionText > div > strong").html().replace("and", "or");
    $("#Google-Nest_Received_questionText > div > strong").html(replaced);

    var replaced = $("#FeedbackMode_questionText > div > strong").html().replace("and", "or");
    $("#FeedbackMode_questionText > div > strong").html(replaced);
}
function andToOr2() {
    var replaced = $("#Q001C2A73_Q001C2A74_question > label > div > div > strong").html().replace("and", "or");
    $("#Q001C2A73_Q001C2A74_question > label > div > div > strong").html(replaced);
}

//End Replace "And" with "Or" on Page 7 if multiple products selected

//Fill in CompDate on Next Button click
function compDate() {

    $('.nextButton').unbind();
    $('.nextButton').click(function () {

        var d = new Date();
        var n = d.getTimezoneOffset();
        var Year = d.getFullYear();
        var Month = d.getMonth() + 1;
        var Day = d.getDate();
        //var Hour = d.getHours();
        //var Minute = d.getMinutes();
        //var Second = d.getSeconds();
        //var ampm = 'AM';

        if (Month < 10) {
            Month = '0' + Month;
        }
        if (Day < 10) {
            Day = '0' + Day;
        }

        /* if (Minute < 10) {
            Minute = '0' + Minute;
        }
        if (Second < 10) {
            Second = '0' + Second;
        } */

        /* var hourConvert = n / 60;
        var hourChanged = hourConvert + Hour;
        var hourChangedToCST = hourChanged - 5;
        if (hourChangedToCST > 12) {
            hourChangedToCST = hourChangedToCST - 12;
            if (hourChangedToCST < 10) {
                hourChangedToCST = '0' + hourChangedToCST;
            }
            var ampm = 'PM';
        } else {
            if (hourChangedToCST < 10) {
                hourChangedToCST = '0' + hourChangedToCST;
            }
        } */
        //var currentDate = Month + '/' + Day + '/' + Year + ' ' + hourChangedToCST + ':' + Minute + ':' + Second + ' ' + ampm;
        var currentDate = Month + '/' + Day + '/' + Year;


        // Make sure your question tag is "CompDate" or change the selector here to match whatever your question tag is
        $('#CompDate').val(currentDate);

        nextButtonClicked();
    });

}
//End of timestamping the CompDate question

//Add Facebook and Twitter
function addSocial() {
    // $('.alleg-tweetLink').text('I love Reliant');
    //Change LTR comment to replace with @reliantenergy on twitter logo click
    var comment = encodeURI($('.alleg-tweetLink').text().replace(/\bReliant\s?Energy\b/gi, '@reliantenergy').replace(/\bReliant\b/gi, '@reliantenergy').replace(/\[not answered\]/gi, ''));
    var func = "javascript:InqUtils.openWindow('https://twitter.com/intent/tweet?text=" + comment + "&hashtag=reliantenergy&url=','inq_new','new','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,height=400,width=400');";
    // $('.alleg-twitterLogo a').attr('href', func);
    console.log(func);
    //Add Twitter Follow button
    var twitter = $('<div style="text-align:center;"></div>');
    twitter.attr('id', 'twitter-root');
    var tFollow = $('<a id="twitterFollow" href="https://twitter.com/reliantenergy?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-related="ReliantEnergy" data-show-count="false">Follow @ReliantEnergy</a>');

    //Append LTR comment on Twitter image click
    twitter.append(tFollow);
    $('.alleg-twitterLogo').append(twitter);
    console.log(comment);
    var tshare = $('<a style="padding: 5px" id="twitterShareButton" href="' + func + '" class="twitter-mention-button" data-size="large" data-text="' + comment + '" data-related="ReliantEnergy" data-show-count="false"></a>');
    twitter.append(tshare);


    // Add Facebook Page w/out timeline
    var fb = $('<div></div>');
    fb.attr('id', 'fb-page');
    fb.html('<div class="fb-page" data-href="https://www.facebook.com/reliantenergy" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/reliantenergy" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/reliantenergy">Reliant Energy ®</a></blockquote></div>');
    $('.alleg-fbInsert').append(fb);
    //$('.alleg-fbLogo').append(fb);
    
    /*FB embedded page w/ timeline
    <div class="fb-page" data-href="https://www.facebook.com/reliantenergy" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/reliantenergy" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/reliantenergy">Reliant Energy ®</a></blockquote></div>
    */

    // Add Facebook LIKE button
    var fb = $('<div></div>');
    fb.attr('id', 'fb-root');
    fb.html('<div class="fb-like" data-href="https://www.facebook.com/reliantenergy" data-width="400" data-layout="button" data-action="like" data-size="large" data-share="true"></div>');
    $('.alleg-fbInsert').append(fb);
    //$('.alleg-fbLogo').append(fb);
}