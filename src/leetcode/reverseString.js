const givenString = "Welcome to this Javascript Guide!";
const reverseArr =[];

   /* givenString.split(' ').forEach(str =>{
        console.log(str.split('').reverse().join(''));
    });
*/
function reverse1(str){
    var reversedStr = "";
    for(var i = str.length - 1; i >= 0; i--){
        console.log(str.charAt(i));
        reversedStr += str.charAt(i);
    }
    return console.log(reversedStr);
  }

  reverse1("Welcome to this Javascript Guide!");