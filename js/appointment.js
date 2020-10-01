loadEventListeners();

function loadEventListeners() {
    const checkoutButton = document.querySelector('#checkoutButton');
    checkoutButton.disabled = false;
    let formData = [];

    document.querySelector('#weight').addEventListener('change', () => {
        const weight = document.querySelector('#weight').value;
        const hairCut = document.querySelector('#hairCut');
        const bath = document.querySelector('#bath');
        const deShed = document.querySelector('#deShed');

        if (weight !== '') {
            hairCut.removeAttribute("disabled");
            bath.removeAttribute("disabled");
            deShed.removeAttribute("disabled");
        } else {
            hairCut.setAttribute("disabled", '');
            bath.setAttribute("disabled", '');
            deShed.setAttribute("disabled", '');
        }
    });

    document.querySelector('#weight2').addEventListener('change', () => {
        const weight2 = document.querySelector('#weight2').value;
        const nailTrim = document.querySelector('#nailTrim');
        const nailGrind = document.querySelector('#nailGrind');
        const combo = document.querySelector('#combo');

        if (weight2 !== '') {
            nailTrim.removeAttribute("disabled");
            nailGrind.removeAttribute("disabled");
            combo.removeAttribute("disabled");
        } else {
            nailTrim.setAttribute("disabled", '');
            nailGrind.setAttribute("disabled", '');
            combo.setAttribute("disabled", '');
        }
    });

    document.querySelector('#dental').addEventListener('change', (e) => {
        if (e.target.checked) {
            formData.push({
                "name": "Cepillado de dientes",
                "cost": '8 + tax'
            });
        }
    });

    document.querySelector('#facial').addEventListener('change', (e) => {
        if (e.target.checked) {
            formData.push({
                "name": "Facial",
                "cost": '8 + tax'
            });
        }
    });

    document.querySelector('#paintNails').addEventListener('change', (e) => {
        if (e.target.checked) {
            formData.push({
                "name": "Pintar uñas",
                "cost": '10 + tax'
            });
        }
    });

    document.querySelector('#trimArea').addEventListener('change', (e) => {
        if (e.target.checked) {
            formData.push({
                "name": "Rasurar 1 zona",
                "cost": '5 + tax'
            });
        }
    });

    document.querySelector('#fullHeadTrim').addEventListener('change', (e) => {
        if (e.target.checked) {
            formData.push({
                "name": "Recorte de cabeza",
                "cost": '10 + tax'
            });
        }
    });

    document.querySelector('#poodleFeet').addEventListener('change', (e) => {
        if (e.target.checked) {
            formData.push({
                "name": "Rasurado de pata",
                "cost": '20 + tax'
            });
        }
    });

    document.querySelector('#express').addEventListener('change', (e) => {
        if (e.target.checked) {
            formData.push({
                "name": "Express",
                "cost": '35 + tax'
            });
        }
    });

    document.querySelector('#ticksInfestation').addEventListener('change', (e) => {
        if (e.target.checked) {
            formData.push({
                "name": "Infestación de garrapatas",
                "cost": '1 x minute'
            });
        }
    });

    document.querySelector('#earsCleaned').addEventListener('change', (e) => {
        if (e.target.checked) {
            formData.push({
                "name": "Limpieza de orejas",
                "cost": '35 + tax'
            });
        }
    });

    document.querySelector('#sanitary').addEventListener('change', (e) => {
        if (e.target.checked) {
            formData.push({
                "name": "Corte sanitario",
                "cost": '$10 less than haircut'
            });
        }
    });

    document.querySelector('form').addEventListener('submit', function (e) {
        let data = {};
        checkoutButton.disabled = true;

        data["name"] = document.querySelector('#name').value;
        data["phone"] = document.querySelector('#phone').value;
        data["email"] = document.querySelector('#email').value !== '' ? document.querySelector('#email').value : '';
        data["services"] = formData;

        // if (formData.length > 0) {
        //     checkoutButton.disabled = true;
        //     // Create an instance of the Stripe object with the publishable API key
        //     let host = `http://${window.location.hostname}:3000`;
        //     let key = 'pk_test_51HOsn3GD6aQ2YRETSrkC22e2VavAtvA56qcFJOMuDvDWpDa2ENUC3JmPL05yxDizCSQl6z1spTJIZP6T5oll56kJ00WQhWFlJx';

        //     if (window.location.hostname !== '127.0.0.1') {
        //         host = `https://ariah-server.herokuapp.com`;
        //         key = 'pk_live_51HOsn3GD6aQ2YRETGnCEU127RtuFXbrnv1ZM6lNgsSznNv1chou2uPpG09M0kdDSTXSLHZIvTVbLdSLlWs0pBn3o00HGc0v5GB';
        //     }

        //     const storage = localStorage;
        //     let appointment = [];
        //     console.log(data);
        //     appointment.push(data);
        //     storage.setItem("appointment", JSON.stringify(appointment[0]));

        //     const stripe = Stripe(key);
        //     // Create a new Checkout Session
        //     fetch(`${host}/appointments/create-checkout-session`, {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             data: formData.length,
        //         }),
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8'
        //         }
        //     })
        //         .then(function (response) {
        //             return response.json();
        //         })
        //         .then(function (session) {
        //             return stripe.redirectToCheckout({ sessionId: session.id });
        //         })
        //         .then(function (result) {
        //             // If `redirectToCheckout` fails due to a browser or network
        //             // error, display the localized error message to the
        //             // customer using `error.message`.
        //             if (result.error) {
        //                 alert(result.error.message);
        //             }
        //         })
        //         .catch(function (error) {
        //             console.error('Error:', error);
        //         });
        // } else {
        //     alert('Por favor, selecciona la cita que deseas agendar.');
        //     checkoutButton.disabled = false;
        // }

        e.preventDefault();
    });
};

function invalidDate() {
    alert('La fecha de tu cita no puede ser en días anteriores.');
}