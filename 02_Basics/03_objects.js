let mysymbol; 
// need to declare variable before making it symbol

const JsUsers = {

    Name1 :"Suyash",
    Class:"4th",
    location:"Pune",
    Mail:"Ashwashere@gmail.com",
    "veg - nonveg" :"Veg",
    [mysymbol]:"1234"
}

const arr = ['Ash','4th','Pune','Ashwashere@gmail.com']

// console.log(arr[0]);
// console.log(JsUsers.Name1)
// console.log(JsUsers["Name1"])
// console.log(JsUsers["veg - nonveg"])
console.log(JsUsers);
// console.log(JsUsers[mysymbol]);
// console.log(typeof JsUsers[mysymbol]);
JsUsers.Name1="Ash"
// console.log(JsUsers.Name1)
// Object.freeze(JsUsers)
// JsUsers.Name1="Ashx"
// console.log(JsUsers.Name1)
// will not change Name1 as object is froozen , 
console.log(JsUsers);
JsUsers.greeting= function(){
    console.log("hello user \n Welcome");
    
}
JsUsers.greetingTwo= function(){
    console.log(`Hello User \n ${this.Name1} says welcome`);
    
}
// console.log(JsUsers);
console.log(JsUsers.greeting());
console.log(JsUsers.greetingTwo());
