function printhello(){
    document.write("hello from button")
}

document.write(`Hello ${greet}`) //undefined
var greet = "Good morning"  //global variable (we can access in whole script)

function addNum(){
        //var a,b // hoist
    var a=5,b=10 //local variable (we can access only in addNum function)
    alert(`hello ${greet} and ${a+b}`)
}

