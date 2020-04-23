$(document).ready(function() {
    var curPage = parseInt($('input[name=currentpage]').val(), 10);    
    switch(curPage) {
        case 8:
            convertRightButtonsToRadios('Q6',2,false);
            $('#LTR_row').closest('table').addClass('last2ButtonsToRadios');
            break;
        case 29:
            $('#Q00000220').addClass('last2ButtonsToRadios');
            break;
    }
});
function convertRightButtonsToRadios(RowTag,numberOfButtonsToConvert,questionColumnVisible){
    // Mobile has the same tag assigned to the tr and tbody elements which breaks the code    
    if($('tbody#' + RowTag + '_row').length>0){
        $('tbody#' + RowTag + '_row').attr('id',RowTag + '_tbody');
        window.setTimeout(convertRightButtonsToRadios(RowTag,numberOfButtonsToConvert),1000);
    } else {
        RowTag='#' + RowTag + '_row';
        var tbl=$(RowTag).closest('table');
        tbl.find('.ScaleHeaderRight').addClass('ScaleHeaderCenter');
        tbl.find('.ScaleHeaderRight').removeClass('ScaleHeaderRight');
        tbl.css('table-layout','fixed');
        // Count columns
        var nth=$(RowTag + ' td').length; 
        if(questionColumnVisible){nth++;}
        console.log(nth);
        // Starting on the right, modify the columns
        
        for(var i=0;i<numberOfButtonsToConvert;i++){
            // console.log(nth);
            // tbl.find('tr td:nth-child(' + nth + ') label').hide();
            // tbl.find('tr td:nth-child(' + nth + ') input').removeClass('ui-helper-hidden-accessible').css('opacity','1');
            tbl.find('td:nth-child(' + nth + ') label').hide();
            tbl.find('td:nth-child(' + nth + ') input').removeClass('ui-helper-hidden-accessible')
            tbl.find('td:nth-child(' + nth + ') input').css('opacity','1');
            nth--;
        }
        if(questionColumnVisible){nth--;}
        tbl.find('.scale .multiScaleTableHeader tr td:nth-child(' + nth + ')').addClass('ScaleHeaderRight')
        tbl.find('.ScaleHeaderRight').removeClass('ScaleHeaderCenter');
    }
    
}