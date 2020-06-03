document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'left', //Donde aparece el sidenav left/right
        draggable: true,
        inDuration: 250, //Duración de entrada en ms
        outDuration: 200, //Duración de salida en ms
        onOpenStart: null, //Funcion llamada al realizar la acción
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true //Bloquea el scroll de la pagina si es true
    });
});