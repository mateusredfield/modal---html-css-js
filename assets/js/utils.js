// var displayModal = 0;

// function alternaAba(pagina){
//     var elementosHome = document.getElementsByClassName("hideResultadoHome");
//     var elementosBusca = document.getElementsByClassName("hideResultadoBusca");
    
//     var elemento = document.getElementById("abaBuscaFiltragem");
//     if( elemento != null){ 
//         elemento.remove();
//     }

//     if(pagina == 'abaHome'){
//         Array.prototype.forEach.call(elementosHome, function(elemento) {
//             elemento.style.display = "block";
//         })
//         Array.prototype.forEach.call(elementosBusca, function(elemento) {
//             elemento.style.display = "none";
//         })
//     }

//     if(pagina == 'abaBusca'){
//         Array.prototype.forEach.call(elementosHome, function(elemento) {
//             elemento.style.display = "none";
//         })
//         Array.prototype.forEach.call(elementosBusca, function(elemento) {
//             elemento.style.display = "block";
//         })
//     }
// }

document.addEventListener( "DOMContentLoaded", function(){
    // input.addEventListener("keydown", function (e) {
    //     if (e.key === "Enter") {  
    //         buscaTextoLeitorPDF();
    //     }
    // });    
    document.body.addEventListener("mousedown", eventoMouseDown, true); 
})

function eventoMouseDown(e){
    var elemento = document.getElementById("containerModal");
    var path = e.composedPath().indexOf(elemento);
    console.log(path);
    if(path >= 0){
        console.log("path correto");
    }
    if(path < 0){
        console.log("path menor que zero, clicou fora");
        recolheModal('containerModal');
    }
    // if( e.target.id != "modalBase"){
    // }
    // console.log(e);
    //debugger;
}

function toogleModal(idElemento){
    if(displayModal == 0) {mostraModal("containerModal"); return;}
    if(displayModal == 1) {recolheModal("containerModal"); return;}
}

function mostraModal(idElemento){

    if(displayModal == 1) 
        return;
    var elemento = document.getElementById(idElemento);
    elemento.style.display = "flex";
    elemento.style.opacity = "1";
    displayModal = 1;
    return;
}

function recolheModal(idElemento){
    if(displayModal == 0) 
        return;
    var elemento = document.getElementById(idElemento);
    elemento.style.opacity = "0";
    displayModal = 0;
    return;
}