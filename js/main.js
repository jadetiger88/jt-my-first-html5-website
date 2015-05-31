function showMe() {
	name = document.getElementById("name").value; 
	mood = document.getElementById("mood").value; 
	if (!name || !mood) {
		alert("Please enter all field(s).");
		return false;
	}

	if (mood == "happy") {
		face = " :)";
	} else if (mood == "sad") {
		face = " :("
	} else {
		face = " :|"
	}

	moodString = name + " is " + mood + " today" + face;
	result = document.getElementById("result");
	result.innerHTML = moodString;
}

function clearMood() {
	document.getElementById("mood-form").reset();
	result = document.getElementById("result");
	result.innerHTML = "";
}
