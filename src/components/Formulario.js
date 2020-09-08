import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    //Categorías
    const OPCIONES = [
        {value:'general', label:'General'},
        {value:'business', label:'Negocios'},
        {value:'entertainment', label:'Entretenimiento'},
        {value:'health', label:'Salud'},
        {value:'science', label:'Ciencia'},
        {value:'sports', label:'Deportes'},
        {value:'technology', label:'Tecnología'}
    ]

    //inicialización del useSelect. categoria es igual al state del hook. Pasarle las categorías que soporta la API
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return ( 
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;