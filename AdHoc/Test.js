var returnedChartData;
var barColor='#cccccc';
var highlightBarColor='#444444';
var googleAPI='https://script.google.com/macros/s/AKfycbwU4n30OecLCtAvKsM02WDVhzHcXeCnWN7QnIkWt95-KoDPEbY/dev';
$(document).ready(function () {    
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    switch(curPage) {
        case 1:
            $('.nextButton').unbind();
            $('.nextButton').click(function(){
                logSurveyResponse('LTR',$('#LTR_row .ui-state-active').text());
                setTimeout(function(){nextButtonClicked();}, 3000);
            });
            break;
        case 2:
            prepareCharts();
    }
});
function logSurveyResponse(questionTag,score){    
    var data={
        survey:$('input[name=id]').val(),
        authKey:'testData',
        question:questionTag,
        score:score,
    };
    $.post(googleAPI,data,function(data,status){
        
    });
   
}
function getGoogleDataTable(questionTag,selectedAnswer,showAsPercent){
    var rawData=returnedChartData[questionTag];
    var data=[['Answer','Score',{role:'style'}]];
    for(var i=0;i<rawData.length;i++){
        if(rawData[i][0]==selectedAnswer){
            var color=highlightBarColor;
        } else {
            var color=barColor;
        }
        if(showAsPercent){
           data.push([rawData[i][0],rawData[i][2],color]);
        } else {
            data.push([rawData[i][0],rawData[i][1],color]);
        }
    }
    console.log(JSON.stringify(data));
    var dataTable=google.visualization.arrayToDataTable(data);   
    if(showAsPercent){
        var formatter=new google.visualization.NumberFormat({pattern:'#.#%'});
        formatter.format(dataTable,1);
    }
    return dataTable;
}

function drawBarChart(questionTag,elementId,chartOptions,selectedAnswer,showAsPercent){   
    var chart= new google.visualization.BarChart(document.getElementById(elementId));
    if(!chartOptions) chartOptions={};
    if(!chartOptions['legend']) chartOptions['legend']={}
    chartOptions['legend']['position']='none';
    if(showAsPercent){

        if(!chartOptions['hAxis']) chartOptions['hAxis']={};
        chartOptions['hAxis']['format']='percent';
        if(!chartOptions['vAxis']) chartOptions['vAxis']={};
        chartOptions['vAxis']['format']='percent';
    }
    console.log(chartOptions);
    chart.draw(getGoogleDataTable(questionTag,selectedAnswer,showAsPercent),chartOptions);
    $('#' + elementId).show();
}
function prepareCharts(){
    google.charts.load('current',{'packages':['corechart']});
    google.charts.setOnLoadCallback(retrieveChartData);
}
function retrieveChartData(){
    if(!returnedChartData){
        var data={
            survey:$('input[name=id]').val(),
            callType:'dataSummary'
        }
        $.get(googleAPI,data,function(data,status){
            // console.log(data);
            data=JSON.parse(data);
            returnedChartData=data['dataSummary'];
            // console.log(returnedChartData);
            drawCharts();
        });
    } else {
        drawCharts();
    }
}
// This is fired after the data is received.  Call your drawChart functions from here
function drawCharts(){
    var chartOptions={
        width:$('#template').width(),
        height:450,
        backgroundColor: 'none'
    }
    drawBarChart('LTR',$('.alleg-LTRContainer').attr('id'),chartOptions,"5",true)
}
// prepareCharts();