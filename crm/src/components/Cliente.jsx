import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarCliente } from "../data/clientes";

export async function action({params}){
  await eliminarCliente(params.clienteId)
  return redirect('/')
}

function Cliente({ clientes }) {

  const navigate = useNavigate()
  const { id, nombre, telefono, email, empresa } = clientes;

  
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2 text-center">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>

      <td className="p-6 text-center">
        <div className="text-gray-600">
          <p className="mb-2">
            <span className="text-gray-800 font-bold uppercase">Email: </span>
            {email}
          </p>
        </div>
      </td>

      <td className="p-6 text-center">
        <div className="text-gray-600">
          <p>
              <span className="text-gray-800 font-bold uppercase">Teléfono: </span>
              {telefono}
          </p>
        </div>
      </td>

      <td className="p-6 flex gap-3 items-center justify-center">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold"
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>

        <Form
          method="post"
          action={`/clientes/${id}/eliminar`}
          onSubmit={(e) => {
            if(!confirm("¿Deseas eliminar a este cliente?")){
              e.preventDefault()
            }
          }}
        >

          <button
            type="submit"
            className="text-red-600 hover:text-red-700 uppercase font-bold"
          >
            Eliminar
          </button>

        </Form>
        
      </td>
    </tr>
  );
}

export default Cliente;


