// Text for Header
$(document).ready(function() {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    if(curPage==1){
        var lBrand = $('#Brand_question input[type="radio"]:checked').val();
    } else {
        var lBrand = parseInt($('#mcx-tag-Brand').val());
    }
    if (lBrand == 0) {
        var BrandName = "CLM Matrix";
    } 
    else {
        var BrandName = "ELM Solutions";
    }
    $('#headerTextContainer').append("<span class='elm'>" + BrandName+"</span>");
});

// Center Headers
$(document).ready(function() {
   centerHeaders("#Q00000021", 20, 3); //K1
   centerHeaders("#Q00000048", 16, 3); //SR1 Table
});

function centerHeaders(tableID, percent, colBet) {
   $(tableID + '_scale_header table tbody tr td').attr('class', "ScaleHeaderCenter");
   for (i = 0; i < colBet; i++) {
       $(tableID + '_scale_header table tbody tr td:nth-child(1)').after('<td></td>');
   }
   $(tableID + '_scale_header table tbody tr td').attr('style', "width:" + percent + "%;");
}

// Hide Quickstart if answered
$(document).ready(function() {
   for (i = 0; i <= 11; i++) {
       if ($('#Q00000022_Q00000023_A' + i).is(':checked')) {
           $('#Q00000021_table').hide();
       }
   }
});

// Timed redirect
$(document).ready(function() {
   var curPage = parseInt($('input[name=currentpage]').val(), 10);
   if (curPage == "7") {
       setTimeout(function() {
           window.location.href = "https://www.wkelmsolutions.com/";
       }, 5000);
   }
});

// Set CAB to 'yes' if Account ID is one of these 4
$(document).ready(function () {
   var accountNum = document.getElementById("ACCOUNTID").getAttribute("value");
   if (accountNum == "202973" || accountNum == "203054" || accountNum == "203168" || accountNum == "202997") {
      document.getElementById('Q0000F60F_Q0000F610_A1').parentNode.children[1].click();
   } else {
      document.getElementById('Q0000F60F_Q0000F610_A2').parentNode.children[1].click();
   }
});

