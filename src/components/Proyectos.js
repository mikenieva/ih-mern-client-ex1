// eslint-disable-next-line react-hooks/exhaustive-deps
import React, {useState, useEffect, useContext} from 'react'

import ProyectoContext from './../context/proyectos/ProyectoContext'

export default function Proyectos() {

    // 1. USECONTEXT - ESTADO GLOBAL
    const context = useContext(ProyectoContext)

    const { 
        proyectos,  // LISTADO DE PROYECTOS QUE VIENE DE CONTEXT
        darkMode,  
        obtenerProyectos,
        crearProyecto,
        actualizarProyecto,
        eliminarProyecto} = context

    // 2. USESTATE - ESTADO LOCAL

    const [ nuevoProyecto, setNuevoProyecto ] = useState({
        nombre: ""
    })

    const [ modoEdicion, setModoEdicion ] = useState(false)


    // 3. USEEFFECT

    useEffect(() => {
        
        
        obtenerProyectos()

    }, [])



    const manejarCambios = (event) => {
        
        event.preventDefault()

        setNuevoProyecto({
            ...nuevoProyecto,
            [event.target.name]: event.target.value
        })


    }


    const enviarFormulario = (event) => {
        event.preventDefault()

        // console.log("Enviando datos...", nuevoProyecto)
        crearProyecto(nuevoProyecto)

        setNuevoProyecto({
            nombre: ""
        })
    }


    // MODO EDICIÓN

    const activarModoEdicion = (event, element) => {
        
        event.preventDefault()
        setModoEdicion(true)
        setNuevoProyecto(element)

    }


    const editarProyecto = (event) => {
        
        event.preventDefault()
        
        actualizarProyecto(nuevoProyecto)

        setModoEdicion(false)

        setNuevoProyecto({
            nombre: ""
        })

    }

    // BORRAR PROYECTO


    const borrarProyecto = (event, element) => {
        
        event.preventDefault()
        eliminarProyecto(element)

    }


    // EVENTO EDITAR

    return (
        <div>
            Hola soy todos los proyectos del backend :D
            
            <p>Dark Mode: {
                darkMode ? "Activado" : "Apagado"
            }</p>

            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />

            <form onSubmit={ modoEdicion ? 
                    (e) => editarProyecto(e) : 
                    (e) => enviarFormulario(e)
                }>
                <input 
                    name="nombre"
                    type="text"
                    value={nuevoProyecto.nombre}
                    onChange={(e) => { manejarCambios(e) }}
                />

                <button>
                    { modoEdicion ? "Editar proyecto" : "Crear proyecto" }
                </button>


            </form>


            {
                proyectos.length === 0 ?
                "No tengo proyectos"
                :
                proyectos.map((proyecto,i) => {
                    return(
                        <div key={i}>

                            <p>{proyecto.nombre}</p>
                            <p>{proyecto._id}</p>

                           <button onClick={(evento) => {activarModoEdicion(evento, proyecto)}}>Editar</button>
                            <button onClick={(evento) => borrarProyecto(evento, proyecto)}>Borrar</button>

                        </div>
                    )
                })
            }


        </div>
    )
}
