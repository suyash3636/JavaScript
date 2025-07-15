let InstaUser= new Object()

InstaUser.id="Ashxplays"
InstaUser.Name="Ash"
InstaUser.age=18
InstaUser.mail="Ash@gmail.com"
InstaUser.isLoggedin = false
// console.log(InstaUser);



let facebookUser = new Object()

facebookUser.Name='phil'
facebookUser.username="Ph1lza"
facebookUser.address={Asia:{India:{Maharashtra:{PermanentCity:"Pune", TempCity:"Mumbai"}}}}

//Object nesting Example
// console.log(facebookUser.address.Asia.India.Maharashtra.PermanentCity);


// console.log(Object.keys(InstaUser));
// console.log(Object.values(InstaUser));
// console.log(Object.entries(InstaUser));


demoObject = {...InstaUser , ...facebookUser}
// console.log(InstaUser);
// console.log(facebookUser);

// console.log(demoObject);

console.log(InstaUser.hasOwnProperty("isLoggedin"));

