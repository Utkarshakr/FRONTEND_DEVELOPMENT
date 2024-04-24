var homeName = "RajFamily";

function display(){
    console.log(homeName);
    console.log("It is a beautiful Home");
}

function f1(){
    console.log("f1 is called");
}

module.exports = {  //exporting module
    homeName,
    display,
    f1
}