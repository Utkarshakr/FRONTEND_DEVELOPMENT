
class User {
    username;
    gender; 
    email;
    city;

    constructor(username , gender , email){
        this.username = username;
        this.gender = gender;
        this.email = email;
        this.city = "pune";
    }

    display(){
        console.log(this.username , this.gender , this.email , this.city);
    }
}

var user1 = new User("Raj","male","Raj@gmail.com");
var user2 = new User("Sneha" , "female" , "sneha@gmail.com");
var user3 = new User("Rahul" , "male", "Rahul@gmail.com");

user1.display();
user2.display();
user3.display();