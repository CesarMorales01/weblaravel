import React from 'react'

const SuggestedProducts = (params) => {

    function removeLoad(e) {
        document.getElementById('load' + e).style.display = 'none'
    }

    function goProduct(e) {
        window.location.href = params.globalVars.thisUrl + 'product/' + e
    }

    return (
        <div >
            <div style={{ margin: '0.2em' }} className="rounded">
                <h5 style={{ fontSize: '1.4em', padding: '0.5em' }} className='textAlignCenter superTitulo'>{params.categoria}</h5>
            </div>
            <div style={{ marginTop: '0.5em' }} >
                <div className="row">
                    {params.productos.map((item, index) => {
                        return (
                            <div key={index} id={item.codigo} onClick={() => goProduct(item.codigo)} className="col-lg-3 col-md-4 col-sm-6 col-6 card card-flyer cursorPointer">
                                <span style={{ marginLeft: '1em' }} id={'load' + item.codigo} className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <img style={{ padding: '0.5em', width: '100%', height: 'auto' }} onLoad={() => removeLoad(item.codigo)} src={params.globalVars.urlRoot + 'Images/Products/' + item.imagen} className="card-img-top rounded centerImgCarousel" />
                                <h5 style={{ margin: '0.5em', fontSize: '1.3em' }} className='textAlignCenter superTitulo' >{item.nombre}</h5>
                                <p style={{ color: item.precio == '$ 0' ? 'gray' : 'black' }} className="fontSizePreciosSuggested">
                                    {item.cantidad == '0' ? 'Agotado' : item.precio}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SuggestedProducts