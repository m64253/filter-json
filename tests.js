var Assert = require('assert'),
	filterJSON = require('./filter-json'),
	json1 = {
		"glossary": {
			"title": "example glossary",
			"GlossDiv": {
				"title": "S",
				"GlossList": {
					"GlossEntry": {
						"ID": "SGML",
						"SortAs": "SGML",
						"GlossTerm": "Standard Generalized Markup Language",
						"Acronym": "SGML",
						"Abbrev": "ISO 8879:1986",
						"GlossDef": {
							"para": "A meta-markup language, used to create markup languages such as DocBook.",
							"GlossSeeAlso": ["GML", "XML"]
						},
						"GlossSee": "markup"
					}
				}
			}
		}
	},
	json2 = {
		"menu": {
			"header": "SVG Viewer",
			"items": [
				{"id": "Open"},
				{"id": "OpenNew", "label": "Open New"},
				null,
				{"id": "ZoomIn", "label": "Zoom In"},
				{"id": "ZoomOut", "label": "Zoom Out"},
				{"id": "OriginalView", "label": "Original View"},
				null,
				{"id": "Quality"},
				{"id": "Pause"},
				{"id": "Mute"},
				null,
				{"id": "Find", "label": "Find..."},
				{"id": "FindAgain", "label": "Find Again"},
				{"id": "Copy"},
				{"id": "CopyAgain", "label": "Copy Again"},
				{"id": "CopySVG", "label": "Copy SVG"},
				{"id": "ViewSVG", "label": "View SVG"},
				{"id": "ViewSource", "label": "View Source"},
				{"id": "SaveAs", "label": "Save As"},
				null,
				{"id": "Help"},
				{"id": "About", "label": "About Adobe CVG Viewer..."}
			]
		}
	}
	
Assert.deepEqual(filterJSON(json1, 'glossary.GlossDiv.GlossList.GlossEntry.GlossDef.para'), [
	'A meta-markup language, used to create markup languages such as DocBook.'
]);

Assert.deepEqual(filterJSON(json2, 'menu.items.label'), [
	'Open New',
	'Zoom In',
	'Zoom Out',
	'Original View',
	'Find...',
	'Find Again',
	'Copy Again',
	'Copy SVG',
	'View SVG',
	'View Source',
	'Save As',
	'About Adobe CVG Viewer...'
]);


console.log('json1: ', filterJSON(json1, 'glossary.GlossDiv.GlossList.GlossEntry.GlossDef.para'));
console.log('json2: ', filterJSON(json2, 'menu.items.label'));