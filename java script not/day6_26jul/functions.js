// function fun(){
//     console.log("no argument and no return value")
// }
// fun()

// function fun1(str){//str=undefined (formal)
//     console.log(`argument but no return value - ${str}`)
// }
// fun1("Harshita") ///actual paramter 
// fun1()

// function fun1(str="Demo"){//str=Demo (default parameter)
//     console.log(`argument but no return value - ${str}`)
// }
// fun1("Harshita")
// fun1()


// function fun2(){
//     return ("no argument but no return value")
// }
// let res = fun2()
// console.log(res)
// console.log(fun2())


function fun3(str){
    return (`argument and return value- ${str}`)
}
let res = fun3("Happy")
console.log(res)
console.log(fun3())