// Begin - OS, Browser, Screen Size, Device, IP Detection, Full User Agent
(function (window) {
   {
       var unknown = '-';


       // screen
       var screenSize = '';
       if (screen.width) {
           width = (screen.width) ? screen.width : '';
           height = (screen.height) ? screen.height : '';
           screenSize += '' + width + " x " + height;
       }


       // browser
       var nVer = navigator.appVersion;
       var nAgt = navigator.userAgent;
       var browser = navigator.appName;
       var version = '' + parseFloat(navigator.appVersion);
       var majorVersion = parseInt(navigator.appVersion, 10);
       var nameOffset, verOffset, ix;


       // Opera
       if ((verOffset = nAgt.indexOf('Opera')) != -1) {
           browser = 'Opera';
           version = nAgt.substring(verOffset + 6);
           if ((verOffset = nAgt.indexOf('Version')) != -1) {
               version = nAgt.substring(verOffset + 8);
           }
       }
       // Opera Next
       if ((verOffset = nAgt.indexOf('OPR')) != -1) {
           browser = 'Opera';
           version = nAgt.substring(verOffset + 4);
       }
       // Edge
       else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
           browser = 'Microsoft Edge';
           version = nAgt.substring(verOffset + 5);
       }
       // MSIE
       else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
           browser = 'Microsoft Internet Explorer';
           version = nAgt.substring(verOffset + 5);
       }
       // Chrome
       else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
           browser = 'Chrome';
           version = nAgt.substring(verOffset + 7);
       }
       // Safari
       else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
           browser = 'Safari';
           version = nAgt.substring(verOffset + 7);
           if ((verOffset = nAgt.indexOf('Version')) != -1) {
               version = nAgt.substring(verOffset + 8);
           }
       }
       // Firefox
       else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
           browser = 'Firefox';
           version = nAgt.substring(verOffset + 8);
       }
       // MSIE 11+
       else if (nAgt.indexOf('Trident/') != -1) {
           browser = 'Microsoft Internet Explorer';
           version = nAgt.substring(nAgt.indexOf('rv:') + 3);
       }
       // Other browsers
       else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
           browser = nAgt.substring(nameOffset, verOffset);
           version = nAgt.substring(verOffset + 1);
           if (browser.toLowerCase() == browser.toUpperCase()) {
               browser = navigator.appName;
           }
       }
       // trim the version string
       if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
       if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
       if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);


       majorVersion = parseInt('' + version, 10);
       if (isNaN(majorVersion)) {
           version = '' + parseFloat(navigator.appVersion);
           majorVersion = parseInt(navigator.appVersion, 10);
       }


       // mobile version
       var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);


       // operating system
       var os = unknown;
       var clientStrings = [
           { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
           { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
           { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
           { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
           { s: 'Windows Vista', r: /Windows NT 6.0/ },
           { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
           { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
           { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
           { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
           { s: 'Windows 98', r: /(Windows 98|Win98)/ },
           { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
           { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
           { s: 'Windows CE', r: /Windows CE/ },
           { s: 'Windows 3.11', r: /Win16/ },
           { s: 'Android', r: /Android/ },
           { s: 'Open BSD', r: /OpenBSD/ },
           { s: 'Sun OS', r: /SunOS/ },
           { s: 'Linux', r: /(Linux|X11)/ },
           { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
           { s: 'Mac OS X', r: /Mac OS X/ },
           { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
           { s: 'QNX', r: /QNX/ },
           { s: 'UNIX', r: /UNIX/ },
           { s: 'BeOS', r: /BeOS/ },
           { s: 'OS/2', r: /OS\/2/ },
           { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
       ];
       for (var id in clientStrings) {
           var cs = clientStrings[id];
           if (cs.r.test(nAgt)) {
               os = cs.s;
               break;
           }
       }


       var osVersion = unknown;


       if (/Windows/.test(os)) {
           osVersion = /Windows (.*)/.exec(os)[1];
           os = 'Windows';
       }


       switch (os) {
           case 'Mac OS X':
               osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
               break;


           case 'Android':
               osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
               break;


           case 'iOS':
               osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
               osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
               break;
       }
   }


   window.jscd = {
       screen: screenSize,
       browser: browser,
       browserVersion: version,
       browserMajorVersion: majorVersion,
       //mobile: mobile,
       os: os,
       osVersion: osVersion
   };
}(this));


$(document).ready(function () {
   // Device Type
   var deviceDetector = (function () {
       var ua = navigator.userAgent.toLowerCase();
       var detect = (function (s) {
           if (s === undefined) s = ua;
           else ua = s.toLowerCase();
           if (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(ua)) {
               return 'Tablet';
           } else if (/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(ua)) {
               return 'Phone';
           }
           else { return 'Desktop'; }
       });
       return {
           device: detect(),
           detect: detect,
           isMobile: ((detect() != 'desktop') ? true : false),
           userAgent: ua
       };
   }());


   var dType = deviceDetector.device;


   // IP Address
   $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
       function (json) {
           $("#IP_Address").val(json.ip); // Make sure question tag is IP_Address
       });



   document.getElementById("OS").value = jscd.os; // question tag should be OS
   document.getElementById("OS_Version").value = jscd.osVersion; // question tag should be OS_Version
   document.getElementById("Browser").value = jscd.browser; // question tag should be Browser
   document.getElementById("Browser_Version").value = jscd.browserMajorVersion + '(' + jscd.browserVersion + ')'; // question tag should be Browser_Version
   document.getElementById("Screen_Size").value = jscd.screen; // question tag should be Screen_Size
   document.getElementById("Full_User_Agent").value = navigator.userAgent; // question tag should be Full_User_Agent
   document.getElementById("Device_Type").value = dType; // question tag should be Device_Type
});
// End - OS, Browser, Screen Size, Device, IP Detection, Full User Agent