function CaptureDeviceType(QID) {
    QID = '#' + QID.replace('#', '');
    //$(QID + '_question').hide();
    var deviceDetector = (function() {
        var ua = navigator.userAgent.toLowerCase();
        var detect = (function(s) {
            if (s === undefined) s = ua;
            else ua = s.toLowerCase();
            if (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(ua)) {
                return 'Tablet';
            } else if (/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(ua)) {
                return 'Phone';
            } else {
                return 'Desktop'; }
        });
        return {
            device: detect(),
            detect: detect,
            isMobile: ((detect() != 'desktop') ? true : false),
            userAgent: ua
        };
    }());

    var dType = deviceDetector.device;
    var answer;
    switch (dType) {
        case 'Desktop':
            answer = 1;
            //$(desktopAnswerId).prop("checked", true);
            break;
        case 'Tablet':
            answer = 2;
            //$(tabletAnswerId).prop("checked", true);
            break;
        case 'Phone':
            answer = 3;
            //$(mobileAnswerId).prop("checked", true);
            break;
    }
    //$(QID + '_question table table tr:nth-child(' + answer +') td input').hide();
    $(QID + '_question table table tr:nth-child(' + answer + ') input').prop("checked", true);
}

$(document).ready(function() {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);

    if (curPage == 1) {
        sessionStorage.clear();
        sessionStorage.setItem("fLink", "https://goo.gl/lK768h"); //Facebook
        sessionStorage.setItem("yLink", "https://www.yelp.com/"); //Yelp
        sessionStorage.setItem("gLink", "https://www.google.com/maps/"); //Google

        CaptureDeviceType('deviceType');

        var BP = [];
        BP.push(
            //Market					Hospital Name				Hospital ID			Facebook Link						Yelp Link							Google Link
            //===================================================================================================================================================================================
            { market: "Atlanta",		hName: "Sandy Springs",		hid: "GAATBPSSP",	fLink: "https://goo.gl/zKq3ZX",		yLink: "https://goo.gl/M7UrBr",		gLink: "https://goo.gl/bGmmZk" },
            { market: "Atlanta",		hName: "Gwinnett",			hid: "GAATBPGWI",	fLink: "https://goo.gl/zPpZ3D",		yLink: "https://goo.gl/HKbe0G",		gLink: "https://goo.gl/Zqh8Wv" },
            { market: "Atlanta",		hName: "Westside",			hid: "GAATBPWST",	fLink: "https://goo.gl/kaDk40",		yLink: "https://goo.gl/RrFWmY",		gLink: "https://goo.gl/M40h1x" },
            { market: "Boston",			hName: "Waltham",			hid: "MABOBPWAL",	fLink: "https://goo.gl/UZFOJ9",		yLink: "https://goo.gl/PZoDmM",		gLink: "https://goo.gl/Nt1fnW" },
            { market: "Houston",		hName: "Willowbrook",		hid: "TXHNBPWBK",	fLink: "https://goo.gl/10JPn4",		yLink: "https://goo.gl/uy35IF",		gLink: "https://goo.gl/pBnBpc" },
            { market: "Houston",		hName: "Spring",			hid: "TXHNBPSPR",	fLink: "https://goo.gl/pKLmFT",		yLink: "https://goo.gl/mhOYBn",		gLink: "https://goo.gl/hYC4I3" },
            { market: "Houston",		hName: "Katy",				hid: "TXHNBPKTY",	fLink: "https://goo.gl/Y1VHBv",		yLink: "https://goo.gl/bQrchy",		gLink: "https://goo.gl/0yRYKd" },
            { market: "Nashville",		hName: "Franklin",			hid: "TNNABPBRW",	fLink: "https://goo.gl/IYH9FE",		yLink: "https://goo.gl/Ugm1OS",		gLink: "https://goo.gl/FSAkwt" },
            { market: "New York City",	hName: "Midtown NY",		hid: "NYNYBPMAN",	fLink: "https://goo.gl/xPfDM2",		yLink: "https://goo.gl/oLx0L1",		gLink: "https://goo.gl/16HJOw" },
            { market: "New York City",	hName: "Queens",			hid: "NYNYBPQUE",	fLink: "https://goo.gl/tKNWGS",		yLink: "https://goo.gl/Nom1xJ",		gLink: "https://goo.gl/gj65LA" },
            { market: "New York City",	hName: "Brooklyn",			hid: "NYNYBPBKN",	fLink: "https://goo.gl/UPYCX2",		yLink: "https://goo.gl/XPDQhD",		gLink: "https://goo.gl/hz1Vp9" },
            { market: "New York City",	hName: "Downtown NY",		hid: "NYNYBPDTN",	fLink: "https://goo.gl/xdRqF7",		yLink: "https://goo.gl/F6cKY8",		gLink: "https://goo.gl/WdxSWG" },
            { market: "Oklahoma City",	hName: "Oklahoma City",		hid: "OKOCBPOKC",	fLink: "https://goo.gl/8RtVMp",		yLink: "https://goo.gl/4pQUn9",		gLink: "https://goo.gl/dGFZLZ" },
            { market: "New Jersey",		hName: "Paramus",			hid: "NJNOBPPRM",	fLink: "https://goo.gl/PVroU9",		yLink: "https://goo.gl/ubNqsT",		gLink: "https://goo.gl/5Mm8O6" },
            { market: "Phoenix",		hName: "Phoenix",			hid: "AZPXBPPHX",	fLink: "https://goo.gl/3Bw0dy",		yLink: "https://goo.gl/F4dJvH",		gLink: "https://goo.gl/gVPML1" },
            { market: "Phoenix",		hName: "Peoria",			hid: "AZPXBPPEO",	fLink: "https://goo.gl/2nURYh",		yLink: "https://goo.gl/WkUz0N",		gLink: "https://goo.gl/Aq5vnQ" },
            { market: "Phoenix",		hName: "Avondale",			hid: "AZPXBPAVD",	fLink: "https://goo.gl/Rs6cYz",		yLink: "https://goo.gl/03f3ZR",		gLink: "https://goo.gl/B16VLb" },
            { market: "Phoenix",		hName: "Scottsdale",		hid: "AZPXBPSCD",	fLink: "https://goo.gl/k3tFrp",		yLink: "https://goo.gl/pwPBTu",		gLink: "https://goo.gl/nypC9j" },
            { market: "Tampa Bay",		hName: "Tampa",				hid: "FLTABPTPA",	fLink: "https://goo.gl/umqxDf",		yLink: "https://goo.gl/P3cZiu",		gLink: "https://goo.gl/yPNVWO" },
            { market: "Tampa Bay",		hName: "Brandon",			hid: "FLTABPBRN",	fLink: "https://goo.gl/WBRxdV",		yLink: "https://goo.gl/E5UMKL",		gLink: "https://goo.gl/O0exzV" },
            { market: "Tampa Bay",		hName: "Clearwater",		hid: "FLTABPCLW",	fLink: "https://goo.gl/cmfvHF",		yLink: "https://goo.gl/ebdfZb",		gLink: "https://goo.gl/tmYBAS" },
            { market: "Tampa Bay",		hName: "Sarasota",			hid: "FLTABPSAR",	fLink: "https://goo.gl/DbQQiB",		yLink: "https://goo.gl/ReKAP0",		gLink: "https://goo.gl/MtKIfE" },
            { market: "Virginia Beach",	hName: "TownCenter",		hid: "VAVBBPVAB",	fLink: "https://goo.gl/5BOlHh",		yLink: "https://goo.gl/Yytsk6",		gLink: "https://goo.gl/jnvgNV" },
            { market: "Virginia Beach",	hName: "Greenbrier",		hid: "VAVBBPGBR",	fLink: "https://goo.gl/cG8w1n",		yLink: "https://goo.gl/35vFWl",		gLink: "https://goo.gl/oHRWn3" },
            { market: "Chicago",		hName: "Northfield",		hid: "ILCHBPNFD",	fLink: "https://goo.gl/mIBYBe",		yLink: "https://goo.gl/0ccnfc",		gLink: "https://goo.gl/ij1UwN" },
            { market: "Chicago",		hName: "Skokie",			hid: "ILCHBPSKO",	fLink: "https://goo.gl/SVmqsO",		yLink: "https://goo.gl/V2nPDo",		gLink: "https://goo.gl/33mxYT" },
            { market: "Detroit",		hName: "Southfiel",			hid: "MISFBPSF",	fLink: "https://goo.gl/RR38I8",		yLink: "https://goo.gl/6XEnCo",		gLink: "https://goo.gl/hHVbgO" },
            { market: "Detroit",		hName: "Auburn Hill",		hid: "MISFBPAH",	fLink: "https://goo.gl/uz23ft",		yLink: "https://goo.gl/NWK9mM",		gLink: "https://goo.gl/PZzemd" },
            { market: "Detroit",		hName: "Ann Arbo",			hid: "MISFBPNN",	fLink: "https://goo.gl/2FDBrH",		yLink: "https://goo.gl/2pppLM",		gLink: "https://goo.gl/eDZwkB" },
            { market: "Detroit",		hName: "Macom",				hid: "MISFBPMC",	fLink: "https://goo.gl/8C7G53",		yLink: "https://goo.gl/tLCffq",		gLink: "https://goo.gl/wj3Sa2" },
            { market: "Grand Rapids",	hName: "Grand Rapid",		hid: "MIGRBPGR",	fLink: "https://goo.gl/ozm6gY",		yLink: "https://goo.gl/QozEEu",		gLink: "https://goo.gl/U8NGKO" },
            { market: "Kansas City",	hName: "Overland Park",		hid: "KSKCBPOVP",	fLink: "https://goo.gl/cqTjWL",		yLink: "https://goo.gl/gKOble",		gLink: "https://goo.gl/056XgC" },
            { market: "Kansas City",	hName: "Lee's Summit",		hid: "KSKCBPLES",	fLink: "https://goo.gl/T5AbCz",		yLink: "https://goo.gl/rqm6g9",		gLink: "https://goo.gl/G6bGWU" },
            { market: "Kansas City",	hName: "Northland",			hid: "KSKCBPNLD",	fLink: "https://goo.gl/4JLxJg",		yLink: "https://goo.gl/g5JbK0",		gLink: "https://goo.gl/JqQRIv" },
            { market: "Louisville",		hName: "Louisville",		hid: "KYLVBPLOU",	fLink: "https://goo.gl/aZEcTJ",		yLink: "https://goo.gl/axaL4E",		gLink: "https://goo.gl/bgyr0c" },
            { market: "Minneapolis",	hName: "Eden Prairie",		hid: "MNMNBPEPR",	fLink: "https://goo.gl/ZVhsgY",		yLink: "https://goo.gl/yv5qS8",		gLink: "https://goo.gl/DfI9kz" },
            { market: "Minneapolis",	hName: "Blaine",			hid: "MNMNBPBLA",	fLink: "https://goo.gl/VfVmLG",		yLink: "https://goo.gl/yQlHmg",		gLink: "https://goo.gl/DHhXkg" },
            { market: "Seattle",		hName: "Tacoma",			hid: "WATABPTAC",	fLink: "https://goo.gl/MGcl9n",		yLink: "https://goo.gl/i7C8Rf",		gLink: "https://goo.gl/mkYGsQ" },
            { market: "Minneapolis",	hName: "Coon Rapids",		hid: "MNMNBPCNR",	fLink: "",							yLink: "https://goo.gl/x2ETe8",		gLink: "https://goo.gl/7qege7" },
            { market: "Minneapolis",	hName: "Duluth",			hid: "MNMNBPDUL",	fLink: "",							yLink: "https://goo.gl/ftBrP4",		gLink: "https://goo.gl/novR62" },
            { market: "Minneapolis",	hName: "Rochester",			hid: "MNMNBPRSR",	fLink: "",							yLink: "https://goo.gl/NVSw6S",		gLink: "https://goo.gl/VZdZZM" },
            { market: "Minneapolis",	hName: "Golden Valley",		hid: "MNMNBPGDV",	fLink: "",							yLink: "https://goo.gl/J1JMJ6",		gLink: "https://goo.gl/2ef9fs" },
            { market: "Minneapolis",	hName: "St. Cloud",			hid: "MNMNBPSTC",	fLink: "",							yLink: "https://goo.gl/1c3G9Q",		gLink: "https://goo.gl/6XGWzy" },
            { market: "Pittsburgh",		hName: "North Hills",		hid: "PAPIBPNHL",	fLink: "https://goo.gl/9V17LG",		yLink: "https://goo.gl/inLvGW",		gLink: "https://goo.gl/Z1C3io" },
            { market: "Pittsburgh",		hName: "South Hills",		hid: "PAPIBPSHL",	fLink: "https://goo.gl/9V17LG",		yLink: "https://goo.gl/1aY6p1",		gLink: "https://goo.gl/erYnGb" },
            { market: "Atlanta",		hName: "Marietta",			hid: "GAATBPMAR",	fLink: "https://goo.gl/23oD9U",		yLink: "https://goo.gl/1w6UCs",		gLink: "https://goo.gl/A1uf72" },

            //CO/NONBRAND========================================================================================================================================================================
            { market: "Richmond",		hName: "Richmond",			hid: "VARMBPRCH",	fLink: "https://goo.gl/qXlCme",		yLink: "https://goo.gl/0uZXEI",		gLink: "https://goo.gl/Hr91zd" },
            { market: "Washington DC",	hName: "Rockville",			hid: "DCMVBPROC",	fLink: "https://goo.gl/StTIK3",		yLink: "https://goo.gl/3gcWTU",		gLink: "https://goo.gl/AtiGuW" },
            { market: "Philadelphia",	hName: "Levittown",			hid: "PAPHBPLEV",	fLink: "https://goo.gl/aTMRvG",		yLink: "https://goo.gl/aFvoIQ",		gLink: "https://goo.gl/RHgKVW" },
            { market: "Philadelphia",	hName: "Philadelphia",		hid: "PAPHBPPHI",	fLink: "https://goo.gl/aTMRvG",		yLink: "https://goo.gl/qZuMV6",		gLink: "https://goo.gl/pW05Wy" },
            { market: "Philadelphia",	hName: "Conshohocken",		hid: "PAPHBPCON",	fLink: "https://goo.gl/aTMRvG",		yLink: "https://goo.gl/cAukTK",		gLink: "https://goo.gl/EwrTSf" },
            { market: "Salt Lake City",	hName: "Midvale",			hid: "UTSLBPMDV",	fLink: "https://goo.gl/UxPytY",		yLink: "https://goo.gl/VAkZqr",		gLink: "https://goo.gl/xFxbHi" },
            { market: "San Antonio",	hName: "Sonterra",			hid: "TXSABPSON",	fLink: "https://goo.gl/j1exx4",		yLink: "https://goo.gl/uYmSbJ",		gLink: "https://goo.gl/gMSLo6" },
            { market: "San Antonio",	hName: "New Braunfels",		hid: "TXSABPNBF",	fLink: "https://goo.gl/uJnP4b",		yLink: "https://goo.gl/yhNgPg",		gLink: "https://goo.gl/rXEIwd" },
            { market: "Seattle",		hName: "Seattle",			hid: "WAKRBPSEA",	fLink: "https://goo.gl/t35QbG",		yLink: "https://goo.gl/rIu6ls",		gLink: "https://goo.gl/V9rnNx" },
            { market: "Seattle",		hName: "Renton",			hid: "WAKRBPREN",	fLink: "https://goo.gl/t35QbG",		yLink: "https://goo.gl/JEGDNr",		gLink: "https://goo.gl/mq9KSj" },
            { market: "Seattle",		hName: "Kirkland",			hid: "WAKRBPKRK",	fLink: "https://goo.gl/yLY4Gj",		yLink: "https://goo.gl/H7PAf9",		gLink: "https://goo.gl/x7ejyV" },
            { market: "Seattle",		hName: "Downtown Seattle",	hid: "WAKRBPDTS",	fLink: "https://goo.gl/yLY4Gj",		yLink: "https://goo.gl/H7PAf9",		gLink: "https://goo.gl/PQqr6q" },
            { market: "St. Louis",		hName: "Chesterfield",		hid: "MOSTBPCHE",	fLink: "https://goo.gl/RcOziI",		yLink: "https://goo.gl/r22z7X",		gLink: "https://goo.gl/Pm1hKL" }
        );

        if ($("#hid").val().length > 0) {
            for (var i = 0; i < BP.length; i++) {
                if (BP[i].hid == $("#hid").val()) {
                    sessionStorage.setItem("fLink", BP[i].fLink); //Facebook
                    sessionStorage.setItem("yLink", BP[i].yLink); //Yelp
                    sessionStorage.setItem("gLink", BP[i].gLink); //Google
                    break;
                }
            }
        }
    } else if (curPage == 9) {
        $('.nextButton').unbind();
        $(".nextButton").click(function() {
            Date.prototype.stdTimezoneOffset = function() {
                var jan = new Date(this.getFullYear(), 0, 1);
                var jul = new Date(this.getFullYear(), 6, 1);
                return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
            }

            Date.prototype.dst = function() {
                return this.getTimezoneOffset() < this.stdTimezoneOffset();
            }

            var cDate = new Date(); //full date time everything for current timezone
            var dLight = 0;
            if (cDate.dst()) { dLight = 6; } else { dLight = 5; } //checks if daylight savings time is in effect
            // var centTime = dLight - 3;
            var offset = new Date().getTimezoneOffset() / 60; //calculates difference between UTC and local time
            var diffy = 0;
            if (dLight > offset) { diffy = dLight - offset } else { diffy = offset - dLight }
            // var tDiff = offset - centTime;

            cDate.setHours(cDate.getHours() + diffy);
            var cDay = cDate.getDate();
            var cMonth = cDate.getMonth();
            var cYear = cDate.getFullYear();
            var cHour = cDate.getHours();
            var cMin = cDate.getMinutes();
            cMin = cMin < 10 ? '0' + cMin : cMin;
            cHour = cHour < 10 ? '0' + cHour : cHour;
            cMonth += 1;
            var year = cYear.toString();
            //year = "20" + year.slice(1,3)
            if (parseFloat(cMonth) < 10) {
                cMonth = "0" + cMonth;
            }
            if (parseFloat(cDay) < 10) {
                cDay = "0" + cDay;
            }
            $("#compDate").val(cMonth + "" + "/" + cDay + "/" + year);
            //alert(cMonth + "" + "/" + cDay + "/" + year + ' - ' + dLight);
            nextButtonClicked();
        });
        if (sessionStorage.feedback == 1) {
            $('.nextButton').click();
        }
        if ($(".alleg-compliment").is(":hidden")) {
            $('.nextButton').click();
        }
    } else if (curPage == 14) {
        $(".alleg-facebook img").click(function() { //Facebook
            window.open(sessionStorage.fLink, "_blank");
        });
        $(".alleg-yelp img").click(function() { //Yelp
            window.open(sessionStorage.yLink, "_blank");
        });
        $(".alleg-google img").click(function() { //Google
            window.open(sessionStorage.gLink, "_blank");
        });
    }
}); //For any questions regarding the above script contact Mike Tyau================================================================================================================================

