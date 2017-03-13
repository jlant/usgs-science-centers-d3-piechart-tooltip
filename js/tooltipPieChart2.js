function makeToolTipChart(data){
    console.log("Data passed to piechart", data);
    var low = data.properties.lines_of_work;
	var pie2 = new d3pie("tooltipPieChart", {
	"header": {
		"title": {
			"text": data.properties.name + " - Lines of Work",
			"color": "#ffffff",
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
		"canvasHeight": 500,
		"pieOuterRadius": "90%"
	},
	"data": {
		"sortOrder": "value-asc",
		"content": [
			{
				"label": "Continuous Monitoring",
				"value": parseFloat(low.ContinuousMonitoring),
				"color": "#2484c1"
			},
			{
				"label": "Discrete Monitoring",
				"value": parseFloat(low.DiscreteMonitoring),
				"color": "#0c6197"
			},
			{
				"label": "Hydrographic Surveys",
				"value": parseFloat(low.HydrographicSurveys),
				"color": "#4daa4b"
			},
			{
				"label": "Flood Science",
				"value": parseFloat(low.FloodScience),
				"color": "#90c469"
			},
			{
				"label": "Geomorphology",
				"value": parseFloat(low.Geomorphology),
				"color": "#daca61"
			},
			{
				"label": "Hazards",
				"value": parseFloat(low.Hazards),
				"color": "#e4a14b"
			},
			{
				"label": "Modeling",
				"value": parseFloat(low.Modeling),
				"color": "#e98125"
			},
			{
				"label": "Emerging Issues",
				"value": parseFloat(low.EmerginIssues),
				"color": "#cb2121"
			},
			{
				"label": "Labs (fee for service)",
				"value": parseFloat(low.Labs),
				"color": "#830909"
			},
			{
				"label": "Mitigation Efforts",
				"value": parseFloat(low.MitigationEfforts),
				"color": "#923e99"
			},
			{
				"label": "Atmospheric Deposition",
				"value": parseFloat(low.AtmosphericDepositon),
				"color": "#ae83d5"
			},
			{
				"label": "HABs",
				"value": parseFloat(low.HABs),
				"color": "#bf273e"
			},
			{
				"label": "Technical Assistance",
				"value": parseFloat(low.TechnicalAssistance),
				"color": "#ce2aeb"
			},
			{
				"label": "Water Use",
				"value": parseFloat(low.WaterUse),
				"color": "#bca44a"
			},
			{
				"label": "Analysis of Trends",
				"value": parseFloat(low.AnalysisOfTrends),
				"color": "#618d1b"
			},
			{
				"label": "Air Monitoring",
				"value": parseFloat(low.AirMonitoring),
				"color": "#1ee67b"
			},
			{
				"label": "Water Availability",
				"value": parseFloat(low.WaterAvailability),
				"color": "#b0ec44"
			},
			{
				"label": "Environmental and Human Health",
				"value": parseFloat(low.EnvironmentalAndHumanHealth),
				"color": "#a4a0c9"
			},
			{
				"label": "Energy and Minerals",
				"value": parseFloat(low.EnergyAndMinerals),
				"color": "#322849"
			},
			{
				"label": "Other",
				"value": parseFloat(low.Other),
				"color": "#86f71a"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 30
		},
		"inner": {
			"hideWhenLessThanPercentage": 2
		},
		"mainLabel": {
			"color": "#fbfbfb",
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#ffffff",
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
		"load": {
			"effect": "none"
		},
		"pullOutSegmentOnClick": {
			"effect": "none",
			"speed": 400,
			"size": 8
		},
		"highlightSegmentOnMouseover": false,
		"highlightLuminosity": -0.5
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	},
	"callbacks": {
		"onMouseoverSegment": null,
		"onMouseoutSegment": null,
		"onClickSegment": null
	}
});
	// Trick that allows me to set the style of the <text> tags within the pie chart without learning the underlying API
	// a 0 ms delay is used due to the loading of the labels for the pie segments having a delay
	// if executed without a delay then only the title will receive styling			
	setTimeout(stylePieChart, 1);
}
