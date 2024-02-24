/* Explain the concept of operator precedence in JavaScript. Provide an example where 
understanding operator precedence is crucial for correct code execution. */

/** Operator precedence describes the order in which operations are performed in an arithmetic expression.
 *  Multiplication ( * ) and division ( / ) have higher precedence than addition ( + ) and subtraction ( - ). */

 // Example  using precedence 
 let x = 100 + 50 * 3;
 console.log(x);// 250 => (50*3) = 150+100 = 250

 // if we don't use precedence here,
 let x1 = (100 + 50) * 3; 
 console.log(x1); // 450

 // Operations with the same precedence (like * and /) are computed from left to right:
 let x2 = 100 / 50 * 3; // => (100/50) = 2*3 = 6
 console.log(x2);