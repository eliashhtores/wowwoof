let host = `http://${window.location.hostname}:3000`;

if (window.location.hostname !== '127.0.0.1') {
    host = `https://wow-woof.herokuapp.com`;
}

const storage = localStorage;
let appointment = JSON.parse(storage.getItem("appointment"));

if (appointment) {
    createAppointment(appointment);
    deleteSession();
}

function createAppointment(data) {
    fetch(`${host}/appointments`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            alert('There was an error, please try again later');
            console.error('Error:', error);
        });
}