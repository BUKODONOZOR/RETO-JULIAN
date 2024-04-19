

// Nuevo valor que deseas asignar a la clave específica
const newValue = 2;

// ID del objeto que deseas actualizar
const objectId = 1;
url = (`http://localhost:4000/tiendasuvenir/1`)

// Datos que deseas enviar al servidor para la actualización
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