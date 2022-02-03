export function Item ({ productCake }){
    return(
    <div className='card' >
        <img className="card-img-top" src={productCake.imagen} alt={productCake.name}/>
        <h4>{productCake.nombre}</h4>
        <h5>S/{Number(productCake.precio).toFixed(2)}</h5>
        <button className='btn btn-warning'>+ Detalles</button>
    </div>
    )
}