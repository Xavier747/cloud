document.getElementById('customerForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = parseInt(document.getElementById('age').value, 10); // Convertir a número entero

    const formData = {
        name: name,
        email: email,
        age: age
    };

    try {
        const response = await fetch('http://localhost:3000/api/customers', {
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
