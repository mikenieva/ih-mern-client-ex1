// REDUCER - ES UNA FUNCIÓN AUTORIZADA QUE ALTERA EL ESTADO GLOBAL

export default (globalState, action) => {

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
