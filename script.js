// Espera a que todo el contenido del HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {

    // --- Botón Principal de "Jugá YA!" ---
    const playButton = document.getElementById("play-now");

    if (playButton) {
        playButton.addEventListener("click", () => {
            console.log("Botón '¡Jugá YA!' presionado.");
            // Aquí puedes agregar la acción real, como redirigir o abrir un modal
            window.open("https://wa.me/5491162262830?text=Hola,%20quiero%20jugar%20con%20mi%20bono%20del%20100%", "_blank");
        });
    }

    // --- Enlaces de los Juegos ---
    const gameLinks = document.querySelectorAll(".game-link");

    gameLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            // Previene que el enlace '#' recargue la página
            event.preventDefault(); 
            
            // Obtiene el nombre del juego del atributo 'data-game'
            const gameName = link.dataset.game;
            
            console.log(`Intentando jugar a: ${gameName}`);
            // Acción de marcador de posición
            alert(`Cargando ${gameName}...`);
            
            // Ejemplo de redirección real (descomentar para usar)
            // window.location.href = `/jugar/${gameName}`; 
        });
    });

});