var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

function stackLetters(theAlphabetArray) {
	var alphabet2 = "";
	for(var i = 0, x = theAlphabetArray.length; i < x; i++) {
		if(i % 3 === 0) {
			alphabet2 += " "
		}
		alphabet2 += theAlphabetArray[i];
		console.log(alphabet2);
	}
}
stackLetters(alphabet);

