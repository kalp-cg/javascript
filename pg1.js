// 1. **Print "Hello, World!"**  
//    - Task: Write a function that prints "Hello, World!" to the console.

// function printhelloworld(){
//     console.log("hello,world!")
// }

// printhelloworld()


   
// 2. **Add Two Numbers**  
//    - Task: Write a function that takes two numbers and returns their sum.  
//    - Test: `sum(3, 5)`  
//    - Expected Output: `8`

// function sum(a, b) {
//     return a + b;
// }


// const result = sum(3, 5);
// console.log(result);  






// 3. **Find the Largest Number**  
//    - Task: Write a function that takes three numbers and returns the largest.  
//    - Test: `findLargest(2, 8, 5)`  
//    - Expected Output: `8`

// function findLargest(a, b, c) {
//     return show.max(a, b, c);
// }


// const result = findLargest(2, 8, 5);
// console.log(result);  






// 4. **Check if a Number is Even or Odd**  
//    - Task: Write a function that checks if a number is even or odd.  
//    - Test: `isEven(4)`  
//    - Expected Output: `true`


// function isEven(number) {
//     return number % 2 === 0;
// }


// const result = isEven(853);
// console.log(result);  






// 5. **Calculate the Factorial of a Number**  
//    - Task: Write a function that returns the factorial of a number.  
//    - Test: `factorial(5)`  
//    - Expected Output: `120`

// function factorial(n) {
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
// }

// const result = factorial(5);
// console.log(result);  






// 6. **Reverse a String**  
//    - Task: Write a function that takes a string and returns it reversed.  
//    - Test: `reverseString('hello')`  
//    - Expected Output: `'olleh'`

// function reverseString(s) {
//     return s.split('').reverse().join('');
// }

// const result = reverseString('hello');
// console.log(result);  // 








// 7. **Check for Palindrome**  
//    - Task: Write a function that checks if a given string is a palindrome.  
//    - Test: `isPalindrome('madam')`  
//    - Expected Output: `true`


// function isPalindrome(s) {
//     const reversed = s.split('').reverse().join('');
//     return s === reversed;
// }

// const result = isPalindrome('abcdcba');
// console.log(result);  





// 8. **Find the Minimum Number in an Array**  
//    - Task: Write a function that takes an array and returns the smallest number.  
//    - Test: `findMin([3, 1, 4, 1, 5])`  
//    - Expected Output: `1`



// function findMin(arr) {
//     return Math.min(...arr);
// }


// const result = findMin([3, 1, 4, 1, 5]);
// console.log(result);  





// 9. **Sort an Array**  
//    - Task: Write a function that sorts an array of numbers in ascending order.  
//    - Test: `sortArray([3, 1, 4, 1, 5])`  
//    - Expected Output: `[1, 1, 3, 4, 5]`


function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  
  console.log(sortArray([3, 1, 4, 1, 5]));  
  