// ID del objeto que deseas actualizar
const objectId = 1;

// Nuevo valor que deseas asignar a una propiedad específica
const newValue = "Nuevo valor";

// URL del servidor JSON y el id del objeto que deseas actualizar
const url = `http://localhost:3000/data/${objectId}`;

// Datos que deseas enviar al servidor para la actualización parcial
const newData = {
  propertyName: newValue, // Cambia "propertyName" por el nombre de la propiedad que deseas actualizar
};

// Opciones para la solicitud Fetch (método, encabezados, cuerpo)
const options = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newData),
};

// Realiza la solicitud Fetch para actualizar los datos
fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Datos actualizados:', data);
  })
  .catch(error => {
    console.error('Hubo un problema al actualizar los datos:', error);
  });