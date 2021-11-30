const missingElement = (arr1,arr2) => {
    if(arr1.length> arr2.length)
    {
        for(let i=0;i<arr1.length;i++)
        {
            if(arr2[i]!== -1 && arr1[i] !==arr2[i])
            {
                return arr2[i];
            }
        }
    }
    else{
        for(let i=0;i<arr2.length;i++)
        {
            if(arr1[i] !== -1 && arr2[i] !==arr1[i])
            {
                return arr2[i];
            }
        }
    }
}
console.log(missingElement(['a','b','a'],['a','a','a','a']));