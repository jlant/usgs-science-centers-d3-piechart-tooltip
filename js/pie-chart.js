var pie = new d3pie("pieChart", {
    "header": {
        "title": {
            "fontSize": 24,
            "font": "open sans"
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
        "canvasWidth": 700,
        "pieOuterRadius": "90%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
                "label": "Continuous Monitoring ",
                "value": 7384464,
                "color": "#2484c1"
            },
            {
                "label": "Discrete Monitoring ",
                "value": 2722646,
                "color": "#0c6197"
            },
            {
                "label": "Hydrographic Surveys",
                "value": 314200,
                "color": "#4daa4b"
            },
            {
                "label": "Flood Science ",
                "value": 611982,
                "color": "#90c469"
            },
            {
                "label": "Geomorphology ",
                "value": 0,
                "color": "#daca61"
            },
            {
                "label": "Hazards",
                "value": 0,
                "color": "#e4a14b"
            },
            {
                "label": "Modeling ",
                "value": 19000,
                "color": "#e98125"
            },
            {
                "label": "Emerging Issues",
                "value": 0,
                "color": "#cb2121"
            },
            {
                "label": "Labs (fee for service) ",
                "value": 134856,
                "color": "#830909"
            },
            {
                "label": "Mitigation Efforts",
                "value": 0,
                "color": "#923e99"
            },
            {
                "label": "Atmospheric Depostion ",
                "value": 20100,
                "color": "#ae83d5"
            },
            {
                "label": "HABs",
                "value": 0,
                "color": "#bf273e"
            },
            {
                "label": "Technical Assistance",
                "value": 27500,
                "color": "#ce2aeb"
            },
            {
                "label": "Water Use",
                "value": 0,
                "color": "#bca44a"
            },
            {
                "label": "Analysis of Trends ",
                "value": 36400,
                "color": "#618d1b"
            },
            {
                "label": "Air Monitoring ",
                "value": 832943,
                "color": "#1ee67b"
            },
            {
                "label": "Water Availability ",
                "value": 67026,
                "color": "#b0ec44"
            },
            {
                "label": "Environmental and Human Health ",
                "value": 0,
                "color": "#a4a0c9"
            },
            {
                "label": "Energy and Minerals ",
                "value": 0,
                "color": "#322849"
            },
            {
                "label": "Other ",
                "value": 0,
                "color": "#248838"
            }
        ]
    },
    "labels": {
        "outer": {
            "format": "label-value2",
            "pieDistance": 32
        },
        "inner": {
            "hideWhenLessThanPercentage": 3
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#adadad",
            "fontSize": 11
        },
        "lines": {
            "enabled": true,
            "style": "straight"
        },
        "truncation": {
            "enabled": true
        }
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 100
        }
    }
});