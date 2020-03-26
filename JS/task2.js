var num1 = prompt('Введіть перше число', 0);
var num2 = prompt('Введіть друге число', 0);

var dif1 = 10 - num1;
var dif2 = 10 - num2;

if (Math.abs(dif1) > Math.abs(dif2)) {
	alert('Друге число ближче до 10 аніж перше');
}

else if (Math.abs(dif2) > Math.abs(dif1)) {
	alert('Перше число ближче до 10 аніж друге');
}

else {
	alert('Числа рівні');
}