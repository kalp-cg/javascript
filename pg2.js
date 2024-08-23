// 10. **Check if a String Contains a Substring**  
//     - Task: Write a function that checks if a string contains another substring.  
//     - Test: `containsSubstring('hello world', 'world')`  
//     - Expected Output: `true`

// function containSubstring(str, substr) {
//     return str.includes(substr);
//   }
  
  
//   console.log(containSubstring('hello world', 'world'));  
  


// 11. **Sum All Elements in an Array**  
//     - Task: Write a function that returns the sum of all numbers in an array.  
//     - Test: `sumArray([1, 2, 3, 4, 5])`  
//     - Expected Output: `15`


// function sumArray(arr) {
//     return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//   }
  
  
//   console.log(sumArray([1, 2, 3, 4, 5]));                                       [chat gpt]
  

// 12. **Generate Fibonacci Sequence**  
//     - Task: Write a function that generates the first `n` Fibonacci numbers.  
//     - Test: `fibonacci(5)`  
//     - Expected Output: `[0, 1, 1, 2, 3]`



// function fibonacci(n) {
//     const fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//       fib.push(fib[i - 1] + fib[i - 2]);
//     }
//     return fib.slice(0, n);     
//   }
  
  
//   console.log(fibonacci(5));  
  







// 13. **Check if a Number is Prime**  
//     - Task: Write a function that checks if a number is prime.  
//     - Test: `isPrime(7)`  
//     - Expected Output: `true`

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
//   }
  
//   console.log(isPrime(2));  
  

// 14. **Count the Number of Vowels in a String**  
//     - Task: Write a function that counts the number of vowels in a given string.  
//     - Test: `countVowels('hello')`  
//     - Expected Output: `2`

function countVowels(vowel){
    if (vowel=a,e,i,o,u) return true;
    if (vowel!=a,e,i,o,u) return false;
}


console.log(countVowels(hello))


// 15. **Find the Index of an Element in an Array**  
//     - Task: Write a function that returns the index of a given element in an array. If the element is not found, return -1.  
//     - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
//     - Expected Output: `2`

// 16. **Remove Duplicates from an Array**  
//     - Task: Write a function that removes duplicate elements from an array.  
//     - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//     - Expected Output: `[1, 2, 3, 4, 5]`

// 17. **Find the Intersection of Two Arrays**  
//     - Task: Write a function that returns an array of the common elements in two arrays.  
//     - Test: `findIntersection([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[2, 3]`

// 18. **Check if Two Strings are Anagrams**  
//     - Task: Write a function that checks if two strings are anagrams of each other.  
