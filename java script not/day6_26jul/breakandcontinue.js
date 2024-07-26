// let i=1
// while(i<=10){ //1<=10(T),2,3,4,5
//     if(i==5){//1==5(F) 5==5(T)
//         break
//     }     
//     console.log(i)//1,2,3,4
//     i++//2,3,4,5
// }


// let i=1
// while(i<=10){ //1<=10(T),2,3,4,5,5,5
//     if(i==5){//1==5(F) 5==5(T),5==5,5==5
//         continue
//     }     
//     console.log(i)//1,2,3,4
//     i++//2,3,4,5
// }

let i=1
for(let i=1;i<=10;i++){ //1,2,3,4,5,6
    if(i==5) continue
    console.log(i)//1,2,3,4,6
}