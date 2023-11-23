document.addEventListener('DOMContentLoaded', function() {
    // Obtén el elemento del nav
    var nav = document.querySelector('.nav');

    // Obtén la lista de elementos con la clase 'nav__item_texto'
    var navItemTextos = document.querySelectorAll('.nav__item_texto');

    // Agrega el evento 'mouseenter' al nav
    nav.addEventListener('mouseenter', function() {
        // Itera sobre cada elemento y cambia el estilo a 'display: block'
        navItemTextos.forEach(function(itemTexto) {
            itemTexto.style.display = 'inline';
        });
    });

    // Agrega el evento 'mouseleave' al nav
    nav.addEventListener('mouseleave', function() {
        // Itera sobre cada elemento y cambia el estilo a 'display: none'
        navItemTextos.forEach(function(itemTexto) {
            itemTexto.style.display = 'none';
        });
    });

    
});