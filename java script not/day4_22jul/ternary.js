let n1=5,n2=3
// n1>n2 ? console.log(`${n1} is greater`) : console.log(`${n2} is greater`)
//5>3 (T)


// let result = n1>n2 ? n1 : n2 //result = 5
// console.log(`${result} is greater`)



//nested ternary operator
let a=14,b=15,c=12
let result = a>b ? (a>c ? a : c) :(b>c ? b: c)
console.log(`${result} is greater`)

//a>b (T) 14>5
    //a>c => 14>19 =>  a otherwise  c
//a>b (F)  //b>c => b otherwise c 