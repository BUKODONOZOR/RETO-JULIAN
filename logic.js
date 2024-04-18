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
    },

    item2 = {
        Nombre: "Matrioscas",
        precio: "150000",
        Disponible: 4
    }
]



const getSuvenir = () =>{
    let NombreSuvenir = document.getElementById("NombreSuvenir").value;
    let cantidad = document.getElementById("ValorSuvenir").value;
    

   

    
    const ValorClaveN ='Nombre';
    const  ValoresdeClaveN  = Tiendadesuveniles.map(item => item[ValorClaveN]);
    

    if(ValoresdeClaveN.includes(NombreSuvenir)){
        
        
        
        Tiendadesuveniles.forEach(element => {
           
            if(element.Nombre == NombreSuvenir){
                if(element.Disponible >0){
                    console.log("Hay producto")
                    element.Disponible = element.Disponible - cantidad;
                
                    let suvenir = {
                        Nombre : NombreSuvenir,
                        ValorSuvenir : element.precio, 
                        cantidad: 1,
                        Disponible: selected ,
                    }
    
        
                    diccionario_Suvenires.push(suvenir);
                    console.log(diccionario_Suvenires);


                    const ul = document.getElementById('Lista');
                    const nuevoElementoLI = document.createElement('li');
                    const contenido = document.createTextNode(suvenir.Nombre);
                    nuevoElementoLI.appendChild(contenido);
                    ul.appendChild(nuevoElementoLI)
            
            
                
                }
                else{
                    document.getElementById("Alert2").innerHTML = "NO HAY PRODUCTOgi";
                }

            }
            
        });
        console.log(Tiendadesuveniles);
        

    
 
    
        
      

    }
    else{
        document.getElementById("Alert2").innerHTML = "NO EXISTE EN LA TIENDA DE SUVENIRES";

    }

  
    


}




