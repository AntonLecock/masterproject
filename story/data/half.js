var half_light_json = {
"type":"FeatureCollection",

"features":[
	{
		"type":"Feature",
		"geometry": {
			"type":"Polygon",
			"coordinates": [
				[ [0.0, 90.0], [-180.0, 0.0], [0.0, -90.0], [0.0, 0.0], [0.0, 90.0] ]
			]
		}
	}
]
} 

var half_shade_json = {
"type":"FeatureCollection",

"features":[
	{
		"type":"Feature",
		"geometry": {
			"type":"Polygon",
			"coordinates": [
				[ [0.0, 90.0], [0.0, 0.0], [0.0, -90.0], [-180.0, 0.0], [0.0, 90.0] ]
			]
		}
	}
]
}

var full_json = {
"type":"FeatureCollection",

"features":[
	{
		"type":"Feature",
		"geometry": {
			"type":"Polygon",
			"coordinates": [
				[ [0.0, 90.0], [-180.0, 0.0], [0.0, -90.0], [0.0, 0.0], [0.0, 90.0] ]
			]
		}
	},
	{
		"type":"Feature",
		"geometry": {
			"type":"Polygon",
			"coordinates": [
				[ [0.0, 90.0], [0.0, 0.0], [0.0, -90.0], [-180.0, 0.0], [0.0, 90.0] ]
			],

		}
	}
]
}  