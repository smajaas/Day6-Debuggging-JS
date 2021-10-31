//Question #3 Explain the below how it works
//Explanation : We can have as many statements in the code as we want. Another statement can be separated with a semicolon.

alert("I'm JavaScript!");


alert('Hello') // this line is not having semicolon

//A semicolon may be omitted in most cases when a line break exists.JavaScript interprets the line break as an “implicit” semicolon.Also called as automatic semicolon insertion.

alert(`Wor
 ld`)
alert(3 +
1
+ 2); //this is multiple line code and its working

//JavaScript does not insert semicolons here. It is intuitively obvious that if the line ends with a plus "+", then it is an “incomplete expression”, no semicolon required. And in this case that works as intended.

// --------------------------------------------------------------------------------------------------------

//Question#4 Fix the below to alert Guvi geek: 

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert( admin ); // "Guvi geek"

// ========================------------------*************************************************************

//Question#5 Fix the below to alert hello Guvi geek:

let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+" "+lname;
alert( `hello ${name}` );

// ********************************************************************************************

//Question#6 Fix the below to alert sum of two numbers

let a = +prompt("First number?");
let b = +prompt("Second number?");

alert (a+b);

// *******************************************************************************************************************
// Question#7 If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

//Solution : Here 2 is not greater than 12 that why its diffused here. 
//Change the condition and in string it will compare “2” vs “12” i.e 2 vs 1 then 2.

var a = "2" < "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

// ************************************************************************************************

//Question#8  How to get the success in console.

let a = +prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

// *******************************************************************************************

// Question:9 : How to get the correct score in console.

let value = +prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

// ****************************************************************************************************

//Question#10 Fix the code to welcome the Employee.

let login = 'Employee';
let message = (login === 'Employee') ? 'Welcome the':
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message,`${login}`);

// ****************************************************************************************

//Question#11 : Fix the code to welcome the boss

let message;
if (null || 2 || undefined )
{
message = "welcome boss";
}
else
{
 message = "Go away";
}
  console.log(message);

//********************************************************************************************

//Question#12 : Fix the code to welcome the boss

let message;
let lock;

//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

//********************************************************************************************

//Question#13 : Fix the code to welcome the boss

let message;
let lock;

//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

// *********************************************************************************************

//Question#14 
// Change the code to print
// 3
// 2
// 1

let i = 3;
while (i) {
  console.log( i-- );
}

// ***********************************************************************************************

//Question#15 : Change the code to print 1 to 10 in 4 lines

for (i=1;i<=10;i++) {
    console.log(i);
}

// ****************************************************************************************************

//Question#16 Change the code to print even numbers

for (let num = 2; num <= 20; num+=2) {
    console.log(num)
  }

// ************************************************************************************************************

//Question#17 : Change the code to print all the gifts

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i <gifts.length; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

// *****************************************************************************************************************
//Question#18 : Fix the code to disarm the bomb.
//Solution here..Change the condition. i.e count ++

let countdown = 100;
while (countdown > 0) {
  countdown++;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

//***********************************************************************************************

//Question#19 : Whats the msg printed and why?

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);

// The output is "hi" and it is because the string 0 is passed inside if statement becomes true and 
// the number 0 is false.

//******************************************************************************************************



//Question#20 : Whats the msg printed and why? Guess you answer before running it.

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);

//The output is "hi" and var msg=”” holds a string 

//******************************************************************************************

// Part 3: Find the culprits and nail them — debugging javascript
// Fix the code to get the largest of three.

aa = (f,s,t) => {
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);

   //*********************************************************************************************