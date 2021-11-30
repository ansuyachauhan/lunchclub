function gradingStudents(grades) {
    for(let i=0;i<grades.length;i++){
       
       
        if(grades[i] % 5 === 0)
        {
            grades[i] = 0;
            
        }
        else if(grades[i] % 5 < 3){
            grades[i] = Math.ceil(grades[i]/5)*5;
        }
        else if(grades[i] < 38)
        {
            grades[i]  = grades[i];
        }
    }
    return console.log(grades);
 
 }

 const inputs = [73];
 gradingStudents(inputs);