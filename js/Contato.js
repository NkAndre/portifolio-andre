const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    

    const numeroWhatsapp = "5511948993767"; 

    const textoMensagem = `Olá! Meu nome é ${nome}. ${mensagem}`;
    const mensagemFormatada = encodeURIComponent(textoMensagem);

    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensagemFormatada}`;
    

    window.open(url, '_blank');

    formulario.reset();
});