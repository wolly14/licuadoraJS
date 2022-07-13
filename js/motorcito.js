var estadodelicuadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

function controlarlicuadora() {
    if(estadodelicuadora == "apagada") {
        estadodelicuadora = "encendido";
        licuadora.classList.add("active")
        hacerBrrBrr();
        // console.log("me prendiste");
    } else {
        estadodelicuadora = "apagada";
        licuadora.classList.remove("active")
        hacerBrrBrr();
        // console.log("me apagaste");
    }
}

function hacerBrrBrr() {
    if(sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}