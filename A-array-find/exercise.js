/* 
  You are given an array of names.
  Write a function called "findLongNameThatStartsWithA" using the .find() method. This function should find the first name in names array that starts with the letter 'A' and is longer than seven letters.
*/

// write your code here

let names = [
  "Vajihe",
  "Alireza",
  "AmirMostafa",
  "AmirMehdi",
  "Alie",
  "Sarah",
  "MohammadHosein",
  "Fatemeh",
  "Mahjan",
];

const  findLongNameThatStartsWithA = function (arr) {
 return arr.find(names => names.length>7 && names[0]=== "A");
};


let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "AmirMostafa"
