document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'PetLover' && password === '123') {
        window.location.href = 'home.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});

document.getElementById('schedule-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Banho e tosa agendado com sucesso!');
});

document.getElementById('complete-purchase')?.addEventListener('click', function () {
    alert('Compra finalizada com sucesso!');
});