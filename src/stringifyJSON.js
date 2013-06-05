// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (input) {
	var i, key;
	if (input === null) {
		return "null";
	} else if (typeof input === 'string') {
		return '"' + input + '"';
	} else if (Array.isArray(input)) {
		var result = [];
		for (i=0; i<input.length; i++) {
			result.push(stringifyJSON(input[i]));
		}
		return "[" + result + "]";
	} else if (typeof input === 'object') {
		var result = [];
		for (key in input) {
			if (typeof input[key] === 'function') return "{}";
				result.push(stringifyJSON(key) + ":" + stringifyJSON(input[key]));
			}
		return "{" + result + "}";
	} else {
		return input.toString();
	}
};

/*
var stringifyJSON = function (obj) {
	if(obj === undefined) {
		return '';
	} if( typeof obj === 'number' || typeof obj === 'boolean' ){
		return obj.toString();
	} else if ( obj === null ) {
		return "null";
	} else if ( typeof obj === 'string' ) {
		return '"' + obj + '"';
	} else if(obj instanceof Object){

		if( Array.isArray(obj) ){ 
		// if this is an array...
			var arrToString = [];

			for(var i=0; i<obj.length; i++){
				arrToString.push(stringifyJSON(obj[i]));
			}
			arrToString = '[' + arrToString + ']';
			return arrToString;

		} else { 
		// else this is an object...
			var objToString = [],
				keyItem, val;

			for(var key in obj){
		 		keyItem = stringifyJSON(key);
		 		val = stringifyJSON(obj[key]);

		 		if(val === "{}") {
		 			console.log(val);
		 		}

		 		if(val != "") {
		 			objToString.push(keyItem + ':' + val);
		 		} else {
		 			return "{}";
		 		}
			}
			return '{' + objToString + '}';
		}
	}
};

var stringifyJSON = function (obj) {
var string = '';
function next(node){

	// Exceptions
	if(typeof node == "function" || typeof node == "undefined"){
		return false;
	}

	// Simple
    if(typeof node == "number" || typeof node == "string" || typeof node == "boolean" || node == null){
        string += (typeof node == "string")? '\"' + node + '\"' : node + '';
    }
    
	// Arrays
	if(Array.isArray(node)){
        string += "[";	
		for(var i in node){	
			next(node[i]);
			if(i != node.length - 1){
				string += ",";
			}			
		}        
        string += "]";
    }

	// Objects
    if(typeof node == "object" && !Array.isArray(node) && node != null){
        string += "{";

		for(var i in node){
			// if there's no valid value miss out
			if(typeof node[i] !== "function" && typeof node[i] !== "undefined"){			
				next(i);			
				string += ":";
				next(node[i]);
				// if not the last property
				if(Object.keys(node)[Object.keys(node).length-1] != i){
					string += ",";
				}
			}
		}
        
        string += "}";
    }
}
next(obj);
return string
};

var stringifyJSON = function (obj) {
	var i;
	if(obj == null) {
		return "null";
	} else if (typeof obj !== "object") {
		if(typeof obj == "string"){
			return '"' + obj + '"'
		}
		return obj.toString();
	} else {
    var objectType = Object.prototype.toString.call(obj);
	  var mytype = objectType.slice(8, -1).toLowerCase();
	  var emptyArray = [];
	  if(mytype == "object"){
		  for(i=0; i < Object.keys(obj).length; i++){
		  	var keyMemo = Object.keys(obj)[i];
		  	var valueMemo = obj[Object.keys(obj)[i]];
		    var stringKey = '"' + keyMemo + '"'
		    if (valueMemo === undefined){
		    	return "{}";
		    } else if(typeof valueMemo == "function"){
          return "{}";
		    }
		    else if(typeof valueMemo == "object"){
		    	valueMemo = stringifyJSON(valueMemo);
		    } else if(typeof valueMemo == "string"){
		    	var valueMemo = '"' + valueMemo + '"'
		    };
		    emptyArray.push(stringKey + ":" + valueMemo);  
		  };
		  return "{" + (emptyArray.join()) + "}";
		} else {
			for(i=0; i<obj.length; i++){
				var arraymemo = obj[i];
				if(typeof arraymemo == "string"){
					arraymemo = '"' + obj[i] + '"';
				} else if(typeof arraymemo == "object"){
					arraymemo = stringifyJSON(obj[i]);
				}
				emptyArray.push(arraymemo);
			};
			return "[" + (emptyArray.join()) + "]";
		};
	};
};

var stringifyJSON = function (obj) {
  if (Array.isArray(obj)) return arrReturn(obj);
  else if (obj === null) return "null";
  else if (typeof obj === 'object') return objReturn(obj);
  else if (typeof obj === 'string') return '"' + obj + '"';
  else return "" + obj;
};

var arrReturn = function(arr) {
  var resArr = [];
  for (var i = 0; i < arr.length; i++) resArr.push(stringifyJSON(arr[i]));
  return "[" + resArr + "]";
};

var objReturn = function(obj) {
  var objArr = [];
  for (var k in obj) {
    if (typeof obj[k] === 'function') return "{}";
    objArr.push(stringifyJSON(k) + ":" + stringifyJSON(obj[k]));
  }
  return "{" + objArr + "}";
};

var stringifyJSON = function(obj){
	var result='';
	if (typeof obj==="object"){
		if (obj===null){
			return "null";
		}
		if (Array.isArray(obj)){
			for (var i=0;i<obj.length;i++){
				result+=(stringifyJSON(obj[i]));
				if (i<obj.length-1){
					result+=",";
				}
			}
			return "["+result+"]";
		}
		else{
			var count=0;
			for (var key in obj){
			if (typeof obj[key]!="function" && typeof obj[key]!="undefined" ){
			result+= stringifyJSON(key);
			result+=":";
			result+= stringifyJSON(obj[key]);
			count++;
			if (count<Object.keys(obj).length){
					result+=",";
				}
			}
		}
		return "{"+result+"}";
	}
}
	if (typeof obj=== "string"){
		return '"' + obj + '"';
	}
	return String(obj);
};
*/