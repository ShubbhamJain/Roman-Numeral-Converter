document.querySelector('#numinput').addEventListener('input', convertToRoman);
let output = document.querySelector('#output');
output.style.display = "none";

function convertToRoman(e) {
 let num = e.target.value;
 let romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
 let numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 let roman = "";

 for (let i = 0; i < numberArr.length; i++) {
   while (numberArr[i] <= num) {
     roman += romanArr[i];
     num -= numberArr[i];
   }
 }

 document.querySelector('#numoutput').textContent = roman;
 if (roman === "") {
  output.style.display = "none";
 }
 else {
  output.style.display = "block"; 
 }
}
