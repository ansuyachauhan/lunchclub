// threeSum([1,2,2,3],5);
var threeSum = function(nums, targetNum) {
  nums.sort((a,b)=> {return a-b});  
  const results =[];
  for(let i= 0; i<nums.length;i++){
      if(i>0 && nums[i] === nums[i-1]) continue;
      const target = targetNum - nums[i];
      let left = i+1;
      let right = nums.length-1
      while(right > left)
      {
        const sum =  nums[left] +nums[right];
        if(sum > target) 
        {
            right--;
        }
        else if(sum< target){ //-4 < -1
            left++

        }
        else{
           results.push([nums[i], nums[left],nums[right]]);
           while(nums[left] === nums[left+1]) left++;
           while(nums[right] === nums[right-1]) right--;
            left++;
            right--
        }
      }

  }
  return console.log(results);
};

threeSum([1,2,2,3],5);