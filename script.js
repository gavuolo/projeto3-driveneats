let quantidade = 0;
let botao = document.querySelector(".finalizeIncomplete");
let finalizar = document.querySelector(".finalizeOrder");
let total = 0;

function onClick1(div){ 
   
    let elemento = document.querySelector(".select1");

    if (elemento !== null) {
        elemento.classList.remove("select1");
        quantidade -= 1;
    } else {
        div.classList.add("select1");
        quantidade += 1;
    }
    
    FinalizarPedido(quantidade);
}

function onClick2(div){ 
   
    let elemento = document.querySelector(".select2");

    if (elemento !== null) {
        elemento.classList.remove("select2");
        quantidade -= 1;
    } else {
        div.classList.add("select2");
        quantidade += 1;
    }

    FinalizarPedido(quantidade);
}

function onClick3(div){ 
   
    let elemento = document.querySelector(".select3");

    if (elemento !== null) {
        elemento.classList.remove("select3");
        quantidade -= 1;
    } else{
        div.classList.add("select3");
        quantidade += 1;
    }

    FinalizarPedido(quantidade);
}

function FinalizarPedido(quantidade){

    if (quantidade == 3) {
        botao.classList.add("hidden");
        finalizar.classList.remove("hidden");

        let valor1 = document.querySelector(".select1 .valor").innerHTML;
        let valor2 = document.querySelector(".select2 .valor").innerHTML;
        let valor3 = document.querySelector(".select3 .valor").innerHTML;

        let convertedValue1 = Number(valor1.replace(",","."));
        let convertedValue2 = Number(valor2.replace(",",".")); 
        let convertedValue3 = Number(valor3.replace(",","."));

        total = convertedValue1 + convertedValue2 + convertedValue3;
        total = total.toFixed(2);

    } else {
       botao.classList.remove("hidden");
       finalizar.classList.add("hidden");
    }
    
}

function whatsapp(){

    let whatsappMsg = encodeURIComponent(`
    Olá, gostaria de fazer o pedido:\n
    - Prato: Frango Yin Yang\n
    - Bebida: Coquinha Gelada\n
    - Sobremesa: Pudim\n
    Total: R$ ${total}
    `);

    location.href=(`https://wa.me/?text=` + whatsappMsg);

}