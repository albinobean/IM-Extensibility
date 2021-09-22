$(document).ready(function () {
  var curPage = parseInt($('input[name=currentpage]').val(), 10);
  var strlang = $("input[name='language']").val();
  if (strlang == "hebrew") formatRTL();
  setLogo();
  InqUtils.setCanvasSize(400);
  switch (curPage) {
    case 1:
      SetMobileOrDesktop();
      storeSpeedboatLogo();
      if (sessionStorage.MCXDesiredLanguage) {
        $("#LanguageSelector option").each(function () {
          if ($(this).text() == sessionStorage.MCXDesiredLanguage) {
            $(this).attr('selected', 'selected');
            nextButtonClicked();
          }
        });
        if (sessionStorage.MCXDesiredLanguage.trim() == '') nextButtonClicked();
        console.log(sessionStorage.MCXDesiredLanguage + ' is not an answer in the real language selector');
      } else {
        sessionStorage.MCXDesiredLanguage = $('#LanguageSelector option:selected').text();
        nextButtonClicked();
      }
      break;
    case 2:
      $('.backButton').hide(); //Hide the back button since it is the first respondent-facing page
      //If they change the language, go back and then come back to refresh the page
      if (sessionStorage.MCXDesiredLanguage) {
        let matched = false;
        $("#fakeLanguageSelector option").each(function () {
          if ($(this).text() == sessionStorage.MCXDesiredLanguage) {
            $(this).attr('selected', 'selected');
            matched = true;

          }
        });
        if (!matched) console.log(sessionStorage.MCXDesiredLanguage + ' is not an answer in the fake language selector');
      };
      $('#fakeLanguageSelector').change(function () {
        sessionStorage.MCXDesiredLanguage = $('#fakeLanguageSelector option:selected').text();
        backButtonClicked();
      });
      break;
    case 7:
      remakeHeader("#Q00578699", 12, 0, 1);
      remakeHeader("#Q00AB4DD0", 12, 0, 1);
      break;
    case 10:
      redirect();
  }
});

function formatRTL() {

  $('body').css("direction", "rtl");
  $('.left').css("text-align", "right");
  $('.left table').css("float", "right");

}


function remakeHeader(tableName, colTotalScale, colBefore, colAfter) {
  try {
    var newColSpan = colTotalScale - colAfter - colBefore;
    if (colBefore > 0) { $(tableName + ' .QuestionCell').after("<td colspan = '" + colBefore + "'>&nbsp;</td>"); }
    $(tableName + ' .scale').html($(tableName + ' .scale').html().replace('="' + colTotalScale + '"', '="' + newColSpan + '"'));

    var emptyColSpan = colAfter + colBefore;
    if (emptyColSpan > 0) {
      var sTablehtml = $(tableName + ' .scale').html();
      var sTableHeader = "<td colspan = '" + emptyColSpan + "'></td>";
      $(sTableHeader).appendTo(tableName + ' .scale')
    }
  }
  catch (e) { }
}
function SetMobileOrDesktop() {
  $("#survey_method_question").hide();
  if ($.browser.mobile) {
    $('#Q00AB4FA1_Q00AB4FA2_A2').prop('checked', true);
  }
  else {
    $('#Q00AB4FA1_Q00AB4FA2_A1').prop('checked', true);
  }
}


