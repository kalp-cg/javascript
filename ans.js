// Beginner Friendly Questions

// 1) Ans:-
// console.log("Hello World!")

// 2) Ans:-
// function sum(num1, num2){
//     console.log(num1 + num2)
// }
// sum(8,5)

// 3) Ans:-
// function Largestnum(num1, num2, num3){
//     if (num1>num2 && num1>num3) {
//         console.log(num1, " is largest number ")
//     }else if (num2>num1 && num2>num3) {
//         console.log(num2, " is largest number")
//     }else if (num3>num1 && num3>num2) {
//         console.log(num3, " is largest number")
//     }else if (num2==num1 && num2==num3) {
//         console.log(num1, num2, num3, " are equal ")
//     }else{
//         console.log("Two number are equal and largest")
//     }
// }
// Largestnum(5, 6, 6)

// 4) Ans:-
// function even_odd(num){
//     if (num % 2 == 0) {
//         console.log(num, " is even number ")
//     }else{
//         console.log(num, " is odd number ")
//     }
// }
// even_odd(40)

// 5) Ans:-
// var number=5;
//   var factorial=1;
//   for(i=1;i<=number;i=i+1){
//       factorial=factorial*i;
//   }
//   console.log(factorial);

// 6) Ans:-
// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// const input = "this is a test";
// const output = reverseString(input);
// console.log(output);

// 9) Ans:-
// let array = [6,0,2,2,5,3,8]
// let temp = array.sort();
// console.log(temp)

// 11) Ans:-
// function sum(array){
//     let total =0;
//     for( let i = 0; i < array.length; i++){
//         total += array[i];
//     }
//     console.log(total);
// }
// sum([18,10,4,8])

// 13) Ans:-
// function prime(num) {
//     let i, show=true;
//     for(i=2;i<=100;i++){
//     if(num %i==0) {
//       show=false
//     }
//   }
//   if (show==true)
//     console.log(num+" prime");
//     else
//     console.log(num+" not a prime");
//   }
//   prime(80);

// 14) Ans:-
// function getVowels(string) {
//     let Vowels = "aAeEiIoOuU";
//     let vowelsCount = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (Vowels.indexOf(string[i]) !== -1) {
//             vowelsCount += 1;
//         }
//     }
//     console.log(vowelsCount);
// }
// getVowels("kalp") 

// 15) Ans:-
// let array = [1,2,3,4,5,6,7,8,9,10]
// let temp = array.indexOf(10)
// if(temp<=array.length){
//     console.log(temp);
// }else{
//     console.log("-1")
// }

// 17) Ans:-
// let array1 = [1, 3, 5, 2, 9];
// let array2 = [2, 3, 4, 5, 6, 9];

// function res_arr(array1, array2){
//     let new_array = [];
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (array1[i] === array2[j]) {
//                 new_array.push(array1[i]);
//             }
//         }
//     }
//     return new_array;
// };

// console.log(res_arr(array1, array2));

// 21) Ans:-
// function randomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }
// console.log( randomNumber(11, 25) );

// 23) Ans:-
// let c = 44;
// let f = 0;

// f = (c * (9 / 5)) + 32;
// console.log(f);


//   Object Questions:-

// 1) Ans:-
// const person = {name:"kalp", age:"17", city:"unjha"}
// console.log(person)  

// 2) Ans:-
// const person = {name:"kalp", age:"17"}
// console.log(person.name)

// 3) Ans:-
// let car = {company:"BMW", model:"Q5"}
// car.year='2020'
// console.log(car)

// 4) Ans:-
// let car = {company:"BMW", model:"Q5"}
// delete car.model
// console.log(car)

// 5) Ans:-


// 6) Ans:-
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// console.log(obj1, " + ", obj2);

// 9) Ans:-
// const ID = {
//     name: "kalp",
//     age: 17,
//     city: "unjha",
//   }
    
//   let temp = Object.keys(ID).length
//   console.log(temp)
    
// 10) Ans:-
// const ID = {
//         name: "kalp",
//         age: 17,
//         city: "unjha",
//       };  

// let property=Object.keys(ID);  
// console.log(property); 

// 11) Ans:-
// const ID = {
//         name: "kalp",
//         age: 17,
//         city: "unjha",
//       };  

// let property=Object.values(ID);  
// console.log(property);  

// 13) Ans:-
// const ID = [
//     {name: 'kalp', grade: 'A'},
//     {name: 'om', grade: 'B'},
//     {name: 'krish', grade: 'C'},
//     {name: 'sujal', grade: 'B'}
// ];

// const temp = groupBy(ID, 'grade');
// console.log(temp);




//     Array Questions:-

// 1) Ans:-
// const arr = [3, 34, 47, 69, 325];
// let sum = 0;
// for (let i = 0; i < arr. length; i++) {
//     sum += arr[i];
// }
// console. log(sum);

// 2) Ans:-


// 3) Ans:-
// let arr = [94, 598, 60, 57, 60, 82, 42, 65, 22, 4]
// let temp = Math.min(...arr)
// console.log(temp)

// 4) Ans:-
// let array = ([5, 2, 9, 1, 3, 6])
// array.sort(); 
// console.log(array)

// 5) Ans:-
// let array = ([5, 2, 9, 1, 3, 6])
// array.sort();
// array.reverse(); 
// console.log(array)

// 6) Ans:-
// let array = [1, 2, 3, 4, 5, 6]
// array.reverse()
// console.log(array)

// 9) Ans:-
// var array = ["banana", "mango", "apple", "mango", "orange"]
// function remove(){
//     console.log(...new Set(array))
// }
// remove()
    
// 10) Ans:-
// let a = [1, 2, 3];
// let b = [,4, 5, 6];
// console.log([a + b]);




















//     Sting Questions

// 1) Ans:-
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     console.log(newString)
// }
// reverseString('kalp');

// 2) Ans:-
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     console.log(newString)
// }
// reverseString('kalp');

// 3) Ans:-
// function getVowels(string) {
//     let Vowels = "aAeEiIoOuU";
//     let vowelsCount = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (Vowels.indexOf(string[i]) !== -1) {
//             vowelsCount += 1;
//         }
//     }
//     console.log(vowelsCount);
// }
// getVowels("kalp") 

// 7) Ans:-
// let String = "Hello World";
// let temp = String.replace(/\s+/g, '-');

// console.log(temp);

// 9) Ans:-
// function isDigit(char) {
//     return char >= '0' && char <= '9';
// }
// function Digits(str) {
//     return str.split('').every(isDigit);
// }
// console.log(Digits("123"));

// 11) Ans:-
// function longest(str){ 
//     str = str.split(" ") 
//     return str.sort((a, b) => b.length - a.length)[0]
// } 

// console.log(longest("MY name is kalp"))