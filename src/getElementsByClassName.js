// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var result = [];

	var douglasCrockfordDoesNotWalkTheDOM_HeStruts = function(node) {
    	if (node.classList !== undefined && node.classList.contains(className)){
			result.push(node);
		}

		node = node.firstChild;
			while (node) {
			douglasCrockfordDoesNotWalkTheDOM_HeStruts(node);
			node = node.nextSibling;
		}
	};

douglasCrockfordDoesNotWalkTheDOM_HeStruts(document.body);
return result;

};