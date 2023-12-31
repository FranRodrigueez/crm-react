import {useLoaderData} from 'react-router-dom'
import Cliente from '../components/Cliente';

export function loader(){

  const clientes = [
    {
        id: 1,
        nombre: 'Francisco',
        telefono: 661186310,
        email: "f.rodriguez@cesjuanpablosegundocadiz.es",
        empresa: 'Alten'
    },
    {
        id: 2,
        nombre: 'Jose María',
        telefono: 138198313,
        email: "j.gonzalez@cesjuanpablosegundocadiz.es",
        empresa: 'Telefónica'
    },
    {
        id: 3,
        nombre: 'Israel',
        telefono: 31983913,
        email: "i.valderrama@cesjuanpablosegundocadiz.es",
        empresa: 'Panadería'
    },
    {
        id: 4,
        nombre: 'Pablo',
        telefono: 319381983,
        email: "p.ruso@cesjuanpablosegundocadiz.es",
        empresa: 'Arduino'
    },
    {
        id: 5,
        nombre: 'Jesús',
        telefono: 1398198938,
        email: "j.chaves@cesjuanpablosegundocadiz.es",
        empresa: 'GTA'
    },
];

  return clientes
}

function Index() {

  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      {clientes.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Clientes</th>
              <th className='p-2'>Email</th>
              <th className='p-2'>Teléfono</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map( clientes => (
              <Cliente
                clientes={clientes}
                key={clientes.id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay Clientes aún</p>
      )}
    </>
  )
}

export default Index
