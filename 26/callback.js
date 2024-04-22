
function add( x , y){
    console.log(x+y);
}

function print(){
    console.log("huer897u");
}
function fn(f){
    console.log(f);
}

fn(function(){
    var city= "delhi";
    console.log(city);
})

function fn(f){
    console.log(f);
    f();
    f();
};
fn(add);