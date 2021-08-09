import React, { useReducer } from 'react'
import ProyectoContext from './ProyectoContext'
import ProyectoReducer from './ProyectoReducer'

import axios from 'axios'

const ProyectoState = (props) => {


    // 1. ESTADO INICIAL
    // SIEMPRE HAGAN UN OBJETO

    const initialState = {
        proyectos: [
            { 
                id: 0,
                nombre: "Arquitectura DESDE GLOBAL"
            }
        ]
    }


    // 2. DISPATCHING Y REDUCERS
    const [ globalState, dispatch ] = useReducer(ProyectoReducer, initialState)


    // 3. FUNCIONES 
    // NOS VAN A AYUDAR A CAPTURAR LOS EVENTOS DE LOS COMPONENTES


    const crearProyecto = async (dataForm) => {
        try {
            
            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/proyectos/crear`, dataForm)

            obtenerProyectos()

        } catch (error) {
            
        }


    }


    const obtenerProyectos = async () => {

        try {

            const respuesta = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/proyectos`)

            const proyectosActualizados = respuesta.data
            console.log(proyectosActualizados)


            dispatch({
                type: "OBTENER_PROYECTOS",
                payload: proyectosActualizados
            })

        } catch (error) {

        }
    }

    const actualizarProyecto = async (dataForm) => {

        const form = {
            proyectoId: dataForm._id,
            nombre: dataForm.nombre
        }


        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/proyectos/actualizar`, form)

        obtenerProyectos()
        
    }


    const eliminarProyecto = async (dataForm) => {

        const form = {
            proyectoId: dataForm._id
        }

        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/proyectos/eliminar`, form)

        console.log(res)
        
        obtenerProyectos()

    } 


    // 4. RETORNO DE ESTADO GLOBAL
    return (
        <ProyectoContext.Provider
            value={{
                proyectos: globalState.proyectos,
                darkMode: true,
                usuario: {
                    nombre: "Mike",
                    email: "m@mikenieva.com"
                },
                obtenerProyectos,
                crearProyecto,
                actualizarProyecto,
                eliminarProyecto
            }}
        >

            { props.children }            

        </ProyectoContext.Provider>
    )

}


export default ProyectoState



