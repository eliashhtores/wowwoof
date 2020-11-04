loadEventListeners();

const picker = document.querySelector('#date').addEventListener('input', function (e) {
    let today = new Date();
    const currentDay = String(today.getDate()).padStart(2, '0');
    const day = new Date(this.value).getUTCDay();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    today = year + '-' + month + '-' + currentDay;

    e.preventDefault();
    if ([0].includes(day)) {
        this.value = '';
        message = 'Appointments not allowed on Sunday.';
        displayModal(message);
    } else if (e.target.value < today) {
        this.value = '';
        message = 'Your appointment cannot be scheduled on a previous day.';
        displayModal(message);
    }
});

const services =
    [
        {
            "description": "10 pounds and under",
            "hairCut": "$45 + tax",
            "bath": "$20 + tax",
            "deShed": "$35 + tax"
        },
        {
            "description": "11 to 20 pounds",
            "hairCut": "$55 + tax",
            "bath": "$25 + tax",
            "deShed": "$45 + tax"
        },
        {
            "description": "21 to 30 pounds",
            "hairCut": "$65 + tax",
            "bath": "$30 + tax",
            "deShed": "$55 + tax"
        },
        {
            "description": "31 to 40 pounds",
            "hairCut": "$40 + weight + tax",
            "bath": "$35 + tax",
            "deShed": "$65 + tax"
        },
        {
            "description": "41 to 50 pounds",
            "hairCut": "$40 + weight + tax",
            "bath": "$40 + tax",
            "deShed": "$75 + tax"
        },
        {
            "description": "51 to 60 pounds",
            "hairCut": "$40 + weight + tax",
            "bath": "$45 + tax",
            "deShed": "$85 + tax"
        },
        {
            "description": "61 to 70 pounds",
            "hairCut": "$40 + weight + tax",
            "bath": "$50 + tax",
            "deShed": "$95 + tax"
        },
        {
            "description": "71 to 80 pounds",
            "hairCut": "$40 + weight + tax",
            "bath": "$55 + tax",
            "deShed": "$105 + tax"
        },
        {
            "description": "81 to 90 pounds",
            "hairCut": "$40 + weight + tax",
            "bath": "$60 + tax",
            "deShed": "$115 + tax"
        },
        {
            "description": "91 to 100 pounds",
            "hairCut": "$40 + weight + tax",
            "bath": "$65 + tax",
            "deShed": "$125 + tax"
        },
        {
            "description": "101 to 110 pounds",
            "hairCut": "$40 + weight + tax",
            "bath": "$70 + tax",
            "deShed": "$135 + tax"
        },
        {
            "description": "111 to 120 pounds",
            "hairCut": "$40 + weight + tax",
            "bath": "$75 + tax",
            "deShed": "$145 + tax"
        },
        {
            "description": "121 to 130 pounds",
            "hairCut": "$40 + weight + tax",
            "bath": "$80 + tax",
            "deShed": "$155 + tax"
        }
    ];

const translate = {
    "hairCut": "Haircut",
    "bath": "Bath",
    "deShed": "DeShed",
    "nailTrim": "Nail trim",
    "nailGrind": "Nail grind",
    "combo": "Combo",
    "dental": "Dental",
    "facial": "Facial",
    "paintNails": "Paint Nails",
    "trimArea": "Trim 1 area",
    "fullHeadTrim": "Full head trim",
    "poodleFeet": "Poodle feet",
    "express": "Express",
    "ticksInfestation": "Ticks infestation",
    "earsCleaned": "Ears cleaned",
    "sanitary": "Sanitary"
};

