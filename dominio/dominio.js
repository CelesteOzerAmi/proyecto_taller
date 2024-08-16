(() => {
    'use strict'

    // se toman los formularios desde el html
    const forms = document.querySelectorAll('.needs-validation');

    //     formulario de envíos     // 

    // se añade un event listener al seleccionar enviar en el formulario
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {

            // si algún campo del formulario fue completado de manera inválida, se 
            // cancela el envío por defecto de los datos, y se indica al usuario
            // mediante un alert
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                alert("Complete los campos correctamente")
            }
            form.classList.add('was-validated');

            // si los campos completados en el formulario son correctos, se indica al usuario 
            // mediante un alert, que el envío fue realizado correctamente. 
            if (form.checkValidity()) {
                let num = Math.floor((Math.random() + 1) * 9000000)
                alert("Envío realizado con éxito! " + "Número de rastreo: " + num)
                form.reset();
            }
        }, false)
    });


    //     formulario de contacto     // 

    // se toma el elemento formulario desde el html
    const formContacto = document.querySelectorAll('.form-contacto');

    // se añade un event listener al seleccionar enviar en el formulario
    Array.from(formContacto).forEach(form => {
        form.addEventListener('submit', event => {

            // si algún campo del formulario fue completado de manera inválida, se 
            // cancela el envío por defecto de los datos, y se indica al usuario
            // mediante un alert
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                alert("Complete los campos correctamente")
            };

            // si los campos completados en el formulario son correctos, se indica al usuario 
            // mediante un alert, que el envío fue realizado correctamente. 
            if (form.checkValidity()) {
                event.preventDefault()
                form.reset();
                let datos = document.getElementById('datosContacto');
                datos.innerHTML = ""
                datos.innerHTML = '<h3>Recibimos tus datos!</h3> <br><div>Nos contactaremos contigo pronto.</div>'
            }
        })
    },);


    //     formulario de rastreo     // 

    // se toma el elemento formulario desde el html
    const formRastreo = document.querySelectorAll('.rastreo_form');
    let numeroRastreo = document.getElementById('numeroRastreo').value;

    // se añade un event listener al seleccionar enviar en el formulario
    Array.from(formRastreo).forEach(form => {
        form.addEventListener('submit', event => {

            console.log(numeroRastreo);
            

            // si algún campo del formulario fue completado de manera inválida, se 
            // cancela el envío por defecto de los datos, y se indica al usuario
            // mediante un alert
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                alert("El número de rastreo debe contener 7 dígitos")
            };

            // si los campos completados en el formulario son correctos, se indica al usuario 
            // mediante un alert, que el envío fue realizado correctamente. 
            if (form.checkValidity()) {
                event.preventDefault()
                form.reset();
                let div = document.getElementById('detallesRastreo')
                div.innerHTML = ""
                let elm = document.createElement('div')
                elm.innerHTML = `<h3>Datos del envío</h3> <br> <div>Número de rastreo: ${numeroRastreo}</div>
                <br><div>Estado del envío: en camino</div> `
                div.appendChild(elm)
                console.log(numeroRastreo);
            }
        }, false)
    });

})()

