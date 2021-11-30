function numDecodings(string) {
    if (string.length===0)
        return 1;
    else if (string.charAt(0)==='0')
        return false;
    else if (string.length==1)
        return 1;
        
    let one = numDecodings(string.slice(1));
  
    let test = parseInt(string.substr(0,2));
    
    if (string.length>=2 && test<=26) {
           let two = numDecodings(string.slice(2));
           
         if (two!=false && one!=false)
             return one+two;
         else if (two!=false)
             return two;
    }
    return one;
}

console.log(numDecodings("612"));