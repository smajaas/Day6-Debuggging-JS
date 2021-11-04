
//  Question#1: Write a code to print the numbers in the array
//  Output: 1234567891011
//  Solution here: Changed i=0; and i++
 
 var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 var new_string = "";
  
 for (var i =0 ; i <11; i++) {
  new_string += numsArr[i] 
 }
 console.log(new_string);
 
 //*******************************************************************************************

//  Question#2 : Write a code to print the numbers in the array
//  Output: 1,2,3,4,5,6,7,8,9,10,11
 
 var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 var new_string = " ";
  
 for (var i = 0; i < 11; i++) {
  new_string += numsArr[i]+","; //Add “,” here as a solution and i=0;
 }
 console.log(new_string);

  //*******************************************************************************************
 
 
//  Question #3 : Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
//  Output: 11 10 9 8 7 6 5 4 3 2 1
 
 var new_string ="";
  
 for (var i = 11; i > 0; i -- ) 
 {
  new_string += [i] + " ";
 }
 console.log(new_string.trim()); //used trim ()

  //*******************************************************************************************
 
 
//  Question#4 : Write a code to replace the array value — If the number is even, replace it with ‘even’.
//  Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
 
 
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 for (var i = 0; i <=10; i++) {
  if(numsArr[i] %2 ===0 )
  {
  numsArr[i] = "even";          //changed odd to even
  }
 }
 console.log(numsArr);


  //*******************************************************************************************
 
 
//  Question#5 : Write a code to replace the array value — if the index is even, replace it with ‘even’.
//  Output: [“even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, …]
 
 
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 
 for (var i = 0; i <=10; i++) 
 { 
     if(numsArr.indexOf(numsArr[i]) %2 === 0 ) 
     { 
         numsArr[i] = "even";
     }
     } 
     console.log(numsArr);
 
  //*******************************************************************************************
 
//  Question #6 Write a code to add all the numbers in the array
//  Output: 66
 
 var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 
 console.log(numsArr.reduce((a,b)=>a+b));
 
 
  //*******************************************************************************************
//  Question #7 : Write a code to add the even numbers only
//  Output: 30
 
 var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 
 console.log(numsArr.filter((ele)=>ele%2===0).reduce((a,v)=>a+v));

 
//*******************************************************************************************
//  Question #8 : Write a code to add the even numbers and subract the odd numbers
//  Output: 94
 
 var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 
  var sum=100; 
 
  numsArr.filter((ele)=> {
     if (ele%2!==0) {
         sum=sum-ele;
     } else {
         sum=sum+ele;
     }
 });
 console.log(sum);
 
 
  //*******************************************************************************************
 
 
 
//  Question #9 : Write a code to print inner arrays
//  Output:
//  Array(5) [ 1, 2, 3, 4, 5 ]
//  Array(6) [ 6, 7, 8, 9, 10, 11 ]
 
 //Solution : Added two arrays with comma and removed unwanted semicolon


 var numsArr = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10, 11]];
  for (var i = 0; i < numsArr.length; i++)
  {
   let res = numsArr[i].length;
   console.log("Array",res,numsArr[i]);
  }
 

   //*******************************************************************************************
//  Question #10 : Write a code to print elements in the inner arrays
//  Output: 1234567891011
 
 //Solution : Changed j++

 var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
  var str_all="";
  for (var i = 0; i < numsArr.length; i++) {
   var inner_array = numsArr[i];
   for(var j = 0 ; j < inner_array.length;j++ )
       str_all +=inner_array[j]
  }
  console.log(str_all);
  
 
  //*******************************************************************************************
//  Question #11 : Write a code to replace the array value — If the index is even, replace it with ‘even’.
//  Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]


 var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
 
  for(var i = 0; i < numsArr.length; i++)
  { 
      for(var j = 0 ; j < numsArr[i].length;j++ )
      { 
          if(numsArr[i].indexOf(numsArr[i][j])%2 ===0)
          { 
              numsArr[i][j] = "even"; //used even
              
              
          } 
          
      } } 
      console.log(numsArr);
 

//*******************************************************************************************
//  Question#12 : Write a code to print elements in the inner arrays in reverse
//  Output: 11 10 9 8 7 6 5 4 3 2 1
 
 var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]]; 
  var str_all="";
  for (var i = numsArr.length-1; i >=0; i--)  //i--
  { 
      var inner_array = numsArr[i]; 
      for(var j = inner_array.length-1; j >= 0 ;j-- ) //j--
      str_all +=inner_array[j] +" "; 
      
  } 
  console.log(str_all.trim());
  
  //*******************************************************************************************
//  Question#13 : Write a code to add elements in the inner arrays based on odd or even values
//  Output:
//  36
//  30
 
  var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]]; 
  var sum_odd=0; 
  var sum_even=0; 
  for (var i = 0; i < numsArr.length; i++) 
  { 
      var inner_array = numsArr[i]; 
      for(var j = 0 ; j < inner_array.length;j++)
      { 
          if(inner_array[j]%2!==0)
          { 
              sum_odd += inner_array[j];
          } 
          else 
          { 
              sum_even += inner_array[j];
          } } } 
          console.log(sum_odd); 
          console.log(sum_even);
  
 
 
 
 