
 const givenArr =[12,345,2,69,7896]; 
 const newArr =[];

 givenArr.forEach(element => {
     if(element.toString().length % 2 === 0)
     {
        newArr.push(element);
     }
     
 });
 console.log(newArr);
