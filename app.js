document.querySelector('.sign-up').addEventListener('click', function(){
    document.querySelector('.Front-log-in').classList.remove('disp');
    document.querySelector('.Front-sign-up').classList.add('disp');
})

document.querySelector('.Log-in').addEventListener('click', function(){
    document.querySelector('.Front-log-in').classList.add('disp');
    document.querySelector('.Front-sign-up').classList.remove('disp');
    document.querySelector('.Front-sign-up').toggleClass('box-rotate');
})
