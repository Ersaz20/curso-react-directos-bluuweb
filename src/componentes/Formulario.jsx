import { useState } from "react"

const Formulario = () => {

    const [todo, setTodo] = useState({
        todoName: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
        todoCheck: false,
    })

    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        const { todoDescripcion, todoName } = todo

        if(!todoDescripcion.trim() || !todoName.trim()){
            setError(true)
            return
        }
        setError(false)

        setTodo({
            todoName: "",
            todoDescripcion: "",
            todoEstado: "pendiente",
            todoCheck: false,
        })
    } 


    const handleChange = e =>{
        console.log(e.target.value)
        console.log(e.target.name)

        // setTodo({
        //     ...todo,
        //     [e.target.name]: e.target.value
        // })

        const {name, type, checked, value} = e.target

        setTodo((old)=>({
            ...old,
            [name]: type === "checkbox" ? checked : value
        }))

    }

    const PintarError = ()=>(
        <div className="alert alert-danger">Campos Obligatorios</div>
    )

    return (
        <>
            <h1>Formulario Controlado</h1>

            {
                error ? <PintarError /> : null
            }

            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Ingrese Todo"
                  name="todoName"
                  className="form-control mb-2" 
                  onChange={handleChange}
                  value={todo.todoName}/>
                <textarea name="todoDescripcion" className="form-control mb-2" placeholder="Ingrese descripcion del todo"
                onChange={handleChange}
                value={todo.todoDescripcion}
                 />

                <select name="todoEstado" className="form-control mb-2" onChange={handleChange}
                value={todo.todoEstado}>
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>

                <div className="form-check">
                    <input id="flexCheckDefault"
                    className="form-check-input" type="checkbox" checked={todo.todoCheck}
                    onChange={handleChange}
                    name="todoCheck" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">Dar prioridad</label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary">Agregar</button>
            </form>
        </>
    )
}

export default Formulario
