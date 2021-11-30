var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right =0;
    let set = new Set();
    let longestSubString = 0
    
    while(right < s.length)
        {
              if(!set.has(s.charAt(right)))
                  {
                      set.add(s.charAt(right));
                      longestSubString = Math.max(longestSubString, set.size);
                      right++;
                      
                  }
            
            else{
                set.delete(s.charAt(left));
                left++;
                
            }
            
        }
    return console.log(longestSubString);
  
    
};

lengthOfLongestSubstring("aaaa")