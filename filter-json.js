(function(global){
	
	var isArray = Array.isArray || function(obj) { 
			return Object.prototype.toString.call(obj) === '[object Array]';
		};
		
	function filterJSON(json, selector, results) {
		
		results = results || [];
		
		var currentSelector,
			len,
			i,
			key;
			
		// Make sure the selector is an array
		if (!isArray(selector)) {
			selector = selector.split('.');
		}
		
		// 
		if (selector.length === 0) {
			results.push(json);
		
		//	Loop over
		} else if (isArray(json)) {
			for (i=0,len=json.length; i < len; i++) {
				results = filterJSON(json[i], selector.slice(), results);
			}
			
		// Loop over and check keys
		} else {
			currentSelector = selector.shift();
			for (key in json) {
				if (json.hasOwnProperty(key) && key === currentSelector) {
					results = filterJSON(json[key], selector.slice(), results);
				} 
			}
		}
		return results;
	}
	
	// Export as module or set as a global
	if (typeof(module) !== 'undefined' && module.exports) {
		module.exports = filterJSON;
	} else {
		global.filterJSON = filterJSON;
	}
}(this));
