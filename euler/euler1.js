var d=new Date();
var theDay=d.getDay();
var r = confirm("Do You wish to know the day?");
if (r == true);
	{
	switch (theDay)
	{
	case 1:
		alert("Manic Monday");
		break;
	case 2:
		alert("Terrible Tuesday");
		break;	
	case 3:
		alert("Wind-up Wednesday");
		break;	
	case 4:
		alert("This is Thursday");
		break;  
	case 5:
		alert("Finally Friday");
		break;
	case 6:
		alert("Super Saturday");
		break;
	case 0:
		alert("Sleepy Sunday");
		break;
	default:
		document.write("I'm looking forward to this weekend!");
}
}
var i=0;
for (i=0;i<=5;i++)
{
document.write("The number is " + i);
document.write("<br />");
}
var i=0;

while (i<=5)
  {
  document.write("The number is " + i);
  document.write("<br />");
  i++;
  }