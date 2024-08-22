function printHelloWorld() {
    console.log("Hello, World!");
}
printHelloWorld();





function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5)); // Output: 8




function findLargest(a, b, c) {
    return Math.max(a, b, c);
}
console.log(findLargest(2, 8, 5)); // Output: 8




function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // Output: true





function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120




function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: 'olleh'






function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome('madam')); // Output: true





function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([3, 1, 4, 1, 5])); 






function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArray([3, 1, 4, 1, 5])); // Output: [1, 1, 3, 4, 5]






function containsSubstring(str, substr) {
    return str.includes(substr);
}
console.log(containsSubstring('hello world', 'world')); // Output: true







function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15






function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}
console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]





function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // Output: true





function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels('hello')); // Output: 2







function findIndex(arr, element) {
    return arr.indexOf(element);
}
console.log(findIndex([1, 2, 3, 4, 5], 3)); // Output: 2






function findIndex(arr, element) {
    return arr.indexOf(element);
}
console.log(findIndex([1, 2, 3, 4, 5], 3)); // Output: 2








function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]




function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
console.log(findIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]




function areAnagrams(str1, str2) {
    const sortString = str => str.split('').sort().join('');
    return sortString(str1) === sortString(str2);
}
console.log(areAnagrams('listen', 'silent')); // Output: true




function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeWords('hello world')); // Output: 'Hello World'




function flattenArray(arr) {
    return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]




function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber(1, 10)); // Output: A random number between 1 and 10






function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
console.log(isValidEmail('test@example.com')); // Output: true





function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0)); // Output: 32




function removeElement(arr, element) {
    return arr.filter(el => el !== element);
}
console.log(removeElement([1, 2, 3, 4, 5], 3)); // Output: [1, 2, 4, 5]





function secondLargest(arr) {
    const uniqueSortedArr = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSortedArr[1];
}
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
