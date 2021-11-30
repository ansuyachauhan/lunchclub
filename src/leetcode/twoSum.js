/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

var twoSum =(nums, target) => {
    let maps={};
    for(let i =0 ; i<nums.length;i++)
        {
            // store current value in to value var
            let value = nums[i];
            
            //find value of first pair by subtracting current value from target value 
            let pair = target- value;
            
            // If the second pair  value is on the list return the index of current and the value
            if(maps[pair] !== undefined)
                {
                    return console.log([maps[pair] ,i]);
                }
            else{
                // Otherwise add current index to maps which is  hashmap
                maps[value] =i;
            }
        }
    
};

const nums = [2,7,11,15];
twoSum(nums)