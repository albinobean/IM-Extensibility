//Updated East Relationship
$(document).ready(function () {
    updateHeaders();
    footerSetUp();
    addFooterText();
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    switch (curPage) {

        case 1:
            findDeviceType();
            addVideoRandomizerOnNextButton();
            break;
        case 2:
            addVideoSurvey();
            break;
    }
});

// Finding Device Type
function findDeviceType() {
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
            }
            else { return 'Desktop'; }
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
        $("#Q0006D92B_Q0006D92C_A1").prop("checked", true);
    } else if (dType == "Tablet") {
        $("#Q0006D92B_Q0006D92C_A2").prop("checked", true);
    } else if (dType == "Phone") {
        $("#Q0006D92B_Q0006D92C_A3").prop("checked", true);
    }

}

//Add Video Randomization
function addVideoRandomizerOnNextButton() {
    $('.nextButton').unbind();
    $('.nextButton').click(function () {
        if (isPreviewMode() == 1){
            $("#Q000F4EA9_answer").siblings().click()
            nextButtonClicked();
        } else {
            SelectFirstRadio('VideoRandomizer', false);
            nextButtonClicked();
        }
    });
}

function updateHeaders() {
    centerHeaders("#Q00070729", 20, 3);
}
function centerHeaders(tableID, percent, colBet) {
    $(tableID + '_scale_header table tbody tr td').attr('class', "ScaleHeaderCenter");
    for (i = 0; i < colBet; i++) {
        $(tableID + '_scale_header table tbody tr td:nth-child(1)').after('<td></td>');
    }
    $(tableID + '_scale_header table tbody tr td').attr('style', "width:" + percent + "%;");
}

//Footer set up
function footerSetUp() {
/* This is for the first table */ remakeHeader("#Q0000005C", 6, 0, 1);

    var selectedVal = "";
    var selectedVal = $('#Brand').val();
    var optLan = $('input[name="Language"').val();
    //NRG Home
    if (selectedVal == 0 || optLan == "nrgh") {
        sessionStorage.logo = 2;
        sessionStorage.useBrand = selectedVal;
    }
    //Green Mountain Energy
    if (selectedVal == 1 || optLan == "gme") {
        sessionStorage.logo = 0;
        sessionStorage.useBrand = selectedVal;
    }
    //Energy Plus
    if (selectedVal == 2 || optLan == "ep") {
        sessionStorage.logo = 1;
        sessionStorage.useBrand = selectedVal;
    }

    //Brandon here added option 3
    if (selectedVal == 3) {
        sessionStorage.logo = 3;
        sessionStorage.useBrand = selectedVal;
    }

    if (sessionStorage.logo == 0) {
        $("#headerLogoImage").attr("src", "https://nrg.allegiancetech.com/surveys/images/SDQUN3/Preview/gme_logo_new.png");
        $("#headerLogoImage").attr("style", "width:240px !important; height:auto;");
    }
    if (sessionStorage.logo == 1) {
        $("#headerLogoImage").attr("src", "https://nrg.allegiancetech.com/surveys/images/SDQUN3/Preview/ep_logostacked.jpg");
        $("#headerLogoImage").attr("style", "width:200px !important; height:auto;");
    }

    if (sessionStorage.logo == 2) {
        $("#headerLogoImage").attr("src", "https://nrg.allegiancetech.com/surveys/images/SDQUN3/Preview/nrg_r.jpg");
        $("#headerLogoImage").attr("style", "width:200px !important; height:auto;");
    }

    //Brandon added option 3 here
    if (sessionStorage.logo == 3) {
        $("#headerLogoImage").attr("src", "https://nrg.allegiancetech.com/surveys/images/SDQUN3/cirrofc.png");
        $("#headerLogoImage").attr("style", "width:200px !important; height:auto;");
    }
}

function remakeHeader(tableName, colTotalScale, colBefore, colAfter) {
    try {
        var newColSpan = colTotalScale - colAfter - colBefore;
        if (colBefore > 0) { $(tableName + ' .spacerColumn').after("<td colspan = '" + colBefore + "'>&nbsp;</td>"); }
        $(tableName + ' .ScaleHeader').html($(tableName + ' .ScaleHeader').html().replace('="' + colTotalScale + '"', '="' + newColSpan + '"'));

        var emptyColSpan = colAfter + colBefore;
        if (emptyColSpan > 0) {
            var sTablehtml = $(tableName + ' .ScaleHeader').html();
            var sTableHeader = "<td colspan = '" + emptyColSpan + "'></td>";
            $(sTableHeader).appendTo(tableName + ' .ScaleHeader')
        }
    }
    catch (e) { }
}


