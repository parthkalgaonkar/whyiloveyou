const quotes = [
	"I know that I can always talk to you. Even when you're busy",
	"You find me funny enough to tolerate my bad jokes",
	"You are (almost) as good a gift giver as I am",
	"You like me enough to tolerate me",
	"You are the sweetest, most caring person I've ever met",
	"Even when we fight, we find a positive way to fix things",
	"You support me in my overthinking spirals",
	"We can have all the junk food we want together",
	"You are the smartest person I've ever known",
	"You are my person"
];

Array.prototype.sample = function() {
	return this[Math.floor(Math.random()*this.length)];
}

function quoteClickHandler() {
	const quote	= $("#quote");
	var sample	= quotes.sample();

	quote.fadeOut(1000, function() {
		quote.html(sample).fadeIn(1000)
	})
}

function quoteHoverIn() {
	$('#title-container').animate({
		width: "83.333333%"
	}, 500);
}

function quoteHoverOut() {
	$('#title-container').animate({
		width: "66.666667%"
	}, 500);
}

$(document).ready(function() {
	const container = $("#quote-container");

	quoteClickHandler();
	container.click(quoteClickHandler);
	container.hover(quoteHoverIn, quoteHoverOut);
});
