function initCarrossel() {
    const slides = document.querySelectorAll(".slide");
    const indicadores = document.querySelectorAll(".indicador");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    

    if (!slides.length || !btnPrev || !btnNext) return;

    let slideAtual = 0;
    let intervaloCarrossel;

    function mostrarSlide(index) {
        slides.forEach(slide => slide.classList.remove("ativo"));
        indicadores.forEach(ind => ind.classList.remove("ativo"));

        if (index >= slides.length) {
            slideAtual = 0;
        } else if (index < 0) {
            slideAtual = slides.length - 1;
        } else {
            slideAtual = index;
        }

        slides[slideAtual].classList.add("ativo");
        if (indicadores[slideAtual]) {
            indicadores[slideAtual].classList.add("ativo");
        }
    }

    
    function proximoSlide() {
        mostrarSlide(slideAtual + 1);
    }

    
    function slideAnterior() {
        mostrarSlide(slideAtual - 1);
    }

    
    function iniciarAutoPlay() {
        clearInterval(intervaloCarrossel);
        intervaloCarrossel = setInterval(proximoSlide, 4000); 
    }

    
    btnNext.addEventListener("click", () => {
        proximoSlide();
        iniciarAutoPlay(); 
    });

    btnPrev.addEventListener("click", () => {
        slideAnterior();
        iniciarAutoPlay();
    });

    
    indicadores.forEach(indicador => {
        indicador.addEventListener("click", (e) => {
            const indexEscolhido = parseInt(e.target.getAttribute("data-index"));
            mostrarSlide(indexEscolhido);
            iniciarAutoPlay();
        });
    });


    iniciarAutoPlay();
}

initCarrossel();