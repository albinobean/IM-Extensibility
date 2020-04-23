(function (data, valueNames, servicealerts) {
    renderHighchart(servicealerts);

    function scoreColour(score) {
        if(score<=10) {return "#71b431"}
        else if(score<=25) {return "#999999"}
        else {return "#ff8a00"}
    }

    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }
    function renderHighchart(servicealerts) {
        var hcOptions = {
            chart : {
                type : 'gauge'
            },
            credits : {
                enabled : false
            },
            exporting : {
                enabled : false
            },

            pane : {
                startAngle : -100,
                endAngle : 100,
                background : null
            },
            "title" : {
                "text" : "€"+numberWithCommas(parseFloat(7750*parseFloat(data[0].Value).toFixed(0))),
                "style" : {
                    "color" : "#615d61",
                    "fontSize" : "16pt",
                    "fontFamily" : "Arial",
                    "letterSpacing" : "2px",
                    "textOverflow" : "ellipsis",
                    "overflow" : "visible",
                    "width" : "400px"
                }
            },

            // the value axis
            yAxis : {
                min : 0,
                max : 50,
                minorTickWidth : 0,
                tickInterval: 25,
                tickWidth : 2,
                tickPosition : 'outside',
                tickLength : 0,
                tickColor : '#666',
                title : {
                    text : null
                },
                labels : {
                    distance : 25
                },
                plotBands : [{
                    from : 0,
                    to : 10,
                    thickness : 30,
                    zIndex : 1,
                    borderWidth : 2,
                    borderColor : '#FFF',
                    color : '#71b431' // green
                },
                    {
                        from : 10,
                        to : 25,
                        thickness : 30,
                        zIndex : 2,
                        borderWidth : 2,
                        borderColor : '#FFF',
                        color : '#999999' // grey
                    },
                    {
                        from : 25,
                        to : 50,
                        thickness : 30,
                        zIndex : 3,
                        borderWidth : 2,
                        borderColor : '#FFF',
                        color : '#ff8a00' // red
                    }
                ]
            },

            series : [{
                name : ' ',
                data : [parseFloat(parseFloat(data[0].Value).toFixed(0))],
                dataLabels : {
                    y: 50,Gauge.js
                    formatter: function()
                    {
                        return '<div style="font-size: 22px;">' + this.series.name + '</div><div style="text-align: center">' + this.y +  '</div>';
                    },
                    style: {
                        textAlign: 'center',
                        "color" : [scoreColour(parseFloat(parseFloat(data[0].Value).toFixed(0)))],
                        "fontSize" : "22pt",
                        "fontFamily" : "Arial",
                        "letterSpacing" : "2px",
                        "textOverflow" : "ellipsis",
                        "overflow" : "visible",
                    },
                    borderWidth: 0,
                    useHTML: true
                }
            }
            ]
        };
        servicealerts.highcharts(hcOptions);
    }

})(data, valueNames, self.$el.find('.reportingStaticTileContent'));
