const name = "Tansihk"
const repoCount = 10

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Tanishk-tb-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5, 1)
console.log(anotherString);

const newStringOne = "      tanishk      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tanishk.com/tanishk%20bhawsar"

console.log(url.replace('%20', '-'))

console.log(url.includes('code'))

console.log(gameName.split('-'))