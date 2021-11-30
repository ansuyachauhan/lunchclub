/*Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

*/

//one way to do it 

/*
var isPalindrome = function(s) {
    
    let str = s.replace(/[^A-Za-z0-9]/gi,'').toLowerCase();
    let compareStr = str.split('').reverse().join('');
    
    if(str === compareStr )
    {
        return console.log(true);
    }
    return console.log(false);
    
};*/
var isPalindrome = function(s) {
    
    s = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    let leftPointer = 0;
    let rightPointer = s.length-1;
    
    while(leftPointer < rightPointer)
        {
            if(s[leftPointer] !== s[rightPointer]) return false;
            leftPointer++;
             rightPointer--;
            
        }
    return true;
    
};

isPalindrome("A man, a plan, a canal: Panama");