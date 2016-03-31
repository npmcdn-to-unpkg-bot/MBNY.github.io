// 1. Use document.getElementById() and attach an .onclick event handler to #clickme
// document.getElementById('clickme').onclick  = tellFortune;
$('#clickme').click(tellFortune);

// 2. Assign this event handler to a function named tellFortune
// 3. The function ellFortune should:
function tellFortune() {
	var hometown = document.getElementById('hometown').value;
	var partner = document.getElementById('partner').value;
	var favNum = document.getElementById('favNum').value;
	var jobTitle = document.getElementById('jobTitle').value;

	var outputStr = "You will be a " + jobTitle + "living in " + hometown + "married to " + partner + "with " + favNum + " kids";

document.getElementById('output').innerHTML = outputStr;
$('#output')html(outputStr)

}





// - A) store the values from the four inputs (#hometown, #partner, #favNum, #jobTitle) in variables
// - B) concatenate these variables into the sentence:
// - "You will be a " + jobTitle + " living in " + hometown + " married to " + partner + " with " + favNum + " kids."
// - C) output this string to #output
