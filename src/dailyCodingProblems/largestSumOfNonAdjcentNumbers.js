function largestSum(arr)
{

    let prevOne =0,  prevTwo=0 , res=0;
    for(let i =0;i<arr.length;i++)
    {
        if(i===0) //if array size is 0 then thats the max number
        {
            res= arr[0]
        }
        else if(i===1) //if array size is 1 then thats either arr[0] or arr[1] max number
        {
            res = Math.max(arr[1], arr[0]);
        }
        else{
            res = Math.max(prevOne, arr[i]+ prevTwo);
        }

        prevTwo= prevOne;
        prevOne = res;
        
        
    }

    return res;

}

console.log(largestSum([5, 1, 1, 5]));


/*[0 ,       5,         1,       1,  5]
                prevTwo     prevone
(0, 5+0) = 5
(5,1+0    )=5
(5,1+5)= 6
(6, 5+1) = 6
*/