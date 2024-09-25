document.getElementById('calcularBtn').addEventListener('click', function() {
    let subtotal = 0;
    let iva = 0;
    let total = 0;
    let ivaPercentage = 0.21;

    document.querySelectorAll('.producto').forEach(function(producto) {
        let cantidad = producto.querySelector('.cantidad').value;
        let precioUnitario = producto.querySelector('.precio-unitario').value;
        let precio = cantidad * precioUnitario;
        subtotal += precio;
    });

    iva = subtotal * ivaPercentage;
    total = subtotal + iva;

    // Mostrar los valores calculados
    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('iva').innerText = iva.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);

    // Calcular cuotas
    let cuota12 = total / 12;
    let cuota18 = total * 1.75 / 18;

    document.getElementById('cuota12').innerText = cuota12.toFixed(2);
    document.getElementById('cuota18').innerText = cuota18.toFixed(2);
});

// Función para imprimir
document.getElementById('imprimirBtn').addEventListener('click', function() {
    window.print();
});
