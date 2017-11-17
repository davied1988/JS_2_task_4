function drawTree(levels) {
	var star = '';
	for (var i = 0; i < levels; i++) {
		star += '* ';
		for (var j = 0; j < levels; j++) {
		}
		console.log(star);
	}
}

console.log(drawTree);

drawTree(15);
