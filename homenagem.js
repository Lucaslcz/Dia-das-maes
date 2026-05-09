document.addEventListener('DOMContentLoaded', () => {
    const secoes = document.querySelectorAll('.secao-memoria');

    const observadorOpcoes = {
        threshold: 0.2
    };

    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('mostrar');
            }
        });
    }, observadorOpcoes);

    secoes.forEach(secao => {
        observador.observe(secao);
    });
});

const caixa = document.getElementById('caixa-presente');

if (caixa) {
    caixa.addEventListener('click', () => {
        caixa.classList.toggle('aberta');
        
        if (caixa.classList.contains('aberta')) {
            console.log("Surpresa aberta!");
            if (typeof soltarEmojiCoracao === "function") soltarEmojiCoracao();
        }
    });
}