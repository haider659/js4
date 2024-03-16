// chapter 14
// Q1
var password = "";

if (password !== "") {
    if (password.length <= 5) {
        console.log("Password must be greater than 5");
    } else {
        console.log("OK");
    }
}
// Q2
// if(a === 1){
//     if(c === "Max"){
//         alert("OK")
//     }
// }
// Q4
var num = 5;
var num1 = 5;
if(num===num1){
    if(num<=num1){
        alert("display an message");
    }
    else{
        alert("OK");
    }
}
// chapter 15
// Q1
var myfirstArr = [];
// Q2
var arr = ["haider"];
// Q3
var alphabet = ["h","i","j","k"];
alert(alphabet[2]);
// Q4
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var lengthOfAlphabet = alphabet.length;
alert("The total length of the array is: " + lengthOfAlphabet);
// Q5
// var arr = ["firstElement"]; 
// myArray[1] = "secondElement"; 
// alert("New element add: " + myArray[1]);
// array2
// Q1
// Q2
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();
console.log(Alphabet); 
// Q3
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(10); 
console.log(Alphabet); 
// array3
// Q1
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes); 
// Q2
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);

console.log(sizes);
// Q3
var myArray = ["firstelement"]; 
myArray.unshift("secondelement"); 
alert("New first element: " + myArray[0]);
// Q4
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
console.log(sizes);
// Q4
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3); 
console.log(regSizes); 
// Q6
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3); 
console.log(regSizes);
// chapter 17
// Q1
for ( i = 0; i <= 10; i++) {
    
}
// Q2
for ( i = 0; i < 11; i++) {
    
}
// Q3
for ( i = 0; i < 100; i++) {
    
}
// Q4
for (var i=0; i<=; i++){
    
}
// Q5
for ( i = 3; i >0; i--) {
    
}



