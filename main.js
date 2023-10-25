alert('Hello word')
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla.pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla.clap').onclick = tocaSomClap;

function tocaSomTim(){
    document.querySelector('#som_tecla_Tim').play();
}

document.querySelector('.tecla.Tim').onclick = tocaSomTim;