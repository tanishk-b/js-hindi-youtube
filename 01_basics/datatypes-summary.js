// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol,BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 54641989711321644n



// Referenve (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "tanishk",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// ecma link



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitative), Heap (Non-Primitative)

let myYoutubename = "hiteshchodharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);