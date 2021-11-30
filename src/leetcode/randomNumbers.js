console.log(Math.floor((Math.random() * 10) + 1));

/* Math.random()  gives randome numbers like 0.23423423
but decimals so we are multiplying it by 10
Math.floor() function returns the largest integer less than or equal to a given number.
0 10
*/

Math.floor(Math.random() * (max - min) + min);