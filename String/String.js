
// 1) for reverse the string 
const name = "gsds"
let reversename = name.split("").reverse().join('')
console.log(reversename)


// 2) for create the new string
// const name = new string("ritik") 
console.log(name.ritik)
// SyntaxError: Identifier 'name' has already been declared


// 3) upper case
console.log(name.toUpperCase())

// 4) Lower case
console.log(name.toLowerCase())

// 5) for find the length
console.log(name.length)

// 6) for find the char
console.log(name.charAt(3))

//7) String charCodeAt()- to find for the char code 
console.log(name.charCodeAt(0))  

// 8) String At() - for find the char on the index
console.log(name.At(4))

// 9) String slice()- it also have the negative index
let newname="ritikrajkumar"
console.log(newname.slice(2,4))
console.log(newname.slice(-2,4))

// 10) String substring() - it does not have the negative index
console.log(newname.substring(2,4)) 

// 11) String substr() 
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6); 
// output : Banana ---- starting index is 7 and then it count the 6 form the index 7

// 12) String concat()
let str1 = "Apple, Banana, Kiwi";
let str2 = " , Mango";
let str3 = str1.concat(str2)
console.log(str3) 
// output : Apple, Banana, Kiwi , Mango

// 13) String trim()
let trimname = "   hiii   koooo  "
console.log(trimname.trim()) 

// 14) String trimStart()
let trimname1 = "   hiii   koooo  p"
console.log(trimname1.trimStart()) 
// output :hiii   koooo  p  

// 15) String trimEnd()
let trimname2 = "   hiii   koooo  "
console.log(trimname1.trimEnd()) 
// output :   hiii   koooo


// 16) String padStart()
let text = "5";
text = text.padStart(4,"0");
console.log(text) 
// output:0005

// 17) String padEnd()
let padded = text.padEnd(4,"0");
console.log(padded) 
// output: 5000


// 18) String repeat()
console.log(newname.repeat(3)) 


// 19) String replace() 
// notes: The replace() method does not change the string it is called on.
     //   The replace() method returns a new string.
     //   The replace() method replaces only the first match
console.log(newname.replace("ritik" , 'monu')) 
// output:monurajkumar


// 20) String replaceAll()
let text2 = "I love cats. Cats are very easy to love.Cats are very popular."

let text3 = text2.replaceAll("cats","dogs");
console.log(text3)
// output:I love dogs. Cats are very easy to love.Cats are very popular.



// 21) String split()

// A string can be converted to an array with the split() method:
//          text.split(",")    // Split on commas
//          text.split(" ")    // Split on spaces
//          text.split("|")    // Split on pipe



