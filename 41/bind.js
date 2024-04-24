var obj1 = {
    c : 100,
}

var obj2 = {
    c : 300,
}

function fnAdd(x,y){
    console.log(x + y + this.c);
}

// var fnAdd = fnAdd.bind(obj1);
// fnAdd(10 , 10);     

// var fnAdd = fnAdd.bind(obj2 , 67 , 58);
// fnAdd();

// fnAdd.bind(obj2 , 5 ,5)();

fnAdd.bind(obj1)(10 , 10);