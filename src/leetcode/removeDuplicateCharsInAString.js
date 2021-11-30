// program to remove duplicate string

const givenString = "aa"; //['A','A']
let chars = givenString.split('');

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars.join(''));