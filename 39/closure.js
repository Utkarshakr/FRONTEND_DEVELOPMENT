function outer(){
    var city = "Delhi";
    console.log("Outer Function", city);

    function inner(x , y){
        console.log(x+y);
        console.log("Inner Function", city);
    }

    inner(10 , 20);
}

var fninner = outer();
 fninner(5 , 5);