const services2 =
    [
        {
            "description": "20 pounds and under",
            "nailTrim": "$8 + tax",
            "nailGrind": "$8 + tax",
            "combo": "$14 + tax"
        },
        {
            "description": "21 to 40 pounds",
            "nailTrim": "$10 + tax",
            "nailGrind": "$10 + tax",
            "combo": "$18 + tax"
        },
        {
            "description": "41 pounds and up",
            "nailTrim": "$13 + tax",
            "nailGrind": "$13 + tax",
            "combo": "$23 + tax"
        }
    ];

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', function () {
        $('input').iCheck({
            checkboxClass: 'icheckbox_flat',
            radioClass: 'iradio_flat'
        });
    });

    document.querySelector('#changeLanguage').addEventListener('click', () => {
        window.location.href = 'appointment_es.html';
    });

    const weight = document.querySelector('#weight');
    weight.addEventListener('change', (e) => {
        hairCutCost = document.querySelector('#hairCutCost');
        bathCost = document.querySelector('#bathCost');
        deShedCost = document.querySelector('#deShedCost');
        if (e.target.value !== '') {
            hairCutCost.innerHTML = services[e.target.value].hairCut;
            bathCost.innerHTML = services[e.target.value].bath;
            deShedCost.innerHTML = services[e.target.value].deShed;
            $('.flat').prop('disabled', false);
            $('.flat').prop('checked', false).iCheck('update');
        } else {
            hairCutCost.innerHTML = '';
            bathCost.innerHTML = '';
            deShedCost.innerHTML = ''
            $('.flat').prop('disabled', true);
            $('.flat').prop('checked', false).iCheck('update');
        }
    });

    const weight2 = document.querySelector('#weight2');
    weight2.addEventListener('change', (e) => {
        nailGrindCost = document.querySelector('#nailGrindCost');
        nailTrimCost = document.querySelector('#nailTrimCost');
        comboCost = document.querySelector('#comboCost');
        if (e.target.value !== '') {
            nailGrindCost.innerHTML = services2[e.target.value].nailGrind;
            nailTrimCost.innerHTML = services2[e.target.value].nailTrim;
            comboCost.innerHTML = services2[e.target.value].combo;
            $('.flat2').prop('disabled', false);
            $('.flat2').prop('checked', false).iCheck('update');
        } else {
            nailGrindCost.innerHTML = '';
            nailTrimCost.innerHTML = '';
            comboCost.innerHTML = ''
            $('.flat2').prop('disabled', true);
            $('.flat2').prop('checked', false).iCheck('update');
        }
    });

    document.querySelector('form').addEventListener('submit', function (e) {
        let data = {};
        let formData = [];

        if (weight.value >= 0) {
            const weightService = $('[name="weightService[]"]');
            if (weightService[0].checked === true) {
                formData.push({
                    "name": translate[weightService[0].id],
                    "description": services[weight.value]['description'],
                    "cost": services[weight.value][weightService[0].id]
                });
            } else if (weightService[1].checked === true) {
                formData.push({
                    "name": translate[weightService[1].id],
                    "description": services[weight.value]['description'],
                    "cost": services[weight.value][weightService[1].id]
                });
            } else if (weightService[2].checked === true) {
                formData.push({
                    "name": translate[weightService[2].id],
                    "description": services[weight.value]['description'],
                    "cost": services[weight.value][weightService[2].id]
                });
            }
        }

        if (weight2.value >= 0) {
            const weight2Service = $('[name="weight2Service[]"]');
            if (weight2Service[0].checked === true) {
                formData.push({
                    "name": translate[weight2Service[0].id],
                    "description": services2[weight2.value]['description'],
                    "cost": services2[weight2.value][weight2Service[0].id]
                });
            } else if (weight2Service[1].checked === true) {
                formData.push({
                    "name": translate[weight2Service[1].id],
                    "description": services2[weight2.value]['description'],
                    "cost": services2[weight2.value][weight2Service[1].id]
                });
            } else if (weight2Service[2].checked === true) {
                formData.push({
                    "name": translate[weight2Service[2].id],
                    "description": services2[weight2.value]['description'],
                    "cost": services2[weight2.value][weight2Service[2].id]
                });
            }
        }

        const checkoutButton = document.querySelector('#checkoutButton');

        data["name"] = document.querySelector('#name').value;
        data["phone"] = document.querySelector('#phone').value;
        data["email"] = document.querySelector('#email').value !== '' ? document.querySelector('#email').value : '';
        data["date"] = document.querySelector('#date').value;
        data["time"] = document.querySelector('#time').value;
        data["services"] = formData;

        if (formData.length > 0) {
            checkoutButton.disabled = true;

            // Create an instance of the Stripe object with the publishable API key
            let host = `http://${window.location.hostname}:3000`;
            let key = 'pk_test_51HZ57DG6AMMuG0DD0j2YODIDGmTjsac7ix9spCmAbCimUIfyNLIoTHiBebXAhGU2fDQSBInOIrnQsx8Ztf26dYlQ006gTwXpqg';

            if (window.location.hostname !== '127.0.0.1') {
                host = `https://wowwoofserver.herokuapp.com`;
                key = 'pk_live_51HZ57DG6AMMuG0DDfmhVil5leURePuhTQGEIHT1IfOpB4zkw1UDwJMHOzkIcbHeWccUDZ6SLIDQllBPiqdyvoG8d0009vtJagm';
            }

            const storage = localStorage;
            let appointment = [];
            console.log(JSON.stringify(data));
            appointment.push(data);
            storage.setItem("appointment", JSON.stringify(appointment[0]));

            const stripe = Stripe(key);
            // Create a new Checkout Session
            fetch(`${host}/appointments/create-checkout-session`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (session) {
                    return stripe.redirectToCheckout({ sessionId: session.id });
                })
                .then(function (result) {
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, display the localized error message to the
                    // customer using `error.message`.
                    if (result.error) {
                        alert(result.error.message);
                    }
                })
                .catch(function (error) {
                    console.error('Error:', error);
                });
        } else {
            displayModal('Please select the appointment you would like to schedule.');
            checkoutButton.disabled = false;
        }

        e.preventDefault();
    });
};