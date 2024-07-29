document.getElementById('habitatForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const nombre = document.getElementById('nombre').value;
    const tipo = document.getElementById('tipo').value;
    const clima = document.getElementById('clima').value;
    const tamaño = parseFloat(document.getElementById('tamaño').value);
    const ubicacion = document.getElementById('ubicacion').value;
    const vegetacion = document.getElementById('vegetacion').value;

    const formData = {
        nombre: nombre,
        tipo: tipo,
        clima: clima,
        tamaño: tamaño,
        ubicacion: ubicacion,
        vegetacion: vegetacion
    };

    try {
        const response = await fetch('http://localhost:3000/api/habitats', {
            method: 'POST', // Método POST para enviar datos
            headers: {
                'Content-Type': 'application/json' // El cuerpo de la solicitud está en formato JSON
            },
            body: JSON.stringify(formData) // Convierte el objeto JavaScript a una cadena JSON
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Success:', result);
        // Puedes mostrar un mensaje de éxito al usuario aquí

    } catch (error) {
        console.error('Error:', error);
        // Puedes mostrar un mensaje de error al usuario aquí
    }
});
