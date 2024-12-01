document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const fullText = card.querySelector('.texto-completo');

        if (fullText.classList.contains('hidden')) {
            fullText.classList.remove('hidden');
            button.textContent = 'Ver Menos';
        } else {
            fullText.classList.add('hidden');
            button.textContent = 'Ver Mais';
        }
    });
});

document.querySelectorAll('.ocultar-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const fullText = card.querySelector('.texto-completo');
        fullText.classList.add('hidden');

        const toggleButton = card.querySelector('.toggle-btn');
        toggleButton.textContent = 'Ver Mais';
    });
});

document.querySelectorAll('.imagem-item img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.getElementById('modal-imagem');
        const modalImg = document.getElementById('img-modal');

        modal.style.display = 'block';
        modalImg.src = img.getAttribute('data-full');
    });
});

document.querySelector('.fechar').addEventListener('click', () => {
    const modal = document.getElementById('modal-imagem');
    modal.style.display = 'none';
});

document.querySelector('#modal-imagem').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

document.querySelector('#formulario-feedback').addEventListener('submit', function(event) {
    const name = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#mensagem").value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert("Preencha todos os campos");
    }
});
