const prosupuestoDias = 100000;
const prosupuestoSuvenires = prosupuestoDias * 2;
const GetPlanViaje = () =>{
    
    const  Destino = document.getElementById("LugarDestino").value; 
    let dias = document.getElementById("numeroDias").value; 
    let prosupuestoAct = document.getElementById("prosupuestoActividades").value; 
    let prosupuestoSuv = document.getElementById("prosupuestoSuvenires").value;
    
    console.log(Destino, dias, prosupuestoAct); 
    
    if((prosupuestoDias*dias) > prosupuestoAct ) {
        document.getElementById("Alert").innerHTML = "No te alcanza la plata";
    }

    console.log(Destino);
    Destino = 4;

}

let diccionario_Suvenires = [];
let selected = true;

let Tiendadesuveniles = [

    item1 = {
        Nombre: "Chocolates",
        precio: "15000",
        Disponible : 2
    }
]


const getSuvenir = () =>{
    let NombreSuvenir = document.getElementById("NombreSuvenir").value;
    let ValorSuvenir = document.getElementById("ValorSuvenir").value;
  

    
    

    Stock.addEventListener("click", function clicks() {
        if(Stock.checked){
            selected = true;
            console.log("HOLA");
             
        }else{
            selected = false;
            console.log("NO HOLA");

        }
    
       
    });
    

    let suvenir = {
        Nombre : NombreSuvenir,
        ValorSuvenir : ValorSuvenir, 
        Disponible: selected ,
    }


    
    diccionario_Suvenires.push(suvenir);

    
  
    claveaSumar = 'ValorSuvenir';
    const valoresDeClave = diccionario_Suvenires.map(suvenir => suvenir[claveaSumar]);

    const totalcomprado = valoresDeClave.reduce((acumulador, valor) => acumulador + Number(valor) ,0);
    console.log(diccionario_Suvenires);
    console.log(totalcomprado);
    
    const ul = document.getElementById('Lista');

    // Crear un nuevo elemento LI
    const nuevoElementoLI = document.createElement('li');
    
    // Crear un nodo de texto para el contenido del LI
    const contenido = document.createTextNode(suvenir.Nombre);
    
    // Agregar el nodo de texto al elemento LI
    nuevoElementoLI.appendChild(contenido);
    
    // Agregar el nuevo elemento LI al ULeeeeee
    ul.appendChild(nuevoElementoLI)
    
    if (totalcomprado > prosupuestoSuvenires){
        document.getElementById("Alert2").innerHTML = "No te alcanza la plata";
    }    


}




