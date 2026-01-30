let course = "BCA(AI & DS)";
console.log("my name is anshika and i am from" + " "+course);

let name = "anshika";
let hobbies = " making reels and taking pictures";
let fullsentence = `my name is ${name} and my hobbies are ${hobbies}`
console.log(fullsentence)

let name = "anshika";
const age = "19";
var hobby = "scrolling reels";
console.log (name,age,hobby);

let isCool = true;
if (isCool) {
    console.log("this is cool");
} else {
    console.log("this is not cool");
}

let isHomeworkDone = false;
if (isHomeworkDone) {
    console.log("you can go out");
} else {
    console.log("stay at home");
}

let num = 42;
let text = "hello";
let isCool = "true";
let nothing = "null";
let notdefined;

let a = null;
let b;
console.log(a);
console.log(b);

let fruits = ["apple","banana","orange"];
fruits.push("mango");
console.log(fruits);

let fruits = ["apple","banana","orange"];
fruits.pop( );
console.log(fruits);

let fruits = ["apple","banana","mango"];
fruits.unshift("orange");
console.log(fruits);

let fruits = ["apple","banana","mango"];
fruits.shift( );
console.log(fruits);

let fruits = ["apple","banana","mango"];
fruits.shift( );
fruits.pop( );
fruits.push("cherry")
fruits.unshift("berry")
console.log(fruits);

let studentsname = [];

studentsname.push("anshika");
studentsname.push("anushka");
studentsname.push("sakshi");
studentsname.push("rashi");

console.log(studentsname);

let x = 5;
x += 2
x -= 3
x *=2
x /= 3

console.log(x);

let x = 2 , y = 3
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x**y);
console.log(x%y);

x=20
y=20

console.log(x==y);
console.log(x===y);
console.log(x!=y);
console.log(x!==y);
console.log(x>y);

 let age = 18;
 let hasID = true;
if (age >=18 && hasID ) {
    console.log("allowed to enter");
}

let isadmin = false;
let ismanager = true;
if (isadmin || ismanager) {
    console.log("you are allowed enter");
}

let anshika = true;
let bhoomi = false;
if (anshika||bhoomi){
    console.log("i love you");
}

let studentsage = 19;
let teachers = true;
if (studentsage>=18 && teachers){
    console.log("you are invited to farewell party");
}

let m = 5;
let n = 3;
console.log(m&n);
console.log(m^n);
console.log(m|n);
console.log(~m);
console.log(m>>1);
console.log(m<<1);

let marks = 80
if (marks >= 75) {
 console.log("pass");
} else {
 console.log("fail");
}

let percentage = 92
if (percentage >= 75) {
    console.log("ypu passed the exam!");
} else {
    console.log("better luck next time");
}

let marks= 99
if (marks >= 90){
    console.log("grade a");
} else if (marks >= 75){
    console.log("grade b");
} else {
    console.log("grade c");
}

let day = 3
switch (day) {
    case 1 :
        console.log("monday");
        break;
    case 2 :
        console.log("tuesday");
        break;
    case 3 :
        console.log("wednesday");
        break;
    default :
        console.log("invalid day")
}

let color = 1
switch (color) {
    case 1 :
        console.log("red");
    break;
    case 2 :
        console.log("blue");
        break;
    case 3 : 
        console.log("yellow");
    break;
    default:
        console.log("invalid color")
}

let a = 6;
a++;
console.log(a);

let i= 7;
for (i= 1 ; i <= 7 ; i++) {
    console.log(i)
}

let num= 10;
num++;
num--;
num++;
num--;
console.log(num);

let x=9;
x += 3;
x *=4;
x /=3;
x -=2;
console.log(x);

let balance=4500;
balance += 300;
balance -= 700;
console.log(balance);

let age = 20;
let result = age >= 18? "adult" : "minor";
console.log(result);

let marks = 33;
let status=marks >=33? "pass": "fail";
console.log(status);

let num= 9
let 