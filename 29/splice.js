var arr = ["Raj" , "ahf" , 99 , true , 784];
console.log(arr);

// Remove an element at specific position
arr.splice(2, 1);
console.log(arr);

// Add an element at specific position
arr.splice(2, 0 , 5397);
console.log(arr);

// To get the sub-array of an existing array
var newArray = arr.slice(1, 4);
console.log(newArray);
