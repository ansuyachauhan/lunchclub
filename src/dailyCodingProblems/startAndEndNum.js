// function startEndNum(start,end)
// {
//     if(start == end)
//     {
//         return end;
//     }
//     else
//     {
//         return [start].concat(startEndNum(++start,end));
//     }
// }

// console.log(startEndNum(5,5));

function primeOrNot(n)
{
    for(let i=2;i<n;i++)
    {
        if(n % i ===0)
        {
            return "not prime";
        }
        else{
            return "prime";
        }
    }
}

console.log(primeOrNot(9))