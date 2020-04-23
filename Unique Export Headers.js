javascript:(function () {
    var hdrInputs=$('#sortable2 input');
    console.log(hdrInputs.length);
    var labels=[];
    hdrInputs.forEach(function(i){
        console.log(i.valueOf())
    })

})();