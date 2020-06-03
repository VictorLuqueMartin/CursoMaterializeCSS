document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'left', //Lado donde aparece el sidenav left, right
        draggable: true,
        inDuration: 250, //duracion en ms para entrar
        outDuration: 200, //duracion en ms para salir
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true
    });
});