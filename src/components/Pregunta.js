import { useState } from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    
    //Definir el state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [error, guardarError] = useState(false);
    //Funcion que lee el presupuesto

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    }

    // Submit para definir presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        //Que hacer si pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }

    return (
        <>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El Presupuesto es Incorrecto"/>: null}
            <form
                onSubmit = {agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir presupuesto"
                />
            </form>
        </>
    );
}

export default Pregunta
