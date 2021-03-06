import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import React, { useState } from 'react';
function App() {

    const [presupuesto, guardarPresupuesto] = useState(0);
    const [restante, guardarRestante] = useState(0);
    const [mostrarpregunta, actualizarPregunta] = useState(true);

    return (
        <div className="container">
            <header>
                <h1>Gasto semanal</h1>
                <div className="contenido-principal contenido">
                    {mostrarpregunta ?
                        (
                            <Pregunta
                                guardarPresupuesto={guardarPresupuesto}
                                guardarRestante={guardarRestante}
                                actualizarPregunta={actualizarPregunta}

                            />
                        ) :
                        (
                            <div className="row">
                                <div className="one-half column">
                                    <Formulario />
                                </div>
                                <div className="one-half column">
                                    2
                                </div>
                            </div>
                        )
                    }


                </div>

            </header>

        </div>
    );
}

export default App;
