var counter = 1;
sumofsquares = 0;
sum = 0;
while (counter <= 100) {
    sumofsquares = sumofsquares + counter * counter;
    sum = sum + counter;
    counter = counter + 1;
}
console.log(sumofsquares - sum * sum);