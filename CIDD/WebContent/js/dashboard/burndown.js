$(document).ready(function() {

    var estimated_data=[
                        {
                            "value": "7"
                        },
                        {
                            "value": "6"
                        },
                        {
                            "value": "5"
                        },
                        {
                            "value": "4"
                        },
                        {
                            "value": "3"
                        },
                        {
                            "value": "2"
                        },
                        {
                            "value": "0"
                        }
                    ];
    var actual_data=[
                        {
                            "value": "7"
                        },
                        {
                            "value": "6"
                        },
                        {
                            "value": "6"
                        },
                        {
                            "value": "5"
                        },
                        {
                            "value": "4"
                        },
                        {
                            "value": "2"
                        },
                        {
                            "value": "1"
                        }
                    ];
    var burndown_xaxis=[
                        {
                            "label": "Sprint1"
                        },
                        {
                            "label": "Sprint2"
                        },
                        {
                            "label": "Sprint3"
                        },
                        {
                            "label": "Sprint4"
                        },
                        {
                            "label": "Sprint5"
                        },
                        {
                            "label": "Sprint6"
                        },
                        {
                            "label": "Sprint7"
                        }
                    ];
    var burndown_data=
        {
            "chart": {
                "caption": "Total burndown of the project",
                "subCaption": "Estimated vs Actual",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "paletteColors": "#0075c2,#1aaf5d",
                "bgcolor": "#ffffff",
                "showBorder": "0",
                "showShadow": "0",
                "showCanvasBorder": "0",
                "usePlotGradientColor": "0",
                "legendBorderAlpha": "0",
                "legendShadow": "0",
                "showAxisLines": "0",
                "showAlternateHGridColor": "0",
                "divlineThickness": "1",
                "divLineDashed": "1",
                "divLineDashLen": "1",
                "divLineGapLen": "1",
                "xAxisName": "Day",
                "showValues": "0"
            },
            "categories": [
                {
                    "category": burndown_xaxis
                }
            ],
            "dataset": [
                {
                    "seriesname": "Estimated",
                    "data": estimated_data
                },
                {
                    "seriesname": "Actual",
                    "data": actual_data
                }
            ],

        }

    FusionCharts.ready(function(){
        var burndown_instance = new FusionCharts({
            type: "msline",
            renderAt: "burndownchart",
            width: "90%",
           // height: "90%",
            dataFormat: "json",
            dataSource: burndown_data
        });
        burndown_instance.render("burndownchart");
    });
});
