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
let  basededatos= [];
const objectId = 2;
url = `http://localhost:4000/tiendasuvenir/${objectId}`
axios.get('http://localhost:4000/tiendasuvenir')
.then(response => {
    basededatos = response.data;
    console.log(basededatos);
 })
.catch(error => {
    // Manejo de errores
    console.error('Error:', error);
});
const getSuvenir = () =>{
   
   

    let NombreSuvenir = document.getElementById("NombreSuvenir").value;
    let cantidad = document.getElementById("ValorSuvenir").value;
    
   
   

    
    const ValorClaveN ='Nombre';
    const  ValoresdeClaveN  = basededatos.map(item => item[ValorClaveN]);
    console.log(ValoresdeClaveN);
    console.log(NombreSuvenir);

    if(ValoresdeClaveN.includes(NombreSuvenir)){
        
        basededatos.forEach(element => {
           
            if(element.Nombre == NombreSuvenir){
                if(element.Disponible >0){
                    console.log("Hay producto")
                    
                
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
                    ul.appendChild(nuevoElementoLI);
                    console.log(basededatos);
                    const newValue = element.Disponible = element.Disponible - cantidad;

                    const newData = {
                        Disponible: newValue, // Reemplaza "clave" con el nombre de la clave que deseas actualizar
                        // Puedes agregar más claves aquí si necesitas actualizar varias claves a la vez
                      };
                      
                      // Realiza la solicitud Axios para actualizar los datos
                      axios.patch(url, newData)
                        .then(response => {
                          console.log('Datos actualizados:', response.data);
                        })
                        .catch(error => {
                          console.error('Hubo un problema al actualizar los datos:', error);
                        });
                    
                    
                
                
                }
                else{
                    document.getElementById("Alert2").innerHTML = "NO HAY PRODUCTO";
                }

            }
            
        });
        
        

    
 
    
        
      

    }
    else{
        document.getElementById("Alert2").innerHTML = "NO EXISTE EN LA TIENDA DE SUVENIRES";

    }

  
    


}




