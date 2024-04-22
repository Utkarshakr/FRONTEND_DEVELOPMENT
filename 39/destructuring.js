var obj = {
    username : "Rajesh Verma",
    city : "Delhi",
    id : 101,
    gender : "Male",
};

var {city , gender} = obj ;

//100 places
console.log(city , gender );    // Object De-Structuring
// console.log(city , gender , id);

var productDetails = ["Iphone 14 pro" , "Vivo A27" , "Samsung S23" ];

var [element1 , element2 , element3] = productDetails;

console.log(productDetails[2]);
console.log(element1 , element2 , element3);