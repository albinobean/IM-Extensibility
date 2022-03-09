var imThemeCallback = {
  // Called after a page is rendered (similiar to jquery's ready function callback)
  renderedPage: function (pageId, promptIds) {
    alert('callback triggered');
    validateSingleCheckbox();
    console.log(pageId);
    console.log(promptIds);
  }
}
function validateSingleCheckbox() {
  var curPage = parseInt(window.location.href.replace(/^.*\//, ''));
  if (curPage == 2) {

    testValidation();
    $('#nextPageLink[disabled]').click(function () {
      alert("REQUIRED FIELD - PLEASE SELECT BEFORE CONTINUING: 'By checking this box, I acknowledge that I have a duty to report any conduct that is perceived as unethical or in violation of Company policies or legal requirements....'");
    })
    $("#promptInput_501992").click(testValidation)
  } else {
    $('#nextPageLink').attr('disabled', false)
  }
};
function testValidation() {
  $('#nextPageLink').attr('disabled', !$("#promptInput_501992").is(':checked'));
}