//-----------DYNAMICALLY CHANGE LOGO BY SPEED BOAT PREPOP-------------
function storeSpeedboatLogo() {
  var selectedVal = "";

  var selected = $('#speedboat_question input[type=radio]:checked');

  if (selected.length > 0) {
    selectedVal = selected.val();
  }

  //-----------THIS SETS THE DEFAULT LOGO-------------
  if (!selectedVal) {
    localStorage.logo = 3;
  }
  //-----------IF AN OPTION IS PRE-POPPED DEFINE WHAT LOGO TO GRAB BASED ON THE QUESTION'S ANSWER-------------
  else {
    localStorage.logo = selectedVal;
  }
}
function setLogo() {
  //-----------FOLLOWING INCLUDE LINKS TO THE LOGO TO DISPLAY, WHICH SHOULD HAPPEN ON ALL PAGES-------------

  //-----------EBV ELEKTRONIK-------------
  if (localStorage.logo == 0) {

    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/ebvelektronik.jpg");
    $("#headerLogoImage").attr("style", "width:250px; height:50px;");
  }

  //-----------AVNET ABACUS-------------
  if (localStorage.logo == 1) {

    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/avnet_abacus.png");
    $("#headerLogoImage").attr("style", "width:366px; height:46px;");
  }

  //-----------AVNET SILICA-------------
  if (localStorage.logo == 2) {

    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/avnet_silica.png");
    $("#headerLogoImage").attr("style", "width:338px; height:46px;");
  }

  //-----------AVNET-------------
  if (localStorage.logo == 3) {
    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/avnet100yearsrgb_1.png");
    $("#headerLogoImage").attr("style", "width:300px; height:84px;");
  }

  //-----------AVNET ISRAEL (AVNET)-------------
  if (localStorage.logo == 4) {
    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/avnet.png");
    $("#headerLogoImage").attr("style", "width:250px; height:70px;");
  }

  //-----------MSC TECHNOLOGIES-------------
  if (localStorage.logo == 5) {

    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/msctechnologies.png");
    $("#headerLogoImage").attr("style", "width:300px; height:100px;");
  }

  //-----------AVNET MEMEC (AVNET)-------------
  if (localStorage.logo == 6) {

    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/avnet.png");
    $("#headerLogoImage").attr("style", "width:250px; height:70px;");
  }

  //-----------FLINT (AVNET)-------------
  if (localStorage.logo == 7) {

    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/avnet.png");
    $("#headerLogoImage").attr("style", "width:250px; height:70px;");
  }

  //-----------PREMIER FARNELL-------------
  if (localStorage.logo == 8) {

    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/farnellanavnetcompanylogo.png");
    $("#headerLogoImage").attr("style", "width:250px; height:81px;");
  }

  //-----------AVNET INTEGRATED-------------
  if (localStorage.logo == 9) {

    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/avnet_integrated_4c.png");
    $("#headerLogoImage").attr("style", "width:320px; height:29px;");
  }

  //-----------Farnell-------------
  if (localStorage.logo == 10) {

    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/Preview/farnell_logo_rgb_3.18.2019.jpg");
    $("#headerLogoImage").attr("style", "width:230px; height:79px;");
  }

  //-----------Newark-------------
  if (localStorage.logo == 11) {

    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/Preview/newark_logo_rgb_3.18.2019.jpg");
    $("#headerLogoImage").attr("style", "width:230px; height:79px;");
  }

  //-----------element14-------------
  if (localStorage.logo == 12) {

    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/Preview/element14logo_onwhite_3.18.2019.jpg");
    $("#headerLogoImage").attr("style", "width:230px; height:56px;");
  }

  //-----------element14China-------------
  if (localStorage.logo == 13) {

    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/Preview/element14logo_china.jpg");
    $("#headerLogoImage").attr("style", "width:170px; height:85px;");
  }

  //-----------CPC-------------
  if (localStorage.logo == 14) {

    $("#headerLogoImage").attr("src", "https://avnetcustomerinsights.allegiancetech.com/surveys/images/8JMA88/cpc_logo_2017.jpg?cacheToken=20190408151354");
    $("#headerLogoImage").attr("style", "width:155px; height:80px;");
  }
}


function redirect() {

  $('div.right.bottomNavigation').hide();

  var speedboat = $("#Q00D80452_text").text();

  if (speedboat == "CPC") {
    setTimeout(function () {
      window.location.href = "https://cpc.farnell.com/";
    }, 5000);
  }
  else if (speedboat == "element14") {
    setTimeout(function () {
      window.location.href = "https://sg.element14.com/";
    }, 5000);
  }
  else if (speedboat == "Newark") {
    setTimeout(function () {
      window.location.href = "https://www.newark.com/";
    }, 5000);
  }
  else if (speedboat == "Farnell") {
    setTimeout(function () {
      window.location.href = "https://uk.farnell.com/";
    }, 5000);
  }
  else if (speedboat == "PF" || speedboat == "Premier Farnell") {
    setTimeout(function () {
      window.location.href = "https://www.farnell.com/";
    }, 5000);
  }
  else if (speedboat == "Avnet Integrated") {
    setTimeout(function () {
      window.location.href = "https://www.avnet.com/wps/portal/us/solutions/integrated-solutions/overview/";
    }, 5000);
  }
  else if (speedboat == "EBV Elektronik") {
    setTimeout(function () {
      window.location.href = "https://www.avnet.com/wps/portal/ebv/";
    }, 5000);
  }
  else if (speedboat == "Avnet Abacus" || speedboat == "Avnet Silica" || speedboat == "Avnet" || speedboat == "Avnet Israel" || speedboat == "Avnet Memec" || speedboat == "Flint" || speedboat == "MSC Technologies") {
    setTimeout(function () {
      window.location.href = "https://www.avnet.com";
    }, 5000);
  } else {
    setTimeout(function () {
      window.location.href = "https://cn.element14.com/";
    }, 5000);
  }
}