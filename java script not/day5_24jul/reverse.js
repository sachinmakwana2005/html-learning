  // function(){} - function without name (anonymous function )
  document.getElementById('btn').onclick=function(){
    let n =parseInt(document.getElementById('num').value) // 456 
    let res = document.getElementById('result')
    let rev = 0,rem,temp
    temp=n //456
    while(n>0){//456 ,45,4,0
        rem = n % 10  // 0,5
        rev= (rev*10)+rem //0+5
        n = parseInt(n/10) //45
    }
}