// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


var isValid = function(s) {
    let dict ={
        '(':')',
        '{':'}',
        '[':']'
    }
    let arr=[]
    for(let char of s){
      
        if(dict[char])
        {
            arr.push(dict[char]);
        }
        else{
            if(arr.pop() !== char) return false;
            
        }
    }
        return (!arr.length)

    
};

console.log(isValid("((({}))"));