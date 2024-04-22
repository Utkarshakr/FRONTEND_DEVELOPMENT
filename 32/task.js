
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


var filtereddata  =  details.filter(function(element){

    return element.brand == "Apple" || element.price <= 9000;
});

console.log(filtereddata);             