var dellWhiteLogo='https://dell.inquisiteasp.com/surveys/images/KRYF39/Preview/dell_white.png';
var dellBlueLogo='https://dell.inquisiteasp.com/surveys/images/KRYF39/Preview/dell_logo_blue_rgb_small.png';
$(document).ready(function(){
    buildHelpCenter();
    AddSecondLogo(dellBlueLogo);
});
function buildHelpCenter(){
    var MCXU={
        heading:"MaritzCX University",
        description:"Training courses on all MaritzCX products",
        icon:"https://dell.inquisiteasp.com/surveys/images/2CK5UU/Preview/gradhat64.png?cacheToken=20200323154552",
        link:"https://www.maritzcx.com/university/"
    };
    var knowledgeCenter={
        heading:"Knowledge Center",
        description:"Quick access to how-to articles and answers to commonly-asked questions",
        icon:"https://dell.inquisiteasp.com/surveys/images/2CK5UU/Preview/004knowledge.png?cacheToken=20200323154552",
        link:"https://knowledge.maritzcx.com/"
    };
    var techSupport={
        heading:"Technical Support",
        description:"Any issues with standard platform functionality (i.e. error messages) (866) 794-4785",
        icon:"https://dell.inquisiteasp.com/surveys/images/2CK5UU/Preview/001support.png?cacheToken=20200323154552",
        link:"https://static.allegiancetech.com/support/feedback.html"
    };
    var accessRequest={
        heading:"Access Request",
        description:"Submit a request for someone to be added to the platform or modify their access",
        icon:"https://dell.inquisiteasp.com/surveys/images/2CK5UU/Preview/002login.png?cacheToken=20200323154552",
        link:"https://dell.inquisiteasp.com/cgi-bin/qwebcorporate.dll?idx=2CK5UU"
    };
    
    var supportSources=[techSupport,knowledgeCenter,MCXU,accessRequest];
    var helpContainer=$('<div id="helpContainer"></div>');
    $('#survey').append(helpContainer);
    for(var i=0;i<supportSources.length;i++){
        var supportSource=supportSources[i];
        var helpSourceContainer=$('<div class="helpSourceContainer"></div>')
        var helpSourceTable=$('<table></table>');
        helpSourceContainer.append(helpSourceTable);
        var helpSourceTBody=$('<tbody></tbody>');
        helpSourceTable.append(helpSourceTBody);
        var helpSourceTableRow=$('<tr></tr>')
        helpSourceTBody.append(helpSourceTableRow);
        var helpIcon=$('<td class="helpIconWrapper"><a href="' + supportSource.link + '" target="_blank"><img class="helpIcon" src="' + supportSource.icon + '" /></a></td>')
        helpSourceTableRow.append(helpIcon);
        var helpDescription=$('<td class="helpDescriptionContainer"><a class="helpTitle" href="' + supportSource.link + '" target="_blank">' + supportSource.heading + '</a><p class="helpDescription">' + supportSource.description + '</p></td>');
        helpSourceTableRow.append(helpDescription)
        helpContainer.append(helpSourceContainer);
    }
}
function AddSecondLogo(logoUrl){
    var newImg = $('<img src="' + logoUrl + '" id="headerLogoImage2" class="header-logo" />');
    $('#headerLogoContainer').append(newImg);
}