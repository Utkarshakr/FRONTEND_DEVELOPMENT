var details = [
    {
        brand : "Apple",
        model : "Iphone 11",
        price : 900,
    }
,   {
    brand : "Apple",
    model : "Iphone 12",
    price : 9000,
    }
    ,
    {
        brand : "Apple",
        model : "Iphone 14",
        price : 90000,
        }
        ,
        {
            brand : "Appl",
            model : "Iphone 13",
            price : 900000,
            }
];

var newdata =details.filter(function(element , index){
    return element.brand == "Apple";
});

console.log(newdata);