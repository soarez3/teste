function gerar(){
    var n1 = document.getElementById("num")
    var res = document.getElementById("res")

    res.innerHTML = " "
    if (n1.value.length == 0){
        alert ("Digite um valor")

    } else {
        numero = Number(n1.value)

        for(var tabu = 0 ; tabu <= 10 ; tabu ++ ){
           var calc = (numero * tabu)
            res.innerHTML +=    numero + " x " + tabu + " = " + calc + "<br>"
        }
    }
}