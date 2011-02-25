var dividenum = 1;
var compositenum = 600851475143;


while (compositenum > 1) {
    dividenum = dividenum + 1;	
    while (compositenum % dividenum == 0) {    
    	compositenum = compositenum/dividenum;
    }
}
console.log(dividenum);
