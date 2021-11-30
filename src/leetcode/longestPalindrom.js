

const getPalindrome = (left, right, s) =>{
    while(left >=0 && right<=s.length)
    {
        if(s[left] !== s[right]) break;
        left--;
        right++
    }
    return [left+1, right];
} 
 function longestPalindrome(s) {
     let max = [0,1];
     for(let i=0;i<s.length;i++)
     {
         let even = getPalindrome(i-1, i,s);
         let odd = getPalindrome(i-1, i+1,s);
         let currentMax = odd[1]-odd[0] > even[1]-even[0]? odd: even;
         max = max[1]-max[0] >currentMax[1]-currentMax[0]? max: currentMax;
         console.log(`max`, max);
     }
    return s.slice(max[0], max[1])
};
console.log(longestPalindrome("cbbd"));