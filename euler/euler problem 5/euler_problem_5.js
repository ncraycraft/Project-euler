var num = 9699690;
var answer = 0;
while (answer == 0) {
	console.log(num);
    if ((num % 10 == 0) && (num % 11 == 0) && (num % 12 == 0) && (num % 13 == 0) && (num % 14 == 0) && (num % 15 == 0) && (num % 16 == 0) && (num % 17 == 0) && (num % 18 == 0) && (num % 19 == 0)) {
        console.log(num);
    	answer = num;
    }
    num = num + 9699690;
}
