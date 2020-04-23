$(document).ready(function() {
    var strlang = $("input[name='language']").val();

    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    switch (curPage) {
        case 1:
            $('#survey').hide();
            if (localStorage.MCXDesiredLanguage) {
                $("#LanguageSelector option").each(function() {
                    if ($(this).text() == localStorage.MCXDesiredLanguage) {
                        $(this).attr('selected', 'selected');
                    }
                });
            };
            localStorage.MCXDesiredLanguage = $('#LanguageSelector option:selected').text();
            nextButtonClicked();
            break;
        case 2:
            $('.backButton').hide(); //Hide the back button since it is the first respondent-facing page
            //If they change the language, go back and then come back to refresh the page
            if (strlang == 'Hebrew' || strlang == 'Arabic' || strlang == 'Moroccan Arabic') { $('#fakeLanguageSelector').css('float', 'left'); }
            if (localStorage.MCXDesiredLanguage) {
                $("#fakeLanguageSelector option").each(function() {
                    if ($(this).text() == localStorage.MCXDesiredLanguage) {
                        $(this).attr('selected', 'selected');
                    }
                });
            };
            localStorage.removeItem('MCXDesiredLanguage');
            $('#fakeLanguageSelector').change(function() {
                localStorage.MCXDesiredLanguage = $('#fakeLanguageSelector option:selected').text();
                backButtonClicked();
            });
            break;
    }
});