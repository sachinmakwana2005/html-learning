function simpleifdemo(){
    let num = parseInt(document.querySelector("#num").value ) //parseInt("0") =>0
    // if(num>0){
    //     alert("ok")
    //     alert(`${num} is a positive number`)
    // }

    // if(num>0) 
    //     alert(`${num} is a positive number`)
    // alert("ok") //page connecting stmt

    // if(num) //if(10==true)//if(true==true)
    //     alert("ok")

    // if(10)alert("ok")
        // if(0)alert("ok")
    // if(0==0)alert("ok")
    
    // let str="happy"
    // if(num > 0 && str){
    //     alert("true")
    // }

    let a=21
    if(a++ <=10)  //21<=10(F) ,a=22
        alert(a) 

}


function ifelsedemo(){
    let num = parseInt(document.querySelector("#num").value) 
    let res=document.getElementById('res')
    // if(num%2==0) //14%2 == 0 ,17%2==1
    // {
    //     res.innerHTML=`${num} is even`
    // } 
    // else {
    //       res.innerHTML=`${num} is odd`
    // }
    if(num%2==0) 
        res.innerHTML=`${num} is even`
    else 
        res.innerHTML=`${num} is odd`
}

function elseifladderdemo(){
    let num = parseInt(document.querySelector("#num").value) 
    let res=document.getElementById('res')
    if(num == 0){
        res.innerHTML=`${num} is zero`
        res.style.color='orange'
        res.style.fontSize='20px'
        res.className = ""
    }
    else if(num > 0){
        res.innerHTML=`${num} is positive`
        res.style.color='green'
    }
    else if (num <  0){
        res.innerHTML=`${num} is negtive`
        res.style.color='red'
    }
    else {
        res.innerHTML=`Invalid number`
        res.className = "cls"
    }
}

function nestedifdemo(){
    let num = parseInt(document.querySelector("#num").value) 
    let res=document.getElementById('res')
    if(num>0){
        if(num >=50){
                if(num%5==0) res.innerHTML=`${num} is divisible by 5`
                else res.innerHTML=`${num} is not divisible by 5`
        }
        else res.innerHTML=''
    }
    else res.innerHTML=''
}