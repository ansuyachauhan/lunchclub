function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    //find the largest index of largest stack
    let largestStackValue = Math.max(...A);
    const largestStack = A.indexOf(largestStackValue);

    if(largestStackValue ===1)
    {
        return 1;
    }
    for(let i=0;i<A.length;i++)
    {
        if(i !== largestStack && A[i]>=2)
        {
            while(A[i] !==0){
                largestStackValue +=1;
                A[i] = A[i]-2;
            }
        }
        

    } 

    return largestStackValue;

}

console.log(solution([1,1,1,1]));