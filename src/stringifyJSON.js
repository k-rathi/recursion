// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	console.log(obj);
	if(obj === null) return 'null';
	if(obj === undefined || obj.constructor===Function || typeof(obj) === 'function') return '';
	if(obj.constructor === Boolean) {
		return String(obj);
	}
	if(obj.constructor === String) {
		return "\""+obj+"\"";
	}
	if(obj.constructor === Number) {
		return String(obj);
	}
	if(obj.constructor === Object) {
		var val = "{"
		for(prop in obj) {
			if (!prop || obj[prop] === undefined || typeof prop === 'function' || typeof obj[prop] === 'function') {

			} else {
			val += stringifyJSON(prop) +":" + stringifyJSON(obj[prop]) +",";
			}
		}
		val = val.replace(/,\s*$/, "");
		val += "}";
		return val;
	}
	if(Array.isArray(obj)) {
		var val = "[" + stringifyJSON(obj[0]);
		for(var i = 1; i < obj.length; i++) {
			console.log(obj[i]);
			val += "," + stringifyJSON(obj[i]);
		}
		val += "]";
		return val;
	}
	
  // your code goes here
};
