// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos[];

function capturarValor(){
    var valor=document.querySelector(".micampo").value;
    
    if(valor.trim()===""){
        alert("Inserte un nombre, por favor.");
    }else{
        amigos.push(valor.trim());
        
        console.log("Nombre Ingresado:" * + valor);

        console.log("Lista de amigos:",amigos);
        
        //Limpiar el campo de entrada
        document.querySelector(".micampo".value="");
    }
}