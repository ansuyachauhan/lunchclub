/*Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings 
[dog, deer, deal], return [deer, deal].*/

function searchMatchingWords(arr, searchWord){
    
    
    for(let i=0;i<searchWord.length;i++){
        let tempArr=[];
        for(let j=0;j<arr.length;j++){
            if(arr[j][i].toLowerCase() === searchWord[i])
            {
                 tempArr.push(arr[j]);
              // console.log(tempArr.push(arr[j]));
            }
        }
         arr = tempArr;

    }
    return arr;
}

console.log(searchMatchingWords(["dog", "deer", "dealan", "asde", "Der"],"de"));