console.log('Hello');

// alert('Yooooo')
// Variables
var b = 'smoothie';
console.log(b);

var some_number = 45;
console.log(some_number);

document.getElementById('some_text').innerHTML = 'Hey There';

// var age = prompt('What is your age');
// document.getElementById('some_text').innerHTML = age;

function fun() {
    console.log('This is a function');
}

fun()
// Let's create a function that takes in a name and
//  returns to you hello followed by your name 

function greeting(name) {   
    var result = 'Hello '+ name
    console.log(result)
}

// var names = prompt('What is your name?');
// greeting(names);

// Arguments in functions 
function sum_numbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);    
}

sum_numbers(34, 56)

// Loops

// var num = 0;
// while (num < 100) {
//     num += 1;
//     console.log(num);
// }

for (let i = 0; i <= 100; i++) {
    console.log(i)
}

// Data Types
// strings in Javascript 
let fruit = 'banana, apple, orange, blackberry';
let more_fruits = 'banana'; //new line 

console.log(fruit.length);
console.log(fruit.indexOf('an'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('bana', 'okay'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(3));
console.log(fruit[3]);
console.log(fruit.split(','));
console.log(fruit.split(''));

// Array
let fruits = ['banana', 'apple', 'orange', 'blackberry', 'pineapples'];
console.log(fruits[1]);
fruits['pear']
console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods 
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits);
console.log(fruits.push('mango'), fruits);
fruits[5] = 'strawberry';
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('paw-paw');
console.log(fruits);

let vegetables = ['tomato', 'lettuce', 'brocolli'];

let all_grocies = fruits.concat(vegetables);
console.log(all_grocies);
console.log(all_grocies.reverse());

let numbers =  [5, 10, 15, 20, 25, 30, 35, 50, 34, 1, 33, 8, 9, 777, 89, 889, 373];
console.log(numbers.sort());
console.log(numbers.sort(function(a, b) {return a-b})); // ascending order 
console.log(numbers.sort(function(a, b) {return b-a})); // descending order

let empty_array = [];
for (let i = 0; i <= 10; i++) {
    empty_array.push(i)
}
console.log(empty_array);

let student = {
    first: 'Sodiq',
    last: 'Agunbiade',
    age: 19,
    height:170,
    student_info: function(){
        return this.first + ' ' + this.last
    }
};
console.log(student.first);
console.log(student.last); 
student.first = 'Temitope';
console.log(student.first);
console.log(student.age);
console.log(student.student_info());

// Conditionals, Control flows, If&else
var age = 34;
if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status)
} else {
    status = 'not my audience';
    console.log(status)
}

// Switch Statements 
// Differetiate between Weekends and Weekdays 
switch (2) {
    case 0:
        text = 'Weekend'
        break;
    case 6:
        text = 'Weekend'    
        break;
    default:
        text = 'Weekday'
        break;
}
console.log(text)

