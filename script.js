/* SKY MAGIC */
const sky = document.getElementById("sky");

for (let i = 0; i < 120; i++) {
    let s = document.createElement("div");
    s.className = "star";
    s.style.top = Math.random() * 100 + "%";
    s.style.left = Math.random() * 100 + "%";
    sky.appendChild(s);
}


/*======================================================
CUENTA REGRESIVA
======================================================*/

const fechaEvento = new Date("September 26, 2026 17:00:00").getTime();

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarContador();

setInterval(actualizarContador,1000);

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

btn.addEventListener("click", () => {

    if (music.paused) {

        music.play()
        .then(() => {
            btn.innerHTML = "🔊";
            btn.classList.add("playing");
        })
        .catch(error => {
            console.log("Error al reproducir música:", error);
        });

    } else {

        music.pause();

        btn.innerHTML = "🎵";
        btn.classList.remove("playing");

    }

});


const contenedor = document.querySelector(".estrellas-container");


function crearEstrella(){

    const estrella = document.createElement("span");

    estrella.classList.add("estrella");


    // posición horizontal aleatoria
    estrella.style.left =
        Math.random() * 100 + "%";


    // tamaño diferente
    const tamaño =
        Math.random() * 5 + 2;


    estrella.style.width =
        tamaño + "px";

    estrella.style.height =
        tamaño + "px";


    // velocidad diferente
    estrella.style.animationDuration =
        (Math.random() * 5 + 4) + "s";


    // retraso aleatorio
    estrella.style.animationDelay =
        Math.random() * 5 + "s";


    contenedor.appendChild(estrella);



    // eliminar para no cargar la página
    setTimeout(()=>{

        estrella.remove();

    },10000);

}


// crear estrellas constantemente

setInterval(
    crearEstrella,
    180
);