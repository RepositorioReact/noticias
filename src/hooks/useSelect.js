import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => {
    
    //inicializar el useState del custom hook. Se le pasa el stateInicial
    const [state, actualizarState] = useState(stateInicial);

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}

        </select>
    );

    //se retorna lo que el usuario selecciona y lo que se va a imprimir
    return [state, SelectNoticias];
}
 
export default useSelect;