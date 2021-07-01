$(document).ready(function () {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    switch(curPage) {
        case 1:
            if(sessionStorage.MCXDesiredLanguage){
                $("#LanguageSelector option").each(function() {
                    if($(this).text() == sessionStorage.MCXDesiredLanguage) {
                        $(this).attr('selected', 'selected');
                        nextButtonClicked();
                    }
                });
                if(sessionStorage.MCXDesiredLanguage.trim()=='') nextButtonClicked();
                console.log(sessionStorage.MCXDesiredLanguage + ' is not an answer in the real language selector');
            } else {
                sessionStorage.MCXDesiredLanguage=$('#LanguageSelector option:selected').text();
                nextButtonClicked();
            }
            break;
        case 2:
            $('.backButton').hide(); //Hide the back button since it is the first respondent-facing page
            //If they change the language, go back and then come back to refresh the page
            if(sessionStorage.MCXDesiredLanguage){
                let matched=false;
                $("#fakeLanguageSelector option").each(function() {
                    if($(this).text() == sessionStorage.MCXDesiredLanguage) {
                        $(this).attr('selected', 'selected');
                        matched=true;
                        
                    }
                });
                
                if(!matched) console.log(sessionStorage.MCXDesiredLanguage + ' is not an answer in the fake language selector');

            };
            $('#fakeLanguageSelector').change(function(){
                sessionStorage.MCXDesiredLanguage=$('#fakeLanguageSelector option:selected').text();
                backButtonClicked();
            });
            break;
    }
});