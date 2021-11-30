


// ############## Javascript fundatmentals ########

//Objects 
const dragon1 = {
    name: "dragonName",
    color: "red"

};

// This keyword

const dragon1 = {
    name: "dragonName",
    color: "red",
   roar();

};

const dragon1 = {
    color: 'blue',
    roar() {
        console.log(`The ${dragon1.color} dragon lets out a tremendous roar!`);
    }
};

dragon1.roar = function() { console.log(`The ${this.color} dragon lets out a tremendous roar!`); };

dragon2.roar = function() { console.log(`The ${this.color} dragon lets out a tremendous roar!`); };

dragon1.roar();

dragon2.roar();



// Class and method

class Dragon {
    constructor(color, maxHP) {
        this.color = color;
        this.maxHP = maxHP;
    }

    roar(){
        console.log(`whtever`);
    }
}

const dragon1 = new Dragon("red", 1200);
dragon1;




// class inheritance
class Monster {
    roar() {
        console.log("The monster lets out a tremendous roar!");
    }
}
class Dragon extends Monster {
    fly() { 
        console.log("The dragon flaps its wings and begins to fly.");
    }
}

// Array 

// Map , filter and reduce - higher order functions- they all have return values

const array1 = [1,2,3,4];

const newArr = [];
array1.map(arr => {
    if(arr%5 === 0)
    {
        newArr.push(arr);
    }
    
});
console.log(newArr);

array1.filter(nums => nums%5 ===0);

array1.map(nums => array1.indexOf[nums] );

array1.reduce((a,c)=> a+c);


const desserts = [
    { 
       id: 0, 
       type: "cake",
       flavor: "chocolate",
       cost: 4.50
     },
     {
          id: 1,
          type: "pie",
          flavor: "pumpkin",
          cost: 3.75
     },
     {
          id: 2,
          type: "donut",
          flavor: "chocolate",
          cost: 1.50 
     }
];

const chocDesserts2 = desserts.filter(dessert => dessert.flavor === "chocolate");
const totalCostNoInitValue = desserts.reduce((total, dessert) => total + dessert.cost);


//For loop  in ES6
var cars = ["BMW", "Volvo", "Mini"];
var x;

for (x of cars) {
  document.write(x + "<br >");
}

const str ="ansuya"
var x;
for(x of str);







// For Each
// forEach((element) => { ... } )
// forEach((element, index) => { ... } )
// forEach((element, index, array) => { ... } )

// Program  given = [1,2,3,4] output  [2*3*4 1*3*4 1*2*4 1*2*3]

const givenArray = [4,2,1];

const totalMulti = givenArray.reduce((a,c) => a*c );
const resultArr =[];

givenArray.forEach(num =>{
    resultArr.push(totalMulti/num);
})
console.log(resultArr);



// Program Input: nums = [12,345,2,69,7896] Output: 2 
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 






 

 
 



    


// class componnent

import React, {Component} from 'react';

class Directory  extends Component{
    constructor(props)
    {
        super(props); //this.props = props
        this.state ={
            campsites : [
                {id:0, name: "Ansuya"},
                {id:1, name: "Chauhan"},
            ]
                
          
        };
    }
    render(){
        const directory =  this.state.campsites.map(campsite=>
            {
                return(
                    <div key={campsite.id}>
                        <h2>{campsite.id}</h2>
                        <h2>{campsite.name}</h2>
                    </div>
                );
                });
        return(
            <div className="container">
                <div>
                    {directory}
                </div>
            </div>

        );
    }
}

export default Directory;

//and where you want to import 
//import Directory from `./component'

<Directory/>






    

describe("my first test",() => {
 it("my first test1", ()=>{

 });
})





//program to print random numbers





//Program 
const car = {type:"Fiat", model:"500", color:"white"};
delete car.color;
const valueModel = car.model;
delete car.model;
car.test = valueModel
console.log(car);



const median = arr => {
    const mid = Math.floor(arr.length / 2)
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
   
  };
  console.log(median([8,2,1,6,5]));


 

//console.log(uniqueChars.join(''));


const givenString = "AABGFHHHAB";
const alterString = givenString.split('');

let finalString = alterString.filter((value,currentIndex,array) => array.indexOf(value) === currentIndex);
console.log(finalString.join(''));


const givenArr = [8,3,6,3];

givenArr.filter((value, currentIndex, array)=>{
    
  let sortedArr = array.sort;
   console.log(sortedArr.indexOf(Math.floor(sortedArr.length / 2)));
   //console.log(array);

})

// Two sum

var finalSum = function(nums, target){
    var map = {};
    for(var i =0; i<nums.length; i++)
    {
       
        var value = nums[i];//3
       
        var pair = target - value;//6-2=4
        
      if(map[pair] !== undefined){
        
          return [map[pair],i];

      }  
      else{
         
           map[value] =i;
      }
    
    }
    
};

console.log(finalSum([3,2,1,5],6));





const givenString = [1,2,2,2]
const maps ={}


let finalAnswer =givenString.filter((element,index )  =>{
    return givenString.indexOf(element) == index
    
});

console.log(finalAnswer);









const nums = [1,2,3,1]

const finalAnswer = nums.forEach((value, index)=>{
    return nums.indexOf(value) === index ? console.log(true) : console.log(false);
    
});
console.log(finalAnswer);


// using set
var nums = [1,2,3,1]
var containsDuplicate = function(nums){
    let mySet = new Set(nums);
    if(mySet.size === nums.length)
    {
        return  console.log(false);

    }
    return console.log(true);
}

containsDuplicate(nums);


