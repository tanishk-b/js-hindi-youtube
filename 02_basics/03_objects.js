//singleton
// Object.create

//object literals

const mySym = Symbol("Key1")


const JsUser = {
    name: "Tanishk",
    "full name": "Tanishk Bhawsar",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "tanishk@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "tanishk@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "tanishk@insta.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());