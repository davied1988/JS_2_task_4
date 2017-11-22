function drawTree(levels) {
	var star = '';
	for (var i = 0; i < levels; i++) {
		star += '* ';
        var space = '';
		for (var j = levels; j > i; j--) {
			space += " ";
		}
		console.log(space + star);
	}
}

drawTree(10);