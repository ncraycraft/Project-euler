var highnum=1;
var lownum=1;
var sum=0;

while (highnum<=4000000) {
	highnum=highnum+lownum;
	lownum=highnum-lownum;
	
	if (highnum%2==0) {
		sum=highnum+sum;
	}
}
console.log(sum);


