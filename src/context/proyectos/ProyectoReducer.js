// REDUCER - ES UNA FUNCIÓN AUTORIZADA QUE ALTERA EL ESTADO GLOBAL

const reducers = (globalState, action) => {

    switch(action.type) {
        // cases
        case "OBTENER_PROYECTOS":
            return {
                ...globalState,
                proyectos: action.payload
            }


        // default
        default:
            return globalState

    }
}

export default reducers