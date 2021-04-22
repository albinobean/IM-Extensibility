
$(document).ready(function () {
    if(navigationState.isLastPage) lastPage();
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    addHelpButton();
    addJiraLink();
    // switch (curPage) {
    //     case 1:
    // }
});
function addHelpButton(){
    const helpButton=$('<div id="helpButton" class="material-icons">contact_support</div>');
    $('#template').append(helpButton);
}
function addJiraLink(){
    let  ticket=$('#mcx-tag-Ticket').val().trim();
    ticket = /TSM\-\d*/.test(ticket) ? ticket : 'TSM-1234'
    let jiraButton=$(`
        <a id="jiraButton" href="https://jira.inmoment.com/browse/${ticket}">
            <img class="verticallyCentered" id="jiraLogo" src="https://www.logolynx.com/images/logolynx/59/599e3c640d1a0ac8cf3de2995551178e.png" />
            <span class="verticallyCentered">Open JIRA Ticket</span>
        </a>`
    );
    $('#template').append(jiraButton);
}
function lastPage(){
    $('.nextButton').hide();
}
