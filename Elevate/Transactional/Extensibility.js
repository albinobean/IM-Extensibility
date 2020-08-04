var InMomentFavIcon='https://maritzcxenterpriseoperations.allegiancetech.com/surveys/images/VW8KA6/Preview/favicon16x16.png';
$(document).ready(function () {
    var curPage = parseInt($('input[name=currentpage]').val());
    setFavicon(InMomentFavIcon);
    centerHeaders("#Q00000458",9,9);
    centerHeaders("#Q000004CD",9,9);
    centerHeaders("#Q00000532",9,9);
    centerHeaders("#Q0001087C",9,9);
    addFooter();

    switch(curPage){
        case 4:
            var transactionTypes=$('#mcx-tag-Transaction_Type').val();
            if(transactionTypes.indexOf('5')>=0){
                $('.nextButton').text(navigationState.finishButtonCaption);
            }
            break;
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