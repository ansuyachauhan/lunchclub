/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false
*/



// this is with converting a number into string

/*
var isPalindrome = (x) =>{

    if(x <0) 
    {return false}
    let reverseNum = parseInt(x.toString().split('').reverse().join(''));
    if(reverseNum === x){
        return true;
    }
    else
        {
            return false;
        }
    
    
};

isPalindrome(-121);*/

/* without converting into String
 example = 123
 123% 10 =  3 ;% returns remainer  of the division in this case last Number
 take two vars 1. reversed  = 0       current = 123
                                        123% 10 = 3
                                        reversed * 10 = 0 
                                        3+ 0 = 3
                                        123/10 = 12 round down
                  reversed = 3         now Current = 12
                                        12%10 = 2
                                        reversed * 10 = 3*10 = 30
                                        2+ 30 = 32
                                        12/10 = 1

                reversed = 32       current = 1
                                    1%10 = 1
                                    32 *10 = 320
                                    320+1 = 321
                reverse = 32

*/
var isPalindrome = (x) =>{
    if(x<0)
    {
        return false;
    }
    else{
        return x === reverseInteger(x);
    }
}
reverseInteger = (x) =>{
    let reversed = 0;

    while(x>0)
    {
        reversed = (reversed *10) + (x %10);
        x= Math.floor(x/10);

    }

}
isPalindrome(-121);
        



