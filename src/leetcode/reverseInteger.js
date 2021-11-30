/*Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/
// with converting into string 
/*
function reverseInteger(x) {
    if(x <0)
    { 
        return -1 * reverseInteger(-x);
    }
    let solution = x.toString().split('').reverse().join('');

    if(solution > 2 *31 -1){
        return 0;
    }
    return solution;
    
};
*/


const reverse = (x)=>{
    if(x<0)
    {
        return -1 * reverse(-x)
    }
    reversed = 0
    while(x>0)
    {
        reversed = (reversed *10) + (x%10)
        reversed = Math.floor(x/10);
    }
    return reversed;
};


reverseInteger(123);