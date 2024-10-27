
$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x fa-bars');
    }); 
});

// JavaScript para enviar o formulário e salvar as críticas (implementar)

// Exemplo básico de como enviar os dados para um servidor:
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    // Enviar os dados para um servidor usando fetch ou XMLHttpRequest
});