function printPrime(n)
{ let primeNums =[];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i))
          primeNums.push(i) 
    }
    return primeNums;
}

function isPrime(n)
{
    if (n <= 1)
        return false;
    for (let i = 2; i < n; i++)
        if (n % i == 0)
        {
            return false;
        }
 
    return true;
}
  


  console.log(printPrime(100));