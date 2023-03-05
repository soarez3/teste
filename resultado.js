function verificar(){
    var n1 = document.getElementById("num")
    var n2 = document.getElementById("num1")
    var n3 = document.getElementById("num2")
    var res = document.getElementById("res")
  
    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0  ){
        alert("faltando")
    } else {
       // res.innerHTML = "Contando"
        var n = Number(n1.value)
        var nu = Number(n2.value)
        var num = Number(n3.value)
     
        
        if ( n < nu){
            for (var contador = n ; contador <= nu ; contador += num){
                res.innerHTML +=  contador + " ... "
            }
        } else {
            for (var contador = n ; contador >= nu ; contador += num){
                res.innerHTML +=  contador + " ... "
            }
        }
    }
    

   


    
  }