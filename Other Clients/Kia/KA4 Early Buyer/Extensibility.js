$(document).ready(function () {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    addFooter();
    customStars();
    PoweredByIM();
    switch (curPage) {
        case 1:
            // RANDOMIZE QUESTION BLOCKS
            let randomAssignment = 1+ Math.floor(Math.random() * 2); //chooses either 1 or 2
            if($('#randomize_path_question .checked').length===0) $('#Q000465F7_Q000465F8_A' + randomAssignment).closest('tr').find('.iCheck-helper').click();
            break;
        case 24:
            groupTableRows(['Q0000028F','Q00000296','Q0000029D']);
            break;
        case 29:
            exclusiveAnswers(['Q00000527_Q00000528_A1', 'Q00000527_Q00000528_A2']);
            syncPriceAdjustment();
            break;
        case 30:
            syncPriceAdjustment();
            break;
        case 36:
            //hide radio options
            $('[id$="_row"]').hide();
            break;

    }
    blockSelectionOnScroll();
    customRedirect('https://owners.kia.com/us/en/kia-owner-portal.html/', 7); //this only redirects on an exit page
});

function syncPriceAdjustment() {
    updatePriceAdjustment();
    $('.iCheck-helper').click(updatePriceAdjustment);
    $('label').click(updatePriceAdjustment);
}
function updatePriceAdjustment() {
    let total = 0;
    $('.checked').each(function () {
        let matches = $(this).closest('tr').find('.answerText').text().match(/(\+|\-)\s?\$(\d|,)*$/g);
        if (matches && matches.length > 0) {
            let match = matches[0];
            let price = parseInt(match.replace(/(\s|\$|,)/g, ''));
            total += price;
        }
    });
    $('.alleg-priceAdjustment').text('Total: ' + formatCurrency(total));
}
function formatCurrency(price) {
    if (isNaN(price)) return '$0';
    let curr = (price < 0 ? '- ' : '') + '$';
    //Add commas
    curr += Math.abs(price).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    return curr;
}

// FOOTER
function addFooter() {

    var toInsert = document.createElement("div");
    var strlang = $("input[name='language']").val();

    var privacylnk = "https://inmoment.com/privacy-policy/english/";
    var privacy = "Privacy Statement";
    var companylnk = "https://inmoment.com/legal/";
    var company = "Legal Notice";

    var htmltext = "<div class='container'><div class='footer1'><a href='" + privacylnk + "' target='_blank' title='" + privacy + "'>" + privacy + "</a> | <a href='" + companylnk + "' target='_blank' title='" + company + "'>" + company + "</a></div><div class='footer2'></div></div>";

    toInsert.id = "alleg-footer";
    toInsert.innerHTML = htmltext;

    var isExisting = document.getElementById("mainForm");
    isExisting.appendChild(toInsert);
}
// END OF FOOTER

//POWERED BY InMoment
function PoweredByIM() {

    var toInsert = document.createElement("div");
    var strlang = $("input[name='language']").val();

    var mcxCompanylnk = "https://www.inmoment.com/";
    var privacy = "Privacy Statement";

    var htmltext = "<div class='container'><div class='poweredBy1'></div><a href='https://www.inmoment.com/' target='_blank'><div class='poweredBy2'></div></a></div>";

    toInsert.id = "alleg-poweredBy";
    toInsert.innerHTML = htmltext;

    var isExisting = document.getElementById("mainForm");
    isExisting.appendChild(toInsert);
}
// END OF POWERED BY InMoment

// CUSTOM STAR RATING
function customStars() {
    $(".stars img").hide();
    $(".stars").append('<div id="modStars"><img src="https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staroff_mcx2019.png" alt="1" title="1" width="28" height="27"><img src="https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staroff_mcx2019.png" alt="2" title="2" width="28" height="27"><img src="https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staroff_mcx2019.png" alt="3" title="3" width="28" height="27"><img src="https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staroff_mcx2019.png" alt="4" title="4" width="28" height="27"><img src="https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staroff_mcx2019.png" alt="5" title="5" width="28" height="27"></div>');
    $("#modStars img").hover(function () {
        if ($("#modStars img").siblings().hasClass("selected")) {
            $(this).attr("src", "https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staron_mcx2019.png");
            $(this).nextAll().attr("src", "https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staroff_mcx2019.png");
            $(this).prevAll().attr("src", "https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staron_mcx2019.png");
        } else {
            $(this).attr("src", "https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staron_mcx2019.png");
            $(this).prevAll().attr("src", "https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staron_mcx2019.png");
        }
    }, function () {
        if ($("#modStars img").siblings().hasClass("selected")) {
            $("#modStars img.selected").attr("src", "https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staron_mcx2019.png");
            $("#modStars img.selected").nextAll().attr("src", "https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staroff_mcx2019.png");
            $("#modStars img.selected").prevAll().attr("src", "https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staron_mcx2019.png");
        } else {
            $(this).attr("src", "https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staroff_mcx2019.png");
            $(this).prevAll().attr("src", "https://alias.mcxplatform.de/surveys/images/BMPX2F/Preview/staroff_mcx2019.png");
        }
    });
    $("#modStars img").click(function () {
        var altVal = parseInt($(this).attr("alt"), 10);
        $(".stars img")[altVal - 1].click();
        $(this).siblings().removeClass("selected");
        $(this).addClass("selected");
    });
    if ($(".stars input").val() && $(".stars input").val().length > 0) {
        var initialVal = parseInt($(".stars input").val(), 10);
        $("#modStars img")[initialVal - 1].click();
        $("#modStars img.selected").trigger("mouseenter");
        $("#modStars img.selected").trigger("mouseleave");
    }


}
// END OF CUSTOM STAR RATING


// REDIRECT
function customRedirect(redirectURL, secondsBeforeRedirect) {
    if (navigationState.isExitPage == true) {
        setTimeout(function () {
            window.location.href = redirectURL;
        }, secondsBeforeRedirect * 1000);
    }
}
function exclusiveAnswers(answerIds) {
    for (let i = 0; i < answerIds.length; i++) {
        let id = answerIds[i];
        let helper = $('#' + id + '+.iCheck-helper');
        let checkbox = $('#' + id);
        checkbox.click(function () {
            if ($(this).attr('checked')) {
                for (let j = 0; j < answerIds.length; j++) {
                    if (answerIds[j] != $(this).attr('id')) {
                        $('.checked #' + answerIds[j] + '+.iCheck-helper').click();
                    }
                }
                updatePriceAdjustment();
            }
        })
    }
}

function blockSelectionOnScroll() {
    $(window).scroll(function () {
        $("input").attr('disabled', true)
        setTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function () {
            $("input").attr('disabled', false)
        }, 500));
    });
}

function indexOfTableRow(rowTag){
    rowTag+='_row'
    let table=$('#' + rowTag).closest('table');
    let rows=table.find('tr');
    for(let i=0;i<rows.length;i++){
        let rw=$(rows[i]);
        if(rw.attr('id')==rowTag) return i;
    }
}
function groupTableRows(rowTags){
    let table=$('#' + rowTags[0] + '_row').closest('table');
    let tableId='#' + table.attr('id');
    for(let i=rowTags.length;i>0;i--){ //descending order
        let position=indexOfTableRow(rowTags[0]);
        $(tableId + '>tbody>tr').eq(position).after(($('#' + rowTags[i] + '_row').detach()));
    }
    $(tableId + ' .alt').removeClass('alt');
    $(tableId + ' tr:nth-child(odd)').addClass('alt');
}


