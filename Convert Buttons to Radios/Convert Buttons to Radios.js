function convertRightButtonsToRadios(RowTag,numberOfButtonsToConvert,includesQuestionColumn){
    // Mobile has the same tag assigned to the tr and tbody elements which breaks the code    
    if($('tbody#' + RowTag + '_row').length>0){
    //     $('tbody#' + RowTag + '_row').attr('id',RowTag + '_tbody');
    //     window.setTimeout(convertRightButtonsToRadios(RowTag,numberOfButtonsToConvert),1000);
    RowTag='tbody#' + RowTag + '_row';
        var tbl=$(RowTag);
    } else {
        RowTag='#' + RowTag + '_row';
        var tbl=$(RowTag).closest('table');
    }
        // console.log($('tbody#' + RowTag + '_row').length);
        // RowTag='tbody#' + RowTag + '_row';
        // var tbl=$(RowTag);
        tbl.find('.ScaleHeaderRight').hide();
        tbl.find('.ScaleHeaderRight').addClass('ScaleHeaderCenter');
        tbl.find('.ScaleHeaderRight').removeClass('ScaleHeaderRight');
        tbl.closest('table').css('table-layout','fixed');
        // Count columns
        var nth=$(RowTag + ' td').length; 
        // console.log(nth);
        // Starting on the right, modify the columns
        if(includesQuestionColumn){nth++;}
        for(var i=0;i<numberOfButtonsToConvert;i++){
            // console.log(nth);
            // tbl.find('tr td:nth-child(' + nth + ') label').hide();
            // tbl.find('tr td:nth-child(' + nth + ') input').removeClass('ui-helper-hidden-accessible').css('opacity','1');
            tbl.find('tr td:nth-child(' + nth + ') label').hide();
            tbl.find('tr td:nth-child(' + nth + ') input').removeClass('ui-helper-hidden-accessible')
            tbl.find('tr td:nth-child(' + nth + ') input').css('opacity','1');
            nth--;
        }
        if(includesQuestionColumn){nth--;}
        tbl.find('.scale .multiScaleTableHeader tr td:nth-child(' + nth + ')').addClass('ScaleHeaderRight')
        tbl.find('.ScaleHeaderRight').removeClass('ScaleHeaderCenter');
    // }
    
}
convertRightButtonsToRadios('Q30A_a');
function fixTBodyTag(tag){
    $('tbody#' + tag + '_row').attr('id',tag + '_tbody');
}
fixTBodyTag('Q30A_d');
window.setTimeout(convertRightButtonsToRadios('Q6',2),5000);