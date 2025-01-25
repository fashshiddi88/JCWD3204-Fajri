//1. Write a code to display the multiplication table of a given integer.
/* let num = 9;
let res; */
/* for (let i = 1; i <= 10; i++) {
  res = `${num} x ${i}`;
  console.log(res);
} */

//2. Write a code to check whether a string is a palindrome or not.
/* let word = "rusak";
word = word.toLowerCase();
let reversedWord = ""; */
/* for (let i = 0; i < word.length; i++) {
  reversedWord = word[i] + reversedWord;
}
if (reversedWord === word) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
} */

//3. Write a code to convert centimeter to kilometer.
/* let cm = 50000;
let km = cm / 100000;
console.log(`${km} km`); */

//4. Write a code to format number as currency (IDR)
/* let number = 10000;
// Convert the number to a string and format it with thousand separators
let formattedNumber = number.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
});

console.log(formattedNumber); // Output: "Rp. 1.000,00" */

//5. Write a code to remove the first occurrence of a given “search string” from a string
/* var str = "hello world"; // Original string
var remove = "ell"; // The substring to remove
var result = "";

var i = 0;
while (i < str.length) {
  if (str.substring(i, i + remove.length) === remove) {
    i += remove.length; // Skip the characters of the substring
  } else {
    result += str[i]; // Add the current character to the result
    i++;
  }
}
console.log("Modified string:", result); */

//6. Write a code to capitalize the first letter of each word in a string
/* let str = "hello word";
let res = "";
let capNext = true;

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (capNext && char !== " ") {
    res += char.toUpperCase();
    capNext = false;
  } else if (char === " ") {
    res += char;
    capNext = true;
  } else {
    res += char.toLowerCase();
  }
}
console.log(`Capitalized: ${res}`);
 */

//7. Write a code to swap the case of each character from string
/* let str = "The QuiCk BrOwN Fox";
let res = "";

for (let i = 0; i < str.length; i++) {
  let char = str[i];

  // Check if the character is uppercase
  if (char >= "A" && char <= "Z") {
    res += char.toLowerCase(); // Convert to lowercase
  }
  // Check if the character is lowercase
  else if (char >= "a" && char <= "z") {
    res += char.toUpperCase(); // Convert to uppercase
  } else {
    res += char; // Keep non-alphabetic characters unchanged
  }
}

console.log(res); */

//8. Write a code to find the largest of two given integers
/* let num1 = 47;
let num2 = 42;

if (num1 > num2) {
  console.log(`${num1} lebih besar dari ${num2}`);
} else {
  console.log(`${num2} lebih besar dari ${num1}`);
} */

//9. Write a conditional statement to sort three numbers
/* let a = 12;
let b = 5;
let c = 8;

let smallest, middle, largest;

// Compare numbers to find the order
if (a <= b && a <= c) {
  smallest = a;
  if (b <= c) {
    middle = b;
    largest = c;
  } else {
    middle = c;
    largest = b;
  }
} else if (b <= a && b <= c) {
  smallest = b;
  if (a <= c) {
    middle = a;
    largest = c;
  } else {
    middle = c;
    largest = a;
  }
} else {
  smallest = c;
  if (a <= b) {
    middle = a;
    largest = b;
  } else {
    middle = b;
    largest = a;
  }
}

console.log(smallest, middle, largest); */

//9. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
/* let input = true;
let res;
if (typeof input === "string") {
  console.log(1);
} else if (typeof input === "number") {
  console.log(2);
} else {
  console.log(3);
} */

//10. Write a code to change every letter a into * from a string of input
let str = "An apple a day keeps the doctor away";
let res = "";
for (let i = 0; i < str.length; i++) {
  let char = str[i];

  if (char.toLowerCase() === "a") {
    res += "*";
  } else {
    res += char;
  }
}

console.log(res);
