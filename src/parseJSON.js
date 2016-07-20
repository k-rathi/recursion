// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var js;
  try {
  	js = eval(json);
  }
  catch (exception) {
  	js =null;
  }
  if (js) {
  	
  }
};
