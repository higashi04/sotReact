import './body.css'
import CardLink from '../card-link/card-link'

const Body = ()=> {
    return(
        <div className='my-5 body py-5'>
            <CardLink departamento= 'Almacen' btnName= 'Inventario'  id= 'inv' url='/inv' />
            <CardLink departamento= 'Mantenimiento Correctivo y Preventivo' btnName= 'Entrar' id= 'mtto' url='/mtto' />
            <CardLink departamento= 'Administración de Personal' btnName= 'Entrar' id= 'hr' url='/hr' />
            <CardLink departamento= 'Calidad' btnName= 'Entrar' id= 'qa' url='/qa' />
            <CardLink departamento= 'Compras' btnName= 'Entrar' id= 'compras' url='/compras' />
            <CardLink departamento= 'Operaciones' btnName= 'Entrar' id= 'oper' url='/oper' />
            <CardLink departamento= 'Recepción' btnName= 'Entrar' id= 'recep' url='/recepcion' />
        </div>
    )
}

export default Body