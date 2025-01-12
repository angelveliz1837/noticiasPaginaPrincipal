document.addEventListener("DOMContentLoaded", function () {
    const iconoMenu = document.querySelector(".icono_menu");
    const iconoAspa = document.querySelector(".icono_aspa");
    const menu = document.querySelector(".menu");

    // Crear un media query para verificar si el ancho es menor o igual a 375px
    const mediaQuery = window.matchMedia("(max-width: 375px)");

    // Función para manejar el clic en el icono del menú
    const handleMenuClick = function () {
        if (mediaQuery.matches) {
            menu.style.display = "block";
            iconoAspa.style.display = "block";
            iconoMenu.style.display = "none";
        }
    };

    // Función para manejar el clic en el icono "aspa"
    const handleAspaClick = function () {
        if (mediaQuery.matches) {
            menu.style.display = "none";
            iconoAspa.style.display = "none";
            iconoMenu.style.display = "block";
        }
    };

    // Asignar los eventos de clic
    iconoMenu.addEventListener("click", handleMenuClick);
    iconoAspa.addEventListener("click", handleAspaClick);

    // Escuchar cambios en el tamaño de la ventana
    mediaQuery.addEventListener("change", function () {
        if (mediaQuery.matches) {
            // Configuración cuando el ancho es menor o igual a 375px
            menu.style.display = "none";
            iconoMenu.style.display = "block";
            iconoAspa.style.display = "none";
        } else {
            // Configuración cuando el ancho es mayor a 375px
            menu.style.display = "block";
            iconoMenu.style.display = "none";
            iconoAspa.style.display = "none";
        }
    });

    // Configuración inicial basada en el ancho actual
    if (mediaQuery.matches) {
        menu.style.display = "none";
        iconoMenu.style.display = "block";
        iconoAspa.style.display = "none";
    } else {
        menu.style.display = "block";
        iconoMenu.style.display = "none";
        iconoAspa.style.display = "none";
    }
});
