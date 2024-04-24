var promiseObject = new Promise(function(resolve , reject){

    // resolve("Kabir");
    // resolve("sagar");
    // resolve({
    //     status : true,
    //     data: [{},{}],
    // });

    // reject({
    //     status : false,
    //     data : "Error Occured",
    // });

    reject("Error due to server crash");
});

// console.log(promiseObject);
promiseObject.then(function(successdata){
    console.log("Then",successdata);
}).catch(function(errordata){
    
    console.log("catch", errordata);
});