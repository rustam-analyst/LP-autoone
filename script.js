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

//работа с каруселью
let currentIndex = 0;  
const carouselItems = document.querySelectorAll('.carousel-item');  
  
function goToSlide(index) {  
    if (index > currentIndex) {  
       document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 10}%)`;  
    } else if (index < currentIndex) {  
        index = 0;  
        document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * -10}%)`;
    }  
    currentIndex = index;
    if (currentIndex > carouselItems.length) {
        currentIndex = 0;
    } 
      
}  
function goToNextSlide() {  
    goToSlide(currentIndex + 1);
}  
function goToPrevSlide() {        // из-за setInterval мне нужно быстро нажимать "назад"
    goToSlide(currentIndex - 1);  
}  
setInterval(goToNextSlide, 3000); // автоматическая прокрутка каждые 3 секунды  

// форма обратной связи
/*
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
})*/
// работа с попапами
 function popupFn() {
            document.getElementById(
                "overlay"
            ).style.display = "block";
            document.getElementById(
                "popupDialog"
            ).style.display = "block";
        }
        function closeFn() {
            document.getElementById(
                "overlay"
            ).style.display = "none";
            document.getElementById(
                "popupDialog"
            ).style.display = "none";
        }