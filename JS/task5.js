var a = prompt('Введіть a', 0);
var b = prompt('Введіть b', 0);
var c = prompt('Введіть c', 0);

var x1;
var x2;
var D = b*b - 4*a*c;

alert(D + ' - наш дискримінант');

if (D > 0) {
	x1 = (-b + Math.sqrt(D)) / (2*a);
	x2 = (-b - Math.sqrt(D)) / (2*a);
	alert('x1 = ' + x1 + '    ' + 'x2 = ' + x2);
}

else if (D == 0) {
	x1 = (-b + Math.sqrt(D)) / (2*a);
	alert('x = ' + x1);
}

else {
	alert('Коренів немає');
}