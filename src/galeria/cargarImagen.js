import data from "../datos/fotos";

const galeria = document.getElementById('galeria');

const cargarImagen = (id, nombre, ruta) => {
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
    galeria.querySelector('.galeria__titulo').innerText = nombre;

    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];

    let indexImagenActual;

    fotos.forEach((foto, index) => {
        if(foto.id === id) {
            indexImagenActual = index;
        };
    });

    

    if(galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {

    galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');

    galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');

    };
}

const cargarAnteriorSiguiente = (direccion) => {
    
    const galeria = document.getElementById('galeria');
    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];
    const imagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);

    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if(foto.id === imagenActual){
            indexImagenActual = index;
        }
    })

    if(direccion === 'siguiente'){
        if (fotos[indexImagenActual + 1] ){
        const {id, nombre, ruta} = fotos[indexImagenActual + 1];
        cargarImagen(id, nombre, ruta);
        }
    } else if (direccion === 'anterior') {
        if (fotos[indexImagenActual - 1] ){
            const {id, nombre, ruta} = fotos[indexImagenActual - 1];
            cargarImagen(id, nombre, ruta);
            }
    }
}
export { cargarImagen, cargarAnteriorSiguiente }; 