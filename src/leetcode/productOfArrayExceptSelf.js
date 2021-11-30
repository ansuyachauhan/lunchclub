/* 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Brute force: Sum all the numbers and divide it by the indivudual number


output = [1,2,6,24]
  

cacheVar = 4 *3*2

output = [,1*4*3,2*4,6]
*/



function productExceptSelf(nums)
{
   let output = new Array(nums.length).fill(nums[0]);
    let cacheVar = nums[nums.length-1];

    // Multiply all the numbers before the current number and put it on the current i position
    for(let i=1;i< nums.length;i++)
    {
        output[i] = output[i-1] * nums[i];

    }
    // update output array for the last element
    output[nums.length-1] = output[output.length-2];

    //update output array from n-1 length
    for(let j=nums.length-2 ;j >0 ; j--)
    {
        output[j] =output[j-1] * cacheVar;
        cacheVar = cacheVar *nums[j]
    }

    //update first number with the final cacheVar variable
    output[0] = cacheVar;

    console.log(output);

}

const nums = [1,2,3,4];
productExceptSelf(nums);

