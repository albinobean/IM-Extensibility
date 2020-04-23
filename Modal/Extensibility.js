$(document).ready(function(){
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    switch(curPage) {
        case 3:
            
            showModalBeforeExit(1);
            break;
    }
});
var addEvent = function(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
};
function modalAnswerCallback(){
    var answerClicked=$(this).text();
    // Add cases for each button that they could have pressed
    switch(answerClicked){
        case "Answer text 1":
            // setTimeout(nextButtonClicked,1000);
            // Any required questions on this page should have display logic to NOT show if this answer is selected.
            // Otherwise, they will get an error saying they skipped a required question.  
            // These required questions will not save their responses since they will not be displayed.
            break;
        case "Answer text 2":
            break;
    }
}
function showModal(){
    $('#modalBackground').show();  
    $('.alleg-modalElement').show(); 
    $('.alleg-modalImage').show();  
}
function hideModal(){
    $('#modalBackground').hide();    
}
function addModal(){
    var modalBackground=$('<div></div>');
    modalBackground.attr('id','modalBackground');
    $('#template').append(modalBackground);
    // var modalClose=$('<div></div>');
    // modalClose.attr('id','modalClose').text('X');
    // modalClose.click(hideModal);
    modalBackground.click(hideModal);
    var modalFrame=$('<div></div>');
    modalFrame.attr('id','modalFrame');
    // modalFrame.append(modalClose);
    modalBackground.append(modalFrame);
    modalFrame.append($('.alleg-modalElement, .alleg-modalImage'));
    $('.alleg-modalElement .ui-button').click(modalAnswerCallback);
}
function showModalBeforeExit(MaxTimesToShow){
    // Set MaxTimesToShow as -1 to show it unlimited times
    addModal();
    sessionStorage.setItem('ModalShowingsLeft',MaxTimesToShow)
    addEvent(document, "mouseout", function(event) {
        if(parseInt(sessionStorage.getItem('ModalShowingsLeft'))==0){return}
        event = event ? event : window.event;
        var from = event.relatedTarget || event.toElement;
        if ((!from || from.nodeName == "HTML") && event.clientY <= 100 && sessionStorage.getItem('firstVisit') != "true") {
            sessionStorage.setItem('ModalShowingsLeft',parseInt(sessionStorage.getItem('ModalShowingsLeft'))-1);
            showModal();
        }
    });
}