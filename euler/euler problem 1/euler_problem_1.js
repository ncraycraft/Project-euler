var numbervalue=0
var sum=0

for (numbervalue=0;numbervalue<1000;numbervalue=numbervalue+1)
	{
	if (numbervalue%3==0 || numbervalue%5==0){
		sum += numbervalue;
	}
	}
console.log(sum);

	