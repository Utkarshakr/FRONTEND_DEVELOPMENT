function f1() {
    let name = "Alt";     //let and const is used to declare blockscope element
    if(true){
        console.log(name);
    }
    if(true){
        var city = "Delhi";   // var is a function scope keyword
        console.log(name);
    }
    console.log(city);
}

f1();
