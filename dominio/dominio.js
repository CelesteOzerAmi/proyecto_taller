(() => {
    'use strict'

    // se toman los formularios desde el html
    const forms = document.querySelectorAll('.needs-validation');
    const datosEnvio = document.querySelector('.container_envio');

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
                let num = Math.floor((Math.random() + 1) * 900000)
                form.reset()
                event.preventDefault()
                event.stopPropagation()
                datosEnvio.innerHTML = ""
                datosEnvio.innerHTML = `<h1>Te Mando</h1><br><br><h3>Tu envío fue registrado correctamente!</h3> <br><h4>El número de rastreo es ${num}.</h4><br><button class="btn btn-outline-dark" onclick="location.reload()">Nuevo envío</button><br><br><br>`
                return
            }
        },)
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

            form.classList.add('was-validated');

            // si los campos completados en el formulario son correctos, se indica al usuario 
            // mediante un alert, que el envío fue realizado correctamente. 
            if (form.checkValidity()) {
                event.preventDefault()
                form.reset();
                let datos = document.querySelector('.container_contacto');
                datos.innerHTML = ""
                datos.innerHTML = '<h1>Te Mando</h1><br><br><h3>Recibimos tus datos!</h3> <br><div>Nos contactaremos contigo pronto.</div><br><button class="btn btn-outline-dark" onclick="location.reload()">Nueva solicitud</button><br><br><br>'
            }
        })
    },);


    //     formulario de rastreo     // 

    // se toma el elemento formulario desde el html
    const formRastreo = document.querySelectorAll('.rastreo_form');
    let detallesRastreo = document.getElementById('detallesRastreo');

    // se añade un event listener al seleccionar enviar en el formulario
    Array.from(formRastreo).forEach(form => {
        form.addEventListener('submit', event => {

            // si algún campo del formulario fue completado de manera inválida, se 
            // cancela el envío por defecto de los datos, y se indica al usuario
            // mediante un alert
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                alert("El número de rastreo debe contener 7 dígitos")
                detallesRastreo.innerHTML = ""
            };

            // si los campos completados en el formulario son correctos, se indica al usuario 
            // mediante un alert, que el envío fue realizado correctamente. 
            if (form.checkValidity()) {
                detallesRastreo.innerHTML = ""
                detallesRastreo.innerHTML = `<h3>Datos del envío</h3> <br> 
                <br><h4>Estado del envío: en camino</h4> `
                event.preventDefault()
                event.stopPropagation()     
            }
        }, false)
    });

})()

