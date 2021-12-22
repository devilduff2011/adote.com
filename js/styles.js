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

window.onload = function(){
    document.querySelector(".menu_mobile").addEventListener("click", function(){
       if(document.querySelector("nav ul").style.display == 'flex') {
           document.querySelector("nav ul").style.display = 'none';
       } else{
        document.querySelector("nav ul").style.display = 'flex';
       }
    });
};
