var arr = ["Raj" , "Rahul", 52, 25626, 52, 252, 52, true];

var filteredArray = arr.filter(function(element , index){

    return element > 50;  // return true or false
});

console.log(filteredArray);