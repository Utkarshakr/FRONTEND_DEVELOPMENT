var obj1 = {
    c : 100,
};

var obj2 = {
    c: 500,
};

function fnAdd(x , y){
    console.log(x+y + this.c);
}

fnAdd.call(obj1 , 2 , 6);   // Obj1
fnAdd.call(obj2 , 10 , 10);  //obj2

fnAdd.apply(obj1 , [20 , 49]);