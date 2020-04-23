$(document).ready(function () {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);

    if(curPage==2){
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
            if (cDate.dst()) { dLight = 6; }else{dLight = 5;} //checks if daylight savings time is in effect
// var centTime = dLight - 3;
            var offset = new Date().getTimezoneOffset()/60; //calculates difference between UTC and local time
            var diffy = 0;
            if (dLight > offset){diffy = dLight - offset}
            else{diffy = offset - dLight}
// var tDiff = offset - centTime;

            cDate.setHours(cDate.getHours() + diffy);
            var cDay = cDate.getDate();
            var cMonth = cDate.getMonth();
            var cYear = cDate.getYear();
            var cHour = cDate.getHours();
            var cMin = cDate.getMinutes();
            cMin = cMin < 10 ? '0'+cMin : cMin;
            cHour = cHour <10 ? '0'+cHour : cHour;
            cMonth += 1;
            var year = cYear.toString();
            year = "20" + year.slice(1,3)
            if (parseFloat(cMonth) < 10) {
                cMonth = "0" + cMonth;
            }
            if (parseFloat(cDay) < 10) {
                cDay = "0" + cDay;
            }
            $("#compDate").val(cMonth + "" + "/" + cDay + "/" + year);
            nextButtonClicked();
        });
       $('.nextButton').trigger('click');
    }
});