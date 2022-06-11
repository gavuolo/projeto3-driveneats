let quantidade = 0;

function onClick1(span){ 
   
    let elemento = document.querySelector(".select1");

    if (elemento !== null) {
        elemento.classList.remove("select1");
        quantidade -= 1;
    } else {
    span.classList.add("select1");
     quantidade += 1;
    }
    
    oi(quantidade);
}

function onClick2(span){ 
   
    let elemento = document.querySelector(".select2");

    if (elemento !== null) {
        elemento.classList.remove("select2");
        quantidade -= 1;
    } else {
    span.classList.add("select2");
     quantidade += 1;
    }

    oi(quantidade);
}

function onClick3(span){ 
   
    let elemento = document.querySelector(".select3");

    if (elemento !== null) {
        elemento.classList.remove("select3");
        quantidade -= 1;
    } else{
    span.classList.add("select3");
    quantidade += 1;
    }

    oi(quantidade);
}


let botao = document.querySelector(".finalize-order")

function oi(quantidade){
    
    console.log(quantidade);

    if (quantidade == 3) {
        botao.innerHTML = "Fechar pedido";
    } else {
       botao.innerHTML = "Selecione os 3 itens para fechar o pedido"
    }
}