/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/

/*
const prices = [7,1,5,3,6,4];



var maxProfit = function(prices) {
    let maxDiff =0;
    let diff = 0
    let smallestNum= prices[0];
    for(let i=1 ;i <prices.length;i ++)
    {
        //find smallest number in the array
        if(prices[i] < smallestNum)
        {
            
            smallestNum = prices[i];
 
        }
        
            //find differece by subtracting the current number 
            diff = prices[i]- smallestNum;
            if(diff > maxDiff )
            {
                //update maxDiff if current difference is higher 
                maxDiff = diff;
            }
           
    }
    // return 0 if maxDiff is 0
     if(maxDiff === 0){
                return console.log(0);
            }
    //else return maxDiff
    return console.log(maxDiff);
    
};
*/

const prices = [7,1,5,3,6,4];

//another way 
var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;
    // 7 1 5 3 6 4
    for(let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i -1]) { //  1>7 5>1 3<5 6>3 4<6
            profit = Math.max(profit, prices[i] - min); // 0,5-1= 4 ,5,
        } else {
            min = Math.min(min, prices[i]);//7,1=1   1,3=1  1,4 = 1
        }
    }

    return console.log(profit);
};
maxProfit(prices);