var checkIfExist = function(arr) {
    const set = new Set();
    
    for(let i = 0; i < arr.length; i ++) {
      const currValue = arr[i];
      
      if(set.has(currValue)) {
        return true
      }
      set.add(currValue / 2);
      set.add(currValue * 2);
    }
  
  return false;
};

console.log(checkIfExist(1,2,4));


var arr = [10,2,5,3]
var finalAns = function(arr){
    for(let i= 0; i <arr.length ;i++) 
    {
        for(let j=0; j<arr.length; j++)
        {
            if (i!=j && arr[i]*2 == arr[j]){
                return console.log(true);
            }
        

        }
        return console.log(false);
    }
}

var checkIfExist = function(arr) {
    const set = new Set();

    for(let i = 0; i < arr.length; i ++) {
      const currValue = arr[i];

      if(set.has(currValue)) {
        return console.log(true);
      }
      set.add(currValue / 2);
      set.add(currValue * 2);
    }

  return console.log(false);
};

console.log(checkIfExist[10,2,5,3]);


let names = [4, 4, 2,3,3,3,1,0]

let countedNames = names.reduce( (a, c)=> {
    
  if (c in a) {
    a[c]++
  }
  else {
    a[c] = 1
  }
  return a

},{});


console.log(countedNames);



const nums =[1,2,3,4]

let runningSum = nums =>{
    for( let i=1; i<nums.length ;i++)
 {
     nums[i] = nums[i]+ nums[i-1];
     
 }
 console.log(nums);
}
 
let runningSum = function(nums) {
    
    let new_array = [];  
    nums.reduce( (prev, curr,i) =>  new_array[i] = prev + curr , 0 )
    console.log(new_array);

 runningSum(nums);
 
    

};





maxProfit( [7,6,4,3,1]);

//product of numbers other than self
const nums =[1,2,3,4]

let runningSum = function(nums) {
    
    let finalArray = [],product; 
    
    for(let i =0;i<nums.length;i++)
    {
         product=1;
        for(let j=0;j<nums.length;j++)
        {
            if(i!==j)
            {
                product *= nums[j];
            }
            
        }
        finalArray.push(product);
       

    }
    return console.log(finalArray);

};
runningSum(nums);


let given = "aAbbccccddA";
let names = given.split('') ;


let countedNames = names.reduce( (allNames, name)=> {
    
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames

},{});


console.log(countedNames);



var getMax = function maxChar(str) {
  const obj = {};
  str.split('').forEach(char => obj[char] + 1 || 1);
  return Object.keys(obj).reduce((prev, next) => obj[a] >= obj[b] ? a : b),0;
}
console.log(getMax("aaabbcccc"));


//vowels

const given ="ansuyaiio";
const str = given.match(/[aeiou]/gi).join('');
console.log(str);
function greatestRepeat(str) {
    var maxRepeat = 0;
    var letterRepeated = null;
    for(var i=0; i<str.length; i++) {
        
    	var currentLetter = str.charAt(i);
        var timesRepeated = str.split(currentLetter).length-1;
        if(timesRepeated > maxRepeat) {
            maxRepeat = timesRepeated;
            letterRepeated = currentLetter;
        }
    }
    return console.log(letterRepeated);
}
greatestRepeat(str);


const str = 'ansuyaiio';
const secondMostFrequent = str => {
   const strArr = str.split('');
   const map = strArr.reduce((acc, val) => {
      if(acc.has(val)){
         acc.set(val, acc.get(val) + 1);
      }else{
         acc.set(val, 1);
      };
      return acc;
   }, new Map);
   const frequencyArray = Array.from(map);
   return frequencyArray.sort((a, b) => {
      return b[1] - a[1];
   })[1][0];
};
console.log(secondMostFrequent(str));



const mapTest = new Map();
mapTest.set('a',1);
console.log(mapTest)
console.log([...mapTest].find(([k,v]) => v == 1)[0]);
//const final = Object.keys(mapTest).find(key => mapTest[key] === 1)
//console.log(final);

const givenArr = [2, 5,25, 14] ;

//const givenArr = [6, 5, 25, 14] i=6 j=5
//const resultArr =[25,14,-1, -1] 


const givenArr = [1,2,3,4,3];
const  nextGreater = (arr) =>{
    const resultArr =[];

    for(let i=0; i<givenArr.length; i++){
        for(let j=i+1; j<givenArr.length; j++)
        {
            
            if(givenArr[j] > givenArr[i])
            {
                
                resultArr.push(givenArr[j]);
                break;
                
            }
           
            else{
                resultArr.push("-1");
            } 
            
        }
       
    }
    return console.log(resultArr);
    
    
}

nextGreater(givenArr);

const nextGreaterElements = nums => {
    let output = Array(nums.length).fill(-1);
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < i + nums.length; j++)
        {
            if(nums[j % nums.length] > nums[i])
            {
                output[i] = nums[j % nums.length]
                break
            }
        }
    }
    return output
}

const nextGreaterElements = nums => {
    let output = Array(nums.length).fill(-1)
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < i + nums.length; j++){
            if(nums[j % nums.length] > nums[i]){
                output[i] = nums[j % nums.length];
                break;
            }
        }
            
    }
    return output
}


const givenArr = [2,5,25,14];
console.log(nextGreaterElements(givenArr));

*/

// Maximum subarray

function maxSubArr (nums) {
    let solution = nums[0];
    for (let i =1;i < nums.length; i++)
    {
        nums[i] = Math.max(nums[i] , nums[i] + nums[i-1]);
        solution = Math.max(solution , nums[i])
    }
    return console.log(solution);

}

maxSubArr([5,4,-1,7,8]);
