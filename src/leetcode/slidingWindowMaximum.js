
// https://www.programmerall.com/article/7198565742/
var maxSlidingWindow = function(nums, k) {
    var window = [], result = [];
    for(var i = 0; i < nums.length; i++){
        if(window.length === k){
            result.push(findMax(window));
            window.shift();
        }
        window.push(nums[i]);
    }
    if(window.length === k){
        result.push(findMax(window));
    }
    return k !== 0 ? result : [];

    function findMax(arr){
        var max = -Infinity;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        return max;
    }
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))