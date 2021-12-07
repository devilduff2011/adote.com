function subirTela(){
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
    
};

function monitorarScroll(){
    if(window.scrollY === 0){ /* Ocultar Botão */
        document.querySelector('.subir').style.display = 'none';
    }
    else{
        document.querySelector('.subir').style.display = 'block';
    }
}

addEventListener('scroll', monitorarScroll);