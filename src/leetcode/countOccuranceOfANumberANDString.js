
// /*Count occcurance of a given number

// const countOccurrences = (arr, val) => arr.reduce((a, v) => {
//     a= 0;
//     if(v === val)
//     {
//        return a+1;
//     }
//     else{
//        return a;
//     }
// });

// console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3));

//count occurance of a string

let names = "ansuya"
let myNames = names.split('');
let countedNames = myNames.reduce( (allNames, name)=> {
    
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1
  }
  return allNames;

},{});


console.log(countedNames);
// const freqOfLetters= Object.values(countedNames);
// let countFrequncyOfFrency = [...freqOfLetters].reduce( (allNames, name)=> {
    
//   if (name in allNames) {
//     allNames[name]++;
//   }
//   else {
//     allNames[name] = 1
//   }
//   return allNames;

// },{});


// const compareValOfChar = (current)=> current ===freq[0];
// const compareValOffrequency = (current)=> current ===countFrequncyOfFrency[0];


// if(freq.every(compareVal))
// {
//   return console.log("YES");
// }
// else{
//   return console.log("NO");
// }

