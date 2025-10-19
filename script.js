// Espera a que todo el contenido del HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {

    // --- Botón Principal de "Jugá YA!" ---
    const playButton = document.getElementById("play-now");

    if (playButton) {
        playButton.addEventListener("click", () => {
            console.log("Botón '¡Jugá YA!' presionado.");
            // Aquí puedes agregar la acción real, como redirigir o abrir un modal
            alert("¡Iniciando el juego!");
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