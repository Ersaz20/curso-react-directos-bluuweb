import { useRef } from "react"

const FormNoControlado = () => {

    const formulario = useRef(null)
    
    const handleSubmit = e => {
        e.preventDefault()
        
        const datos = new FormData(formulario.current)
      

        const objetoDatos = Object.fromEntries([...datos.entries()])

        const { todoDescripcion, todoName } = objetoDatos;

        if (!todoDescripcion.trim() || !todoName.trim()){
            console.log("noooooo pooo esta vacio")
            return
        }

        console.log("paso validaciones")  
    }


    return (
        <div>
            <h1>No controlados</h1>

            <form ref={formulario} onSubmit={handleSubmit}>
                <input type="text" placeholder="Ingrese Todo"
                name="todoName"
                className="form-control mb-2"
                defaultValue="Tarea #01"/>
                <textarea name="todoDescripcion" className="form-control mb-2" placeholder="Ingrese descripcion del todo"
                defaultValue="Descripcion de la Tarea #01" />

                <select name="todoEstado" className="form-control mb-2" defaultValue="Pendiente">
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>
                <button
                 
                  className="btn btn-primary">Agregar</button>
            </form>
        </div>
    )
}

export default FormNoControlado
