  // function(){} - function without name (anonymous function )
  document.getElementById('btn').onclick=function(){
    let n =parseInt(document.getElementById('num').value) // 456 
    let res = document.getElementById('result')
    let rev = 0,rem,temp
    temp=n //456
    while(n>0){//456,45,4 , 0>0(F)
        rem = n % 10  // 6 ,5 ,4
        rev= (rev*10)+rem //0+6 = 6 ,60+5=65 ,650+4=654
        n = parseInt(n/10) //456/10 =45 ,45/10=4 ,4/10=0
    }
    res.value=rev
    if(temp==rev){
      alert("no is palindrome")
    }
    else {alert("no is not palindrome")}
}