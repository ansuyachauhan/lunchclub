/*

// Reverse a String

function reverseString()
{
    const givenString = "Ansyua";
    const resultArray =[];
    givenString.each
}


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
const givenArr = [2,4,1];
const newArr =[];

const totalMulti = givenArr.reduce((a,c) => a*c);
givenArr.forEach((element)=>{
   newArr.push(totalMulti/element);
  
})

console.log(newArr);


// Program Input: nums = [12,345,2,69,7896] Output: 2 
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 


 const givenArr =[12,345,2,69,7896]; 
 const newArr =[];

 givenArr.forEach(element => {
     if(element.toString().length % 2 === 0)
     {
        newArr.push(element);
     }
     
 });
 console.log(newArr);

 */