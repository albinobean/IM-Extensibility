$(document).ready(function () {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    if (curPage == 3) {

        // $('.alleg-twitterLogo a').attr('href',encodeURI($('.alleg-tweetLink').text().replace(/\bInMoment\b/gi,'@InMoment').replace(/\bNRG\b/gi,'@NRG').replace(/'/g,"%27")));
        var comment = encodeURI($('.alleg-tweetLink').text().replace(/\bInMoment\b/gi, '@InMoment').replace(/\bNRG\b/gi, '@NRG').replace(/'/, '%27'));
        var func = "javascript:InqUtils.openWindow('https://twitter.com/intent/tweet?text=" + comment + "&via=NRGEnergy&url=','inq_new','new','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,height=400,width=400');";
        $('.alleg-twitterLogo a').attr('href', func);
        
        // Add Facebook Page
        var fb=$('<div></div>');
        fb.attr('id','fb-page');
        fb.html('<div class="fb-page" data-href="https://www.facebook.com/NRG" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/NRG" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/NRG">NRG Energy</a></blockquote></div>');
        $('.alleg-twitterLogo').append(fb);

        // Add Facebook LIKE button
        fb=$('<div></div>');
        fb.attr('id','fb-root');
        fb.html('<div class="fb-like" data-href="https://www.facebook.com/NRG" data-width="400" data-layout="button" data-action="like" data-size="large" data-share="true"></div>');
        $('.alleg-twitterLogo').append(fb);
        
    }
    window.onscroll = function() {scrollFunction()};  // CHANGE LOGO BACKGROUND WHEN SCROLLING DOWN
});
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("headerLogoContainer").style.background = "rgba(255,255,255,1)";
        document.getElementById("headerLogoContainer").style.borderBottom = "1px solid #eaeaea";
  } else {
      document.getElementById("headerLogoContainer").style.background = "rgba(255,255,255,0)";
      document.getElementById("headerLogoContainer").style.borderBottom = "1px solid transparent";
  }
}