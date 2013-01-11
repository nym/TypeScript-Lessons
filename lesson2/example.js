// Convert this file to TYPESCRIPT

//prompt user to enter a number to calculate the factorial
var num = prompt('What number do you want to find the factorial of?');
 
//recursive
var factorial = function(n) {
    if(n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};
 
console.log(factorial(num));