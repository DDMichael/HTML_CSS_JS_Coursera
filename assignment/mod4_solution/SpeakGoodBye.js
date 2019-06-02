// SpeakGoodBye.js

(function (window) {
	var speakWord = "Good Bye";
	var byeSpeaker = {};
	byeSpeaker.speak = function (name1) {
		console.log(speakWord + " " + name1);
	}

	window.byeSpeaker = byeSpeaker;

})(window);
