var InMomentFavIcon='https://maritzcxenterpriseoperations.allegiancetech.com/surveys/images/VW8KA6/Preview/favicon16x16.png';
/*Center align Q9 and Q10 scale headers*/
$(document).ready(function () {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    setFavicon(InMomentFavIcon);
    centerHeaders("#Q001807B8",20,3);
    centerHeaders("#Q001807D5",20,3);
    centerHeaders("#Q0000AA82",9,9);
    addFooter();
    switch(curPage){
        case 5:
            $('.nextButton').unbind();
            $('.nextButton').click(function(){
                calculateRoleDiscrepancy();
                nextButtonClicked();
            });
    }
});
function setFavicon(iconUrl){
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = iconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
}
function centerHeaders(tableID, percent, colBet) {
    $(tableID + '_scale_header table tbody tr td').attr('class',"ScaleHeaderCenter");
    for (i=0; i < colBet; i++) {
    $(tableID + '_scale_header table tbody tr td:nth-child(1)').after('<td></td>');
    }
    $(tableID + '_scale_header table tbody tr td').attr('style',"width:" + percent + "%;");
}


/* FOOTER for multiple languages 
Styling of footer is handled in advanced.CSS */
function addFooter() {
 
    var llg = parseInt($('#mcx-tag-lg').val());
    var strlang = $("input[name='language']").val();
    var toInsert = document.createElement("div");
    
    if (strlang=='german') {
        var  privacyText='Datenschutzerklärung';
        var privacyLink='https://inmoment.com/privacy_policy/german/';
    } else {
        // English
        var privacyText='Data Protection & Privacy';
        var privacyLink='https://inmoment.com/privacy_policy/english';    
    }
    
    toInsert.innerHTML = "<table id='alleg-footer'><tbody><tr><td id='footerLogoCell'><img id=footerLogo src='https://maritzcxenterpriseoperations.allegiancetech.com/surveys/images/DPNK87/Preview/inmoment.png' style='width:200px; height:auto;' /></td><td id='privacyLinkCell'><a id='privacyLink' href='" + privacyLink + "' target='_blank' title='" + privacyText + "'>" + privacyText + "</a></td></tr></tbody></table>";
    document.body.appendChild(toInsert);

}
function calculateRoleDiscrepancy(){
    try{
        var actual=parseInt($('#Q9_row input[type="radio"]:checked').attr('title'));
        var desired=parseInt($('#Q10_row input[type="radio"]:checked').attr('title'));
        if(actual>0 && desired>0){
            var discrepancy=actual-desired;
            console.log(discrepancy);
            $('#roleDiscrepancy_question table table tbody tr').eq(discrepancy+4).find('.iCheck-helper').click();
        }
    } catch(e){}
    
}
