/*let a=parseInt (prompt("Enter the value"));
var num1=0;
    var num2=1;
    var sum;
    var i=0;
    for (i = 0; i < a; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
document.write(num2)*/
let num = parseInt(prompt('Enter the number of terms: '));
let num1 = 0, num2 = 1, nextTerm;



for (let i = 1; i <= num; i++) {
    document.write(num1);
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
}
