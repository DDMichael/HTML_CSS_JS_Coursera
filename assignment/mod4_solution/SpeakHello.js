//SpealHello.js

(function (window) {
	var speakWord = "Hello";
   	var helloSpeaker = {};
	helloSpeaker.speak = function(name1) {
		console.log(speakWord + " " + name1);
	}
	window.helloSpeaker = helloSpeaker;

})(window);
