function makeToolTipChart(data){
    console.log("Data passed to piechart", data);
    var p = data.properties;
    var pie2 = new d3pie("tooltipPieChart", {
    "header": {
        "title": {
            "text": "Kentucky - Mission Area Funding",
            "color": "#ffffff",
            "fontSize": 24,
            "font": "open sans",
            "stroke": "none",
            "fill": "white"
        },
        "subtitle": {
            "color": "#999999",
            "fontSize": 12,
            "font": "open sans"
        },
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasWidth": 590,
        "pieOuterRadius": "50%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
                "label": "Water",
                "value": p.water_total,
                "color": "#2484c1"
            },
            {
                "label": "Ecosystems",
                "value": p.ecosystems_total,
                "color": "#0c6197"
            },
            {
                "label": "Energy",
                "value": p.em_total,
                "color": "#4daa4b"
            },
            {
                "label": "Hazards",
                "value": p.hazards_total,
                "color": "#90c469"
            },
            {
                "label": "Climate",
                "value": p.clu_total,
                "color": "#daca61"
            },
            {
                "label": "Core",
                "value": p.css_total,
                "color": "#e4a14b"
            },
            {
                "label": "Environmental",
                "value": p.eh_total,
                "color": "#e98125"
            },
            {
                "label": "Administration",
                "value": p.aei_total,
                "color": "#cb2121"
            },
            {
                "label": "Misc",
                "value": p.misc,
                "color": "#830909"
            }
        ]
    },
    "labels": {
        "outer": {
            "pieDistance": 25
        },
        "inner": {
            "hideWhenLessThanPercentage": 3
        },
        "mainLabel": {
            "color": "#ffffff",
            "fontSize": 14,
            "stroke": "none",
            "fill": "white"
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0,
            "stroke": "none",
            "fill": "white"
        },
        "value": {
            "color": "#ffffff",
            "fontSize": 12,
            "stroke": "none",
            "fill": "white"
        },
        "lines": {
            "enabled": true
        },
        "truncation": {
            "enabled": true
        }
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "none",
            "speed": 400,
            "size": 8
        },
        "highlightSegmentOnMouseover": false,
        "highlightLuminosity": -0.5
    },
    "misc": {
        "colors": {
            "background": "#181818"
        },
        "gradient": {
            "enabled": true,
            "percentage": 70
        }
    },
    "callbacks": {
        "onMouseoverSegment": null,
        "onMouseoutSegment": null,
        "onClickSegment": null
    }
})};