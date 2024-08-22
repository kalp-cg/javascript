// console.log("kalp");

// var new_obj = {key:"value"}
// console.log(new_obj);

// var array = [1,2,3,4,5]
// console.log(array)

// function for_loop(){
//     for (let i = 0; i < 5; i++) {
//         console.log(i)  
//     }
// } for_loop()

// let sum = 0;
// const number = 156

// create a temporary variable

// let temp = number;
// while (temp > 0) {
//     // finding the one's digit
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;

//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }
// // check the condition
// if (sum == number) {
//     console.log(${number} is an Armstrong number);
// }
// else {
//     console.log(${number} is not an Armstrong number.);
// }

// function isArmstrong(number) {
// 	const digits = number.toString().split('');
// 	const order = digits.length;
// 	const sum = digits.reduce(
// 		(acc, digit) =>
// 			acc + Math.pow(parseInt(digit), order), 0);

// 	if (sum === number) {
// 		console.log(
// 			number + " is an Armstrong Number");
// 	}
// 	else {
// 		console.log
// 			(number + " is not an Armstrong Number");
// 	}
// }

// isArmstrong(462);

// Armstrong Number

// var number=1234;
// var sum=0;
// var pow=number.toString().length;
// while(number>0){
//     var rem=number%10
//     sum=sum+(rem**pow);
//     number=(number-rem)/10
// }
// console.log(sum)

// let a = ("sujal, prem, darshan");
// let b = a.slice(12,20)
// console.log(b)

// let text1 = "Hello";
// let text2 = "World!";
// let text3 = text1.concat(" ",text2);
// console.log(text3)

// let text1 = "      Hello World!";
// let text2 = text1.trim();
// console.log(text2)

// let text = "I love cats. Cats are very easy to love. Cats are very popular";
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// console.log(text)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// console.log(fruits[0])


// for(var i = 1;i<=5;i++){
//     for(var j = 1;j<=i;j++){
//         for(var k = 1; k<=j; k++)
//         console.log("i, j, k ", i, j, k);
//  }
// }

// for(var i = 1;i<=5;i++){
//     for(var j = 1;;j++){
//        console.log("i, j, ", i, j);
//  }
// }

// for (let i = 1; i <= 5; i++) {
//   var temp = ""; 
//     for(let j = 1; j <= i; j++){
//         temp += j
//     }
//         console.log(temp)
    
// }


// for (let i = 1; i <= 5; i++) {
//   var temp = ""; 
//     for(let j = 1; j <= i; j++){
//         temp += i
//     }
//         console.log(temp)   
// }


// for (let i = 1; i <= 26; i++) {
//   let temp = ""; 
//   let char = String.fromCharCode(64+ i);
//     for(let j = 1; j <= i; j++){
//         temp += char;
//     }
//         console.log(temp)   
// }


// for (let i = 1; i <= 3; i++) {
//   let str = '';
//   for (let j = 1; j <= i; j++) {
//       str += String.fromCharCode(64 + j);
//   }
//   console.log(str);
// }

// for (let i = 1; i <= 5; i++) {
//   let str = '';
//   for (let j = 5; j >= i; j--) {
//       str += String.fromCharCode(64 + j);
//   }
//   console.log(str);
// }


// let rows = 3

// for(let i=0; i<=rows; i++){
//   let str = ""
//   for(let j=0; j<i; j++){
//     str += String.fromCharCode(65+rows-j-1)
//   }
//   console.log(str)
//   str = ""
// }

// var my_name = "Sujal";
// var age = 18;
// console.log("My name is"+ my_name + "and my age is" + age);
// console.log("My name is", my_name + "and my age is", age);
// console.log(My name is ${my_name} + and my age is ${age});


// let array = [1,2,3,4,5];
// let [one, two, three, four] = [1,2,3,4]
// console.log(three, array[0])

// let obj = {name: "Sujal", age: 17}
// let {name, age} = {name: "Sujal", age: 17}
// console.log(name)

// const fruits = ["Apple", "Mango", "Banana", "Orange"]
// const [firstfruit , , ,lastfruit] = fruits;

// const arr = ["Apple", , "Banana", "Orange"]
// console.log(arr[1])

// var unique = new Set();
// unique.add(1)
// unique.add(2)
// unique.add(1)
// unique.add({key:"Value"})
// unique.add(function myname(){})
// unique.add({key:"Value"})
// unique.add([1,2,3,4,5])
// unique.add([1,2,3,4,5])

// console.log("set:unique -", Array.from(unique).join(" ,"));