var names = ["cheapair", "cheapoair"];
var uniqueNames = [], nameInd, windowSize, substrInd, substr, otherNameInd, foundMatch;
// For each name
for (nameInd = 0; nameInd < names.length; nameInd++)
{
    var name = names[nameInd];
    // For each possible substring length
    windowLoop:
    for (windowSize = 1; windowSize <= name.length; windowSize++)
    {
       
        // For each starting index of a substring
        for (substrInd = 0; substrInd <= name.length-windowSize; substrInd++)
        {
            
            substr = name.substring(substrInd,substrInd+windowSize).toLowerCase(); 
          
            foundMatch = false;
            // For each other name
            for (otherNameInd = 0; otherNameInd < names.length; otherNameInd++)
            {
             
                if (nameInd != otherNameInd && names[otherNameInd].toLowerCase().indexOf(substr) > -1)
                {
                    foundMatch = true;
                    break;
                }
            }

            if (!foundMatch)
            {
                // This substr works!
                
                uniqueNames[nameInd] = substr;  
                console.log(`uniqueNames[nameInd]`,uniqueNames[nameInd]);
                break windowLoop;
            }
        }
    }
   
}
console.log(uniqueNames);