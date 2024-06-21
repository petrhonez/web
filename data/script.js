document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    const message = document.getElementById('message').value;
    if (message.trim() !== '') {
        alert('Mensagem enviada: ' + message);
        document.getElementById('message').value = ''; // Limpa a caixa de texto
    } else {
        alert('Por favor, escreva uma mensagem antes de enviar.');
    }
});
