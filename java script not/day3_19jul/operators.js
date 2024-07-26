// let n1=5,n2=10
// let result = n1<5 && n2==10
// console.log(result)

// let n1=5,n2=10
// let result = n1<5 || n2==10
// console.log(result)


// let a = 20
// console.log(!a) // !(20)//!(true)=> false

// let b = 0
// console.log(!b) // !(0)//!(false)=> true

// let b = false
// console.log(!b) //!(false)=> true

// let b = "false"
// console.log(!b) //!(true)=> false
// console.log(!!b) //!!(true)=> !(false) => true

// let n1 = 10
// n1 = n1 + 5 // n1 = 15 (n1 +=5 )
// console.log(n1)
// n1 = n1-2 //(n1 -=2) => 13
// console.log(n1)
// n1 = n1*2 //(n1 *=2) =>26
// console.log(n1)
// n1 = n1/13 // (n1 /=13)=> 2
// console.log(n1)
// n1 =  n1 % 3 // (n1 %=3) => 2
// console.log(n1)
// n1 = n1 ** 3 // n1 **=3 => 8 
// console.log(n1)


// let x = 5 
// let y //undefined
// y = x++ // y=5 ,x=6
// console.log(`x=${x} and y=${y}`)


// let x = 5 
// let y //undefined
// y = ++x //x=6 ,y=6
// console.log(`x=${x} and y=${y}`)

// let x = 5 
// let y,z //undefined
// y = ++x // x=6 ,y=6
// z = x++ // z=6 , x=7
// console.log(`x=${x} and y=${y} and z=${z}`)

// let x = 5 
// let y,z //undefined
// y = ++x  //x=6, y=6
// z = --x  // x=5 ,z=5
// console.log(`x=${x} and y=${y} and z=${z}`)

let user="Happy"  //undefined or null
let login = user ?? "Guest"
console.log(`welcome ${login}`) 