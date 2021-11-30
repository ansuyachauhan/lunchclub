

function encode(str)
{
    let currentChar = str.charAt(0);
    let count =1 ;
    let finalOutPut = "";
   

    for(let i=1;i<str.length;i++)
    {
        if(currentChar === str.charAt(i))
        {
            count++;
        }
        else{
         finalOutPut += count +currentChar;
         count =1;
         currentChar =str.charAt(i);

        }

    }
    finalOutPut +=count +currentChar;
    return finalOutPut;
}

console.log(encode("AAAABBBCCDAA"));