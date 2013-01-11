// Convert this file to TYPESCRIPT

//prompt user to enter a number to calculate the factorial
var num = prompt("What number do you want to find the factorial of?");
 
var factorial = function(n) {
    if(n === 0) {
        return 1;
    } else {
        product = 1;
        for(i = 1; i <= n; i++) {
            product *= i;
        }
        return product;
    }
};
 
console.log(factorial(num));