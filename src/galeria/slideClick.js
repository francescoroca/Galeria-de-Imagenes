import datos from '../datos/fotos';
import { cargarImagen } from './cargarImagen';

const slideClick = (e) => {
    let ruta, nombre;
    const id = parseInt(e.target.dataset.id);
    const galeria = document.getElementById('galeria');
    const categoriaActiva = galeria.dataset.categoria;
    
    datos.fotos[categoriaActiva].forEach((foto) => {
        if(foto.id === id) {
            ruta = foto.ruta;
            nombre = foto.nombre;
            
        };
    });
    
    cargarImagen(id, nombre, ruta);
    
};

export default slideClick;