// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let parent = {
    name : "pappa",
    age : 24
}

let child = {
    place : "bangalore",
    profession : "parenting"
}

child._proto_ = parent;
console.log(child._proto_.age);

// Write code to explain prototype chaining

const studentOne = {
    name: "thriveni",
    age: 24,
   StudentDetails: function(){
        console.log(`name ${this.name}age ${this.age}`);
   
    }   
}
const studentTwo = {
    name:"thiru",
}
console.log(studentOne.__proto__);
console.log(studentTwo.__proto__);
console.log(studentTwo.__proto__.__proto__);



// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

// studentTwo1.__proto__ = studentOne;
// console.log(studentTwo1);
// console.log(studentTwo1.age);
// console.log(studentTwo1.showDetails());

// let myArr = [1,2,3,4,5];

// console.log(myArr.__proto__);
// console.log(myArr.__proto__.__proto__);
// console.log(myArr.__proto__.__proto__.__proto__);
const sum ={
    addition:function(arr){
        let arraysum=0;
        let n= arr.length;
        for( let i=0 ; i<n ; i++){
            arraysum=arraysum+arr[i];
        }
        console.log(arraysum);
    }
}
Array.__proto__=sum;
arr1= [1,2,3,6,5];
Array.addition(arr1);
arr2=[24,32,01]
Array.addition(arr2);


// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

var keys=[];
for( let key in parent) keys.push(key);
console.log(keys);
