/* 

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.


*/

/*function findFirstPositiveInteger(arr)
{
  const sortedArr = arr.sort((a,b)=> a-b);
  let resultArr =[];
  let current =sortedArr[0]+1;
  console.log(`sortedArr`,sortedArr);
  console.log(`current`,current);
  for(let i=1;i<sortedArr.length-1;i++){
   // 9+1
    
      while(current !== sortedArr[i] ) // 0 !==1
      {
     
        resultArr.push(current);
        current= current+1;
       
      }
  
      current= current+1;
      
  }
  const missingPositive =resultArr.filter(e =>e>0)[0]
  return  missingPositive
}

const arr = [1,2,0];
findFirstPositiveInteger(arr);

// [ -1, 1, 3, 4 ]


[3,4,-1,1] 
[-1,4,3,1]
[-1,3,4,1]


index = 
i = 2
index =4-1 =3 


*/
function firstMissingPositive(nums) {
    for(let i=0;i<nums.length;)
   {
       let index = nums[i]-1;
      
        if(index >=0 && index <= nums.length && nums[nums[i] - 1] !== nums[i])
        {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
            
        }
        else{
            i++
        }
       
    }
    for(let i=0;i<nums.length;i++){
        if(i+1 != nums[i])
        {
            return i+1;
        }

   }
  
   return (nums.length + 1);
};

console.log(firstMissingPositive([7,8,9,11,12]));


