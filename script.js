// Открытие/закрытие модального окна
const modal = document.getElementById('modal');
const openModalBtn = document.querySelector('[data-open-modal]');
const closeModalBtn = document.querySelector('[data-close]');
var scriptURL = 'https://script.google.com/macros/s/AKfycbxyBDsb5TAkwLa1p79vsB-ROviwmjKlKHNArARr5y5_uDZvztQMpSpeUNP5Thq_GaRO-w/exec'
var form = document.forms['submit-to-google-sheet']
var successMessage = document.getElementById('success-message');
var sendingMessage = document.getElementById('sending-message');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие при клике вне окна
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault()
    form.style.display = 'none'; // hide the form immediately
    sendingMessage.style.display = 'block'; // show the sending message
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(function(response) {
            console.log('Success!', response)
            sendingMessage.style.display = 'none'; // hide the sending message
            successMessage.style.display = 'block'; // show the success message
        })
        .catch(function(error) {
            console.error('Error!', error.message)
            form.style.display = 'block'; // show the form again in case of error
            sendingMessage.style.display = 'none'; // hide the sending message
        })
})