//Insert the footer
function addFooterText() {
    //alert("This is brand: " + sessionStorage.useBrand);
    var brand = sessionStorage.useBrand;
    var canvas = document.getElementsByClassName("left bottomNavigation");
    var footHead = document.createElement("div");
    footHead.className = "footerHead";

    /*
    if (brand == "") {
    var footer = document.createElement("div");
    footer.innerHTML = "<p>This survey is being conducted by MaritzCX, an InMoment company, an independent third party research firm, on behalf of NRG Home. If you need technical assistance or have questions about the survey, please email the survey manager at <a href='mailto:NRGHomeSurvey@inmoment.com?Subject=Onboarding%20Survey'>NRGHomeSurvey@inmoment.com</a>.<br><br>Your responses may be shared with NRG Home to help improve your future interactions with us. If you have any questions about how NRG Home uses your information, please see <a href='https://www.nrghomepower.com/nrg-home-privacy-policy/' target='_blank'>NRG Home's Privacy Statement</a>.</p><br>";
    footHead.appendChild(footer);
    canvas[0].appendChild(footHead);
    }
    */

    if (brand == 0) {
        var footer = document.createElement("div");
        footer.innerHTML = "<p>This survey is being conducted by MaritzCX, an InMoment company, an independent third party research firm, on behalf of NRG Home. If you need technical assistance or have questions about the survey, please email the survey manager at <a href='mailto:NRGHomeSurvey@inmoment.com?Subject=Relationship%20Survey'>NRGHomeSurvey@inmoment.com</a>.<br><br>Your responses may be shared with NRG Home to help improve your future interactions with us. If you have any questions about how NRG Home uses your information, please see NRG Home's <a href='https://www.nrghomepower.com/nrg-home-privacy-policy/' target='_blank'>Privacy Statement</a>.</p><br>";
        footHead.appendChild(footer);
        canvas[0].appendChild(footHead);
    }

    if (brand == 1) {
        var footer = document.createElement("div");
        footer.innerHTML = "<p>This survey is being conducted by MaritzCX, an InMoment company, an independent third party research firm, on behalf of Green Mountain Energy. If you need technical assistance or have questions about the survey, please email the survey manager at <a href='mailto:GMESurvey@inmoment.com?Subject=Relationship%20Survey'>GMESurvey@inmoment.com</a>.<br><br>Your responses may be shared with Green Mountain Energy to help improve your future interactions with us. If you have any questions about how Green Mountain Energy uses your information, please see Green Mountain Energy's <a href='https://www.greenmountainenergy.com/privacy-policy/' target='_blank'>Privacy Statement</a>.</p><br>";
        footHead.appendChild(footer);
        canvas[0].appendChild(footHead);
    }

    if (brand == 2) {
        var footer = document.createElement("div");
        footer.innerHTML = "<p>This survey is being conducted by MaritzCX, an InMoment company, an independent third party research firm, on behalf of Energy Plus. If you need technical assistance or have questions about the survey, please email the survey manager at <a href='mailto:EnergyPlusSurvey@inmoment.com?Subject=Relationship%20Survey'>EnergyPlusSurvey@inmoment.com</a>.<br><br>Your responses may be shared with Energy Plus to help improve your future interactions with us. If you have any questions about how Energy Plus uses your information, please see Energy Plus' <a href='https://www.energypluscompany.com/care/terms.php' target='_blank'>Privacy Statement</a>.</p><br>";
        footHead.appendChild(footer);
        canvas[0].appendChild(footHead);
    }

    if (brand == 3) {
        var footer = document.createElement("div");
        footer.innerHTML = "<p>This survey is being conducted by MaritzCX, an InMoment company, an independent third party research firm, on behalf of Cirro Energy. If you need technical assistance or have questions about the survey, please email the survey manager at <a href='mailto:CirroSurvey@inmoment.com?Subject=Relationship%20Survey'>CirroSurvey@inmoment.com</a>.<br><br>Your responses may be shared with Cirro Energy to help improve your future interactions with us. If you have any questions about how Cirro Energy uses your information, please see Cirro Energy's <a href='https://www.cirroenergy.com/GetResource.axd?resource_id=4&resource_code=PRIVACY_2016&cd=inline&name=Cirro_Privacy_Statement_Update_05182016.pdf' target='_blank'>Privacy Statement</a>.</p><br>";
        footHead.appendChild(footer);
        canvas[0].appendChild(footHead);
    }

}


