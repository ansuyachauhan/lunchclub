const arr = [3,8,9,7,6]
const num=3;
function rotateArr(arr, num)
{
    console.log(`original Arr`,arr);
    while(num>0)
    {
       
        arr.unshift(arr[arr.length-1])
        arr.pop();
        num--;
    }
    return console.log(arr);
}
rotateArr(arr,num);
