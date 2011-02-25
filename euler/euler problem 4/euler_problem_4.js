digit1 = 9;
digit2 = 9;
digit3 = 9;
palendrome = 999999;
answer = 0;
dividenum = 999;

while (answer == 0) {
    digit3 = digit3 - 1;
    if (digit3 == -1) {
        digit3 = 9;
        digit2 = digit2 - 1;
        if (digit2 == -1) {
            digit2 = 9;
            digit1 = digit1 - 1;
            if (digit1 == -1) {
            }
        }		
    }
    palendrome = (digit1 * 100000) + (digit1 * 1) + (digit2 * 10000) + (digit2 * 10) + (digit3 * 1000) + (digit3 * 100);
    while (palendrome / dividenum <= 999) {
        if (palendrome % dividenum == 0) {
        console.log(palendrome);
        answer = palendrome / dividenum;
        console.log(answer);
        console.log(dividenum);
        }
        dividenum = dividenum - 1;
    }
    dividenum = 999;
}    

