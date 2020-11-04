function deleteSession() {
    localStorage.removeItem('appointment');
}

function displayModal(message) {
    document.querySelector('#textMessage').innerHTML = message;
    $('#messagesModal').modal('show');
}