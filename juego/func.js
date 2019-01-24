
function validar(id1,id2,vida) {
    if (vida > 0 ) {
        if (id1 != 0  && id2 != 0) {
            if (id1 == 1 && id2 == 1 || id1 == 2 && id2 == 2 || id1 == 3 && id2 == 3 || id1 == 4 && id2 == 4 || id1 == 5 && id2 == 5 || id1 == 6 && id2 == 6){
           return vic();

            } else {
                var r=vida-1;
               return alert("Has caido tio, te quedan "+r+" intentos");
                }
                }
    } else {
        //mostrar game over
        return derrota();
    }
   
};

function msg(){
    return alert("Encuentre la similar en el Occidente");
}



function vic(){
    swal({
        imageUrl: 'victorioso.jpg',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText: '¡Reintentar!',
cancelButtonText: 'Salir',
confirmButtonClass: 'btn btn-success',
cancelButtonClass: 'btn btn-danger',
buttonsStyling: false,
reverseButtons: true
}).then((result) => {
if (result.value) {
location.href="juego.html";
} else if (
// Read more about handling dismissals
result.dismiss === swal.DismissReason.cancel
) {
location.href="pres.html";
}
})
} 

function derrota(){
    swal({
        imageUrl: 'derrota.jpg',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText: '¡Reintentar!',
cancelButtonText: 'Salir',
confirmButtonClass: 'btn btn-success',
cancelButtonClass: 'btn btn-danger',
buttonsStyling: false,
reverseButtons: true
}).then((result) => {
if (result.value) {
location.href="juego.html";
} else if (
// Read more about handling dismissals
result.dismiss === swal.DismissReason.cancel
) {
location.href="pres.html";
}
})

}