$(document).ready(function() {
    var page = parseInt($("input[name='currentpage']").val());
    var removed = false;

    var selector_string = ".mobileTable > tbody > tr:nth-child(3)";
    var html_text = $(selector_string).html();
    html_text = "<tr>" + html_text + "</tr>";

    var windowsize = $(window).width();

    if (page >= 1) {
        if (windowsize <= 1024) {
            $(selector_string).remove();
            $(".mobileTable > tbody > tr:nth-child(1)").after(html_text);
            $(".mobileTable > tbody > tr:nth-child(3)").after("<tr><td style='height: 10px;' colspan='11'></td></tr>");
            removed = true;
        } else {
            // Do nothing
        }

        $(window).resize(function() {
            if (windowsize <= 1024 && removed != true) {
                $(selector_string).remove();
                $(".mobileTable > tbody > tr:nth-child(1)").after(html_text);
            } else {
                // Do nothing
            }
        });
    }


});

$(document).ready(function() {

    $("#survey > fieldset > div.right.topNavigation").empty();
    $("#survey > fieldset > div.right.topNavigation").attr("style","width: 90%; margin: 10px auto 5px auto; display: flex; justify-content: center;")



    var number_of_pages = 14;                // Enter the total number of pages in the survey, including thank you pages.
    var has_short_long_version = true;      // If your survey has a question asking the respondent if they would like to continue with more questions, set to true. If not, set to false.
    var short_long_page = 9;                // Enter the page number that contains the short-long question.
    var color_empty = "#c6c6c6";            // Enter a hex code that should represent the color of the unfilled part of the progress bar.
    var color_full = "#0071BC";             // Enter a hex code that should represent the color of the filled part of the progress bar.
    var border_radius = "3px";              // Set the border radius of the cells of the progress bar in pixels (format: ##px).



    var page = parseInt($("input[name='currentpage']").val());


    function CREATE_PROGRESS_BAR(CURRENT_PAGE, TOTAL_PAGES) {

        var PROGRESS_BAR = "";
        var BACKGROUND_COLOR;
        var FILL_LEVEL;


        if (has_short_long_version == true) {
            if (CURRENT_PAGE <= short_long_page) {
                FILL_LEVEL = Math.floor((CURRENT_PAGE / short_long_page)*10);
            } else {
                FILL_LEVEL = Math.floor(((CURRENT_PAGE - short_long_page)/(TOTAL_PAGES - short_long_page))*10);
            }

        } else {
            FILL_LEVEL = Math.floor((CURRENT_PAGE / TOTAL_PAGES)*10);
        }


        for (i = 1; i <= 10; i++) {
            if (i <= FILL_LEVEL) {
                BACKGROUND_COLOR = color_full;
            } else {
                BACKGROUND_COLOR = color_empty;
            }

            PROGRESS_BAR += '<div class="page' + i + '" style="height: 3px; width: 10%; text-align: center; background-color: ' + BACKGROUND_COLOR + '; padding: 1px 10px 1px 10px; margin: 5px; border-radius: ' + border_radius + ';"></div> ';

        }


        $("#survey > fieldset > div.right.topNavigation").prepend(PROGRESS_BAR);

    }



    CREATE_PROGRESS_BAR(page, number_of_pages);



});



//BRAND LOGIC QUESTION CODE FOR GVR LOGIC

$(document).ready(function () {

    var curPage = parseInt($('input[name=currentpage]').val(), 10);

    if (curPage == 1) {
        // When Next button is clicked, check if Logo=GVR then select brandlogic=GVR, if anything else, select brandlogic=Other
        $('.nextButton').unbind();
        $('.nextButton').click(function () {
            if ($('#Q00028AF1_Q00028AF2_A15').is(':checked')) {
                document.getElementById("Q0004E83C_Q0004E83D_A1").parentElement.children[1].click();
            } else {
                document.getElementById("Q0004E83C_Q0004E83D_A2").parentElement.children[1].click();
            }
            nextButtonClicked();
        });
    }

});