//***Begin VoxPopMe Snippet ***/

function getVideoSettings() {
    var surveyName = "East Relationship Survey";

    return {
        productionProjectId: "e7e1955d5d5dc6c7f331cc64d639309a",
        testProjectId: "90d01e68979577eccaf80a5515d32b2a",
        captureType: "video-only",
        minRecordTime: 0,
        maxRecordTime: 180,
        additionalData: getVpmData(surveyName),
        locale: 'en_US'
    }
}

function getVpmData(surveyName) {
    var vpmData = parseVPMData()
    var mcx_respondentKey = getRespondentKey();

    vpmData["Survey Name"] = surveyName;
    vpmData["Respondent"] = encodeURI($('input[name="respondent"]')[0].value);
    vpmData["AuthKey"] = mcx_respondentKey;
    vpmData["vpmAutoApprove"] = true;
    vpmData["sentiment"] = true;
    return vpmData;
};

function getRespondentKey() {
    var mcx_respondentKey = $('input[name=respondentkey]').val();
    mcx_respondentKey = mcx_respondentKey != "" ? mcx_respondentKey : "test";
    return mcx_respondentKey;
}

function parseVPMData() {
    try {
        var data = JSON.parse($(".alleg-vpmData").text().replace(/\s/g, ' '));
        console.log("successfully loaded piped data into vpm");
        return data;
    } catch (err) {
        if (isPreviewMode() == 1)
            alert("VPM Additiona Data failed to parse. This message only shows up in preview mode.");
        else
            return {};
    }
}

function addVideoSurvey() {
    var vpmSettings = getVideoSettings()

    $(".alleg-vpm").replaceWith('<div class="vpm-capture-widget"></div>')

    var vpmProjectId = $('input[name=respondentkey]').val() != '' ? vpmSettings.productionProjectId : vpmSettings.testProjectId;

    vpm_widget_config = {
        project_id: vpmProjectId,
        additional_data: vpmSettings.additionalData,
        settings: {
            locale: vpmSettings.locale,
            min_recording_time: vpmSettings.minRecordTime,
            max_recording_time: vpmSettings.maxRecordTime // reduce time by seconds to shorten max record time
        },
        disable_next_button: function () { },
        enable_next_button: function () {
            uploadVideoSuccessful(this.id)
        },
        capture_type: vpmSettings.captureType
    };

    loadVPMScript();

    $('.nextButton').unbind('click');
    $('.nextButton').click(function () {
        checkUploadStatus();
    });
}

function loadVPMScript() {
    var url = "https://capture.voxpopme.net/main.js";

    $.ajax({
        url: url,
        dataType: "script",
        success: function () { console.log("VoxPopMe script loaded"); }
    });
}

function uploadVideoSuccessful() {
    //set values in platform
    var respondentId = $('input[name="respondent"]')[0].value;
    $('#VideoPublished').val(1);
    $('#VideoUploadId').val(respondentId);
    $("#VideoURL").val("https://www.voxpopme.com/portal/search/" + $('input[name="respondent"]')[0].value + "/responses");

    //update UI elements
    $(".alleg-nextMessage" + " > span > div").text('Please click "Next" to complete the survey.').css("font-size", "x-large")
    $(".alleg-hideOnUpload").hide()
}

function checkUploadStatus() {
    isVideoUploaded = $('#VideoPublished option:selected').text();
    preferWrittenComment = $("#Written_question .checked").length == 1

    if (preferWrittenComment) {
        nextButtonClicked();
    } else if (isVideoUploaded == 'Yes') {
        nextButtonClicked();
    } else {
        //$('.alleg-VideoLoadStatus').show();
        $('.nextButton').unbind('click');
        $('.nextButton').click(function () {
            nextButtonClicked();
        });
    }
    return true;
}
function SelectFirstRadio(qTag,allowAnswerChange){
    //The HTML of the question is different if it is using same-page display logic
    //This should be true if the answers' display logic is based on previous questions on the same page
    var answerSelected=false;
    var visibleRowsIdentifier='#' + qTag + '_question .question table tr:not("row-disabled")';
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