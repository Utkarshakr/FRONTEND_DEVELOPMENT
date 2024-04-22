
function fn(){
    return "I am returning from a normal function";
}

var myArrowfn =()=> "I am returning from arrow function";

console.log(myArrowfn());
console.log(fn());

var obj1 = {
    username : "Raj",
    city : "Banglore",
    print : function(){
        console.log(this.username , this.city);
    },
};

var obj2 = {
    username : "Raj",
    city : "Banglore",
    print : ()=>{
        console.log(this.username , this.city);
    },
};

obj2.print();