console.log("JS 2 externo ok|");

function calculaMedia(){
    let valores = document.getElementById("valores").value;
    console.log(valores);
    let array_numeros = valores.split("/");
    console.log(array_numeros.length);
    for (let i = 0; i < array_numeros.length;i++){
        soma = soma + Number(array_numeros[i]);

    }
console.log(soma);
media = soma/qtdeNua;
console.log(media);
let p = document.getElementById("media");
p.innerText("A média é : " + media);
}