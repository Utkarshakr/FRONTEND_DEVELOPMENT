function wish(message){
    switch(message){
        case "gm":{
            console.log("Good Morning");
            break;
        }

        case "ga":{
            console.log("Good Afternoon");
            break;
        }
        case "gn":{
            console.log("Good Night");
            break;
        }
        default:{
            console.log("No Wish Message");
        }
    }
}

wish("ga");
