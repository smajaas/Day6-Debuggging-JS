//Question#1 : Fix the code to get the largest of three.

let f,s,t;
aa = (f,s,t) => {
        console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);

//    ****************************************************************************************************
//Question# 2 :Fix the code to Sum of the digits present in the number
let n = 123;


function add(n)
{
let sum = 0;
while(n){
sum+=n%10;
n=Math.floor(n/10);

}
console.log(sum);
}
add(n);

//*************************************************************************************************

//Question#3 : Fix the code to Sum of all numbers using IIFE function

const arr = [9,8,5,6,4,3,2,1]; 
(function() 
{ 
    let sum = 0; 
    for (var i = 0; i < arr.length; i++)
    { 
        // removed unwanted semicolon 
        sum += +arr[i]; 
        // intparse is used to get the value as a number 
        } 
        console.log(sum); 
        return sum; 
    
})
();

//***********************************************************************************************

//Question#4 : Fix the code to gen Title caps.

var arr = ["guvi", "geek", "zen","fullstack"];
var ano = function(arro) {

    //changed arro to arr
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
}
ano();

//*****************************************************************************************************

//Question#5 : Fix the code to return the Prime numbers

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){

    //check two condition
 if(num%i===0 && num ==i) 
 {
 return true;
 }
 else if (num%i===0 && num !=i) {

    //break the for loop
  break;
 }}
  return num===1;

});

console.log(myPrime);

//***************************************************************************************

//Question#6 :Fix the code to sum the number in that array

const num = [10, 20, 30, 40,50,60,70,80,90,100] ;
console.log(num.reduce((a, b) =>a + b));

//*****************************************************************************************

//Question#7 : Fix the code to rotate an array by k times and return rotated array using IIFE function

//Removed arr={};

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13]; 
var k = 3; 
k = arr.length % k; 
(function() 
{ 
out = arr.slice(k + 1, arr.length); 
var count = out.length; 
for (var i = 0; i < k + 1; i++) 
{ 
    out[count] = arr[i]; 
    count += 1; 
    
} 
console.log(out);
    
})();

//************************************************************************************************

//Question#8 :Fix the code to gen Title caps.

var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})();

//************************************************************************************************

//Question#9 : Print all odd numbers in an array using IIFE function.

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {

    //Changed !==0
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})();

//************************************************************************************************
//Question#10 : Fix the code to reverse.

(function(str)
{
str1 = str.split("").reverse().join("");
console.log(str1); 
})
("abcd");

//************************************************************************************************

//Question#11 : Fix the code to remove duplicates.

//place the for loop after newArr[];
var res = function(arr){
 
    newArr = [];
    for(var i=0; i < arr.length; i++){
    if(newArr.indexOf(arr[i]) ==-1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr);
   };
   res(["guvi","geek","guvi","duplicate","geeK"]);

   //************************************************************************************************
  // Question#12 : Fix the code to give the below output:

var array =[[["firstname:","vasanth","lastname:","Raje","age:",24,"role:","JSWizard"]],[["firstname:","Sri","lastname:","Devi","age:",28,"role:", "Coder"]]];
var final=[];

while(array.length!==0)
{
 var outer_remove = array.shift();
 
 while(outer_remove.length!==0)
 {
 var inner_remove = outer_remove.shift();
 var key = inner_remove[0];
 var value =inner_remove[1];
 var new_object=value+key;
 }
 final.push(new_object)
}

console.log(final);

//************************************************************************************************

//Question#13 : Fix the code to give the below output:

var as=[12,34,5,6,2,56,6,2,1]; 
var s=as.reduce(function(a,c)
{ 
    if(a%2 !==0 && c%2 !==0)
    { return a+c; }
    else if(a%2 !==0)
    { return a; 
        
    }else 
    if(c%2 !==0)
    { return c; } 
    return 0;

}); console.log(s);

//************************************************************************************************

// Question#14 : Fix the code to give the below output:

// Fix the code to give the below output:
// Swap the odd and even digits


aa = data=>{
    var a=data;
    
    //move this to above for loop
     var l='';
    
   for(i=0;i<a.length-1;i++){
   var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!==0)
   {
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aa("1234");

