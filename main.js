/*********************************/
/* //1// */
var stringtoarray= words=> words.split(" ")
console.log(stringtoarray("Orange Jordan") )

/*********************************/
/* //2// */
var number = num => '*******'+ num.slice(7)
console.log(number('0776807777 '))

/*********************************/
/* //3// */
var email = email =>
  email.replace(
 email.split('@')[0], 
email.split('@')[0].slice(0, 6) + '…'
);console.log(email('orange_academy@orange.jo'))

/*********************************/
/* //4// */
var words= words => words
.split(" ")
.map(word=>word[0].toUpperCase()+word.slice(1))
.join(" ");
console.log(words('coding academy by orange'))

/*********************************/
/* //6// */
var number = num => num.split("").reverse().join("");
console.log(number('92485'));

/*********************************/
/* //7// */
var num = (a,b) =>{         
    [a, b] = [b, a]
    return {a,b};
};console.log(num(3,4))

var num1 =(a,b) =>{
  var number=a;
  a=b;
  b=number;
  return {a,b};
};console.log(num1(3,4))

var num2 = (a,b) =>{
  a=a+b;
  b=a-b;
  a=a-b;
  return {a,b};
};console.log(num2(3,4))

/*********************************/
/* //8// */
var x = (str,index) => str.slice(0,index)+str.slice(index+1)
console.log(x('Orange', 3))

/*********************************/
/* //9// */
var string =(str1,str2) => str1.slice(1)+str2.slice(1)
console.log(string('lora' , 'inge'))

/*********************************/
/* //10// */
var characterappears=(char,str)=>str[0]===char||str[str.length - 1] === char;
console.log(characterappears('o', 'orange'))
console.log(characterappears('z', 'orange'))

/*********************************/
/* //11// */
var word = words=>words.split(" ")
console.log(word('Coding Academy by Orange'))

/*********************************/
/* //12// */
var characters = string=>string.toLowerCase()
.split("")
.sort()
.join("")
console.log(characters('Orange'))