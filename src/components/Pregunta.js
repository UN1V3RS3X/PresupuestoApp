const Pregunta = () => {
    return (
        <>
            <h2>Coloca tu presupuesto</h2>
            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
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
