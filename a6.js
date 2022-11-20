function identidad(){
    var a = parseFloat(document.getElementById("ai").value);
    var b = parseFloat(document.getElementById("bi").value);
    var x = Math.PI*(a+b)
    var y = 3 - (Math.sqrt(((3*a)+b)*(a+(3*b))))/(a+b)
    var p =(x*y)
    document.getElementById("identidad").innerHTML=parseFloat(Math.round(p*10000000)/10000000).toFixed(5)
}
