

function createPromise() {
//    var promise = new Promise();

//    return promise

    return new Promise(function(resolve , reject){
        resolve({
            status : true,
            data: [{name:"Rohan"},{name:"zoya"},{name: "Sahil"}],
        });
    });
}

async function catchPromise(){
   try {
    var responseData = await createPromise();
    console.log(responseData);
   }catch(errordata){
    console.log(errordata);
   }
}

catchPromise();

// var promiseObj = createPromise();