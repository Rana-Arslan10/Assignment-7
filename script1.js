// Program 1 
// find maximum between two numbers

var number1 = 2
var number2 = 4

if (number1 > number2){
    console.log("Number1 is maximum")
}
else{
    console.log("Number2 is maximum")
}


//Program 2
// Find maximum between three numbers

var number1=10;
var number2=3;
var number3=5;
if (number1>number2&& number1>number3){
    console.log("number1 is greater")
}
else if(number2>number1&&number2>number3){
    console.log("number2 is greater")
}
else if(number3>number2&&number3>number1){
    console.log("number 3 is greater")
}


//Program 3
//Check whether a number is negative or positive


var number=-2;
if (number>0){
    console.log("number is positive")
}
else{
    console.log("number is negative")
}


//Program 4
//Check whether the number is divisible by 5 and 11 or not


var number=165;
if (number % 11==0 && number % 15==0){
    console.log("number is divisible by 11 and 15")
}
else{
    console.log("number is not divisible by 11 and 15 ")
}


//Program 5
//Check whether the number is even or odd

var number= 6;
if (number %2==0){
    console.log("number is even")
}
else{
    console.log("number is odd")
}

//Program 6
//Check whether the year is leap year or not
////we check the leap year by diving it with 4 ,100 and 400 if the year is completely divide by 4 and 400 then it is a leap year and if it divided by 100 then it is not a leap year


var year = 2024;
if (year %4==0){
    console.log("This is a leap year")
}
else if(year % 100==0){
    console.log("This is not a leap year")
}
else if(year%400==0){
    console.log("this is also a leap year")
}
else{
    console.log("This is not a leap year")
}


//Program 7
//Check whether the chracter is alphabet or not

var ch = "a";
if (ch >= 'a' && ch <='z'){
    console.log("your character is an alphabet")
}
else{
    console.log("your character is not an alphaber")
}


////Program 8
//input any alphabet and check whether the it is vowel or consonant



var ch = "e"
if (ch =="a" || ch =="e" || ch=="i"|| ch=="o" || ch=="u"){
    console.log("your alphabet is vowel")
}
else{
    console.log("Your alphabet is consonant")
}

//Program 9
//input any character and check whether it is alphabet,digit or special character


var ch = "$"
if (ch>="a" && ch<="z"){
    console.log("character is alphabet")
}
else if(ch>="0" && ch<="9"){
    console.log("character is digit")
}
else if(ch == "~" || ch =="!" || ch=="@" || ch=="#" || ch=="$" || ch=="%" || ch=="^" || ch=="& " || ch=="*" || ch=="(" || ch==")"  || ch=="_" || ch=="+" || ch=="=" || ch=="{" || ch=="}"  || ch=="["  || ch=="]" || ch=="|" || ch==":" || ch=="'" || ch=="<" || ch==">" || ch=="," || ch=="." || ch=="?" || ch=="/"){
    console.log("your character is a Special digit")
}



//Program 10
//check whether the character is uppercase or lowercase


var ch ="A"
if (ch >= "a"&& ch<="z"){
    console.log("your character is lowercase")
}
else if(ch >="A"&& ch<="z"){
    console.log("your character is uppercase")
}


//Program 11
//input week number and print week days

var weekNumber= 5;
if(weekNumber==1){
    console.log("week day is Monday")
}
else if(weekNumber==2){
    console.log("week day is Tuesday")
}
else if(weekNumber==3){
    console.log("week day is wednesday")
}
else if(weekNumber==4){
    console.log("week day is Thursday")
}
else if(weekNumber==5){
    console.log("week day is Friday")
}
else if(weekNumber==6){
    console.log("week day is Saturday")
}
else if(weekNumber==7){
    console.log("week day is Sunday")
}
else{
    console.log("please enter a number between 1-7")
}




//Program 12
//input month number and print number of days in that month


var month=9;
if (month==1){
    console.log("Month 1 has 31 days")
}
else if(month==2){
    console.log("Month 2 has 28 days")
}
else if(month==3){
    console.log("Month 3 has 31 days")
}
else if(month==4){
    console.log("Month 4 has 30 days")
}
else if(month==5){
    console.log("Month 5 has 31 days")
}
else if(month==6){
    console.log("Month 6 has 30 days")
}
else if( month==7){
    console.log("Month 7 has 31 days")
}
else if(month==8){
    console.log("Month 8 has 31 days")
}
else if(month==9){
    console.log("Month 9 has 30 days")
}
else if(month==10){
    console.log("Month 10 has 31 days")
}
else if(month==11){
    console.log("Month 11 has 30 days")
}
else if(month==12){
    console.log("Month 12 has 31 days")
}
else{
    console.log("Enter a number in between 1-12 ")
}




//Program 13
//count total number of notes in given amount


var notes= "shaan notes"
if (notes=0){
    console.log("your notes has 50 pages")
}




//Program 14
//input angles of a triangle and check whether  triangle is valid or not


var angle1=60
var angle2=70
var angle3=50
if(angle1 + angle2 + angle3 ==180){
    console.log("Triangle is valid")
}
else {
    console.log("Triangle is not valid")
}




//Program 15
//input all sides of a triangle and check whether triangle is valid or not.



var side1=9;
var side2=3;
var side3=2;
if (side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side2){
    console.log("Triangle is valid")
}
else{
    console.log("Triangle is not valid")
}





//Program 16
//check whether the triangle is equilateral, isosceles or scalane triangle



var side1=5;
var side2=5;
var side3=5;
if (side1==side2 && side2 == side3){
    console.log("triangle is equiletaral")
}
if(side1 == side2 && side1 !== side3  || side1 == side3 && side1 !== side2 || side2 == side3 && side2  !== side1){
    console.log("Triagnle is isosceles")
}
else{
    console.log("triangle is scalane")
}



//Program 17
//find all roots of qudratic equation







//Program 18
//Calculate profit and loss


var sellingPrice= 50;
var costPrice=48;
if(sellingPrice > costPrice){
    console.log("you have made a profit")
}
else if(sellingPrice < costPrice){
    console.log("you made a loss")
}




//Program 19
//input marks of five subjects and calculate percentage and grades 


var Physics=40;
var chemistry=82;
var english=72;
var math=62;
var computer=98;
var totalMarks=500;
var obtianedMarks= Physics + chemistry + english + math + computer ;
var percentage = (obtianedMarks/totalMarks) * 100;
if (percentage >= 90){
    console.log("Student get A grade")
}
else if(percentage>=80){
    console.log("Student get B grade")
}
else if(percentage>= 70){
    console.log("Student get C grade")
}
else if(percentage>= 60){
    console.log("Student get D grade")
}
else if(percentage>=40){
    console.log("Student get E grade")
}
else if(percentage<=40 ){
    console.log("Student get F grade and Fail")
}



//Program 20
//input salart and calculate gross salary


var salary= 5000
