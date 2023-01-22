console.log(document);

console.log(document.querySelector('.botao-trailer'));

const botaoTrailer = document.querySelector('.botao-trailer');

const modal = document.querySelector('.modal');

const fecharmodal = document.querySelector('.fechar-modal');

const video = document.getElementById('video');

const linkDoVideo = video.src;


botaoTrailer.addEventListener("click", () => {

    modal.classList.add("aberto");
    video.setAttribute("src",linkDoVideo);
});


fecharmodal.addEventListener("click", () =>{

    modal.classList.remove("aberto");
    video.setAttribute("src","");
});







