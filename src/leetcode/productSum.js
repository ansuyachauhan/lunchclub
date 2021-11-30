// program Input: n = 234 Output: 15 
const givenNumer = 234; 
const numerToArra = givenNumer.toString().split('')
let product =1;
let sum =0;

numerToArra.forEach(num =>{
   
    product *= num;
    sum += (parseInt(num));
    
    
})
console.log( product-sum);

console.log( givenNumer.toString().split(''));