$(document).ready(function(){
    let curPage = parseInt($('input[name=currentpage]').val(), 10);
    if (curPage == 6) {
        $(".nextButton").unbind();
        $(".nextButton").on("click touchstart", function(){
            let km1 = $("#Q000F453D_text").text().trim();
            let km2 = $("#Q000F453E_text").text().trim();
            let km3 = $("#Q000F453F_text").text().trim();
            let kmArr = [km1,km2,km3];
            let denominator = 0;
            let numerator = 0;
            for(var j = 0; j < kmArr.length; j++){
                if(kmArr[j] !== "[not answered]" && kmArr[j] !== "Don't know" && kmArr[j] !== "Refused"){
                    denominator += parseFloat(kmArr[j]);
                    numerator++;
                }
            }
            let indexAvg = denominator/numerator;
            $("#Loyalty_Index_question").val(indexAvg.toFixed(2));
            $("#Q000E89CD_Q000E89CE").val(indexAvg.toFixed(2));
            if (indexAvg <= 6.00) {
                $("#Risk_Category_question > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td.ControlCell > div > ins").click();
            } else if (indexAvg <= 8.99 && indexAvg >= 6.01) {
                $("#Risk_Category_question > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.ControlCell > div > ins").click();
            } else {
                $("#Risk_Category_question > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td.ControlCell > div > ins").click();
            }
            nextButtonClicked();
        });
    }
    if (curPage == 28) {
        $(".nextButton").unbind();
        $(".nextButton").on("click touchstart", function(){
                if($('#CB1_question input:checkbox:checked').length > 1)  {
                      $('#Q002E4F31_Q002E4F32_A2').prop('checked',true);
                } else {
                      $('#Q002E4F31_Q002E4F32_A1').prop('checked',true);
                };
            nextButtonClicked();
        });
    }
if (curPage == 32) {
        $(".nextButton").unbind();
        $(".nextButton").on("click touchstart", function(){
        let kmArr = [];
         $('[id$="_text"]').each(function(){
	        kmArr.push($(this).text());
         });
            let FISdenominator = 0;
            let FISnumerator = 0;
            let Fiservdenominator = 0;
            let Fiservnumerator = 0;
            let PSCUdenominator = 0;
            let PSCUnumerator = 0;
            let Primaxdenominator = 0;
            let Primaxnumerator = 0;
            let VISAdenominator = 0;
            let VISAnumerator = 0;
            for(var j = 0; j < kmArr.length; j++){
                if(kmArr[j] !== "[not answered]" && kmArr[j] !== "Don't know" && kmArr[j] !== "Refused" && j < 3){
                    FISdenominator += parseFloat(kmArr[j]);
                    FISnumerator++;
                }
                if(kmArr[j] !== "[not answered]" && kmArr[j] !== "Don't know" && kmArr[j] !== "Refused" && j > 2 && j < 6){
                    Fiservdenominator += parseFloat(kmArr[j]);
                    Fiservnumerator++;
                }
                if(kmArr[j] !== "[not answered]" && kmArr[j] !== "Don't know" && kmArr[j] !== "Refused" && j > 5 && j < 9){
                    PSCUdenominator += parseFloat(kmArr[j]);
                    PSCUnumerator++;
                }
                if(kmArr[j] !== "[not answered]" && kmArr[j] !== "Don't know" && kmArr[j] !== "Refused" && j > 8 && j < 12){
                    Primaxdenominator += parseFloat(kmArr[j]);
                    Primaxnumerator++;
                }
                if(kmArr[j] !== "[not answered]" && kmArr[j] !== "Don't know" && kmArr[j] !== "Refused" && j > 11 && j < 15){
                    VISAdenominator += parseFloat(kmArr[j]);
                    VISAnumerator++;
                }
            }
            let FISindexAvg = FISdenominator/FISnumerator;
            $("#FIS_CB_Loyalty_Index").val(FISindexAvg.toFixed(2));
            $("#FIS_CB_Loyalty_Index_SF").val(FISindexAvg.toFixed(2));
            if (FISindexAvg <= 6.00) {
                $("#FIS_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td.ControlCell > div > ins").click();
            } else if (FISindexAvg <= 8.99 && FISindexAvg >= 6.01) {
                $("#FIS_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.ControlCell > div > ins").click();
            } else if(FISindexAvg > 8.99 && FISindexAvg <= 10) {
                $("#FIS_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td.ControlCell > div > ins").click();
            }
            let FiservindexAvg = Fiservdenominator/Fiservnumerator;
            $("#Fiserv_CB_Loyalty_Index").val(FiservindexAvg.toFixed(2));
            $("#Fiserv_CB_Loyalty_Index_SF").val(FiservindexAvg.toFixed(2));
            if (FiservindexAvg <= 6.00) {
                $("#Fiserv_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td.ControlCell > div > ins").click();
            } else if (FiservindexAvg <= 8.99 && FiservindexAvg >= 6.01) {
                $("#Fiserv_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.ControlCell > div > ins").click();
            } else if(FiservindexAvg > 8.99 && FiservindexAvg <= 10){
                $("#Fiserv_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td.ControlCell > div > ins").click();
            }
            let PSCUindexAvg = PSCUdenominator/PSCUnumerator;
            $("#PSCU_CB_Loyalty_Index").val(PSCUindexAvg.toFixed(2));
            $("#PSCU_CB_Loyalty_Index_SF").val(PSCUindexAvg.toFixed(2));
            if (PSCUindexAvg <= 6.00) {
                $("#PSCU_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td.ControlCell > div > ins").click();
            } else if (PSCUindexAvg <= 8.99 && PSCUindexAvg >= 6.01) {
                $("#PSCU_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.ControlCell > div > ins").click();
            } else if(PSCUindexAvg > 8.99 && PSCUindexAvg <= 10){
                $("#PSCU_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td.ControlCell > div > ins").click();
            }
            let PrimaxindexAvg = Primaxdenominator/Primaxnumerator;
            $("#Primax_CB_Loyalty_Index").val(PrimaxindexAvg.toFixed(2));
            $("#Primax_CB_Loyalty_Index_SF").val(PrimaxindexAvg.toFixed(2));
            if (PrimaxindexAvg <= 6.00) {
                $("#Primax_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td.ControlCell > div > ins").click();
            } else if (PrimaxindexAvg <= 8.99 && PrimaxindexAvg >= 6.01) {
                $("#Primax_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.ControlCell > div > ins").click();
            } else if(PrimaxindexAvg > 8.99 && PrimaxindexAvg <= 10){
                $("#Primax_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td.ControlCell > div > ins").click();
            }
            let VISAindexAvg = VISAdenominator/VISAnumerator;
            $("#VISA_CB_Loyalty_Index").val(VISAindexAvg.toFixed(2));
            $("#VISA_CB_Loyalty_Index_SF").val(VISAindexAvg.toFixed(2));
            if (VISAindexAvg <= 6.00) {
                $("#VISA_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td.ControlCell > div > ins").click();
            } else if (VISAindexAvg <= 8.99 && VISAindexAvg >= 6.01) {
                $("#VISA_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.ControlCell > div > ins").click();
            } else if(VISAindexAvg > 8.99 && VISAindexAvg <= 10){
                $("#VISA_CB_Risk_Cat_question > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td.ControlCell > div > ins").click();
            }
            $('[type="text"]').each(function(){
	        if($(this).val() == 'NaN') {
                     $(this).val('');
                };
            });
            nextButtonClicked();
        });
    }
});