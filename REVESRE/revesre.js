document.getElementById('btn').onclick=function () {
    let n =parseInt(document.getElementById('num').value)  
    let res = document.getElementById('result')
    let rev = 0,rem,temp
    temp=n 
    while(n>0){
      rem = n % 10
      rev= (rev*10)+rem
      n = parseInt(n/10)
    }
    if(temp==rev){
      alert("no is palindronme")
    }
    else {alert("no is not palindronme")}
  }