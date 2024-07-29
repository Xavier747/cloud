document.getElementById('animalForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const nombre = document.getElementById('nombre').value;
    const especie = document.getElementById('especie').value;
    const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
    const habitat = document.getElementById('habitat').value;
    const color = document.getElementById('color').value;

    const formData = {
        nombre: nombre,
        especie: especie,
        fecha_nacimiento: fecha_nacimiento,
        habitat: habitat,
        color: color
    };

    try {
        const response = await fetch('http://localhost:3000/api/animals', {
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
