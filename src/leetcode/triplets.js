function compareTriplets(a, b) {
    let result=[0,0];
    for(let i=0;i<=2;i++)
    {
        if(a[i] > b[i])
        {
            
            result[0]++;
        }
        if(a[i] < b[i])
        {
            
            result[1]++;
        }
    }

    return result;
}
console.log(compareTriplets([17,28,30],[99,16,8]));