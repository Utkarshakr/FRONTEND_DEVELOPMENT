var arr = ["Raj" , "Rahul", 52, 25626, 52, 252, 52, true];

var newArray = arr.map(function(element , index){

    return element*10;
});

console.log(newArray);