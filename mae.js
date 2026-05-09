document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao-surpresa');
    const mensagemOculta = document.getElementById('mensagem-oculta');

    botao.addEventListener('click', () => {
        mensagemOculta.classList.toggle('escondido');
        
        if (mensagemOculta.classList.contains('escondido')) {
            botao.textContent = "Clique para um carinho";
        } else {
            botao.textContent = "Fechar carinho";
            soltarCoracoes();
        }
    });
});

function soltarCoracoes() {
    for (let i = 0; i < 15; i++) {
        const coracao = document.createElement('div');
        coracao.innerHTML = '❤️';
        coracao.style.position = 'fixed';
        coracao.style.left = Math.random() * 100 + 'vw';
        coracao.style.top = '100vh';
        coracao.style.fontSize = Math.random() * 20 + 10 + 'px';
        coracao.style.transition = 'transform 3s linear, opacity 3s';
        
        document.body.appendChild(coracao);

        setTimeout(() => {
            coracao.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
            coracao.style.opacity = '0';
        }, 100);

        setTimeout(() => {
            coracao.remove();
        }, 3000);
    }
}