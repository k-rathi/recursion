// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
)  {
	var nodes = [];
  	function check(node) {
    	if (_(node.classList).contains(className)) nodes.push(node);
    	_(node.childNodes).forEach(function(next) { check(next);});
  	}
  check(document.body);
  return nodes;
}