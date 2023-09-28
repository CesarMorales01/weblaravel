import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../../css/general.css'
import { useState, useEffect } from 'react';

const MyCarousel = (params) => {
    const [thisWidth, setthisWidth] = useState('')

    useEffect(() => {
        setthisWidth(setDimensionPantalla())
    }, [])

    function setDimensionPantalla() {
        let widthDiv
        if (window.screen.width < 600) {
            widthDiv = 'imgCarouselSm'
        } else {
            widthDiv = 'imgCarouselBig'
        }
        return widthDiv
    }

    function loadingImgCarousel() {
        document.getElementById('spanCargandoCarousel').style.display = 'none'
    }

    function goProduct(id){
      window.location= params.globalVars.thisUrl+"product/"+id
    }

    return (
        
            <div style={{ marginTop: 3 }} >
                <span id='spanCargandoCarousel' className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <Carousel variant="dark" indicators={false}>
                    {
                        params.promos.map((item, index) => {

                            return (
                                <Carousel.Item onClick={()=>goProduct(item.ref_producto)} className='textAlignCenter' key={index}>
                                    <img onLoad={loadingImgCarousel} id={item.referencia} className={'centerImgCarousel rounded cursorPointer ' + thisWidth}
                                        src={params.globalVars.urlRoot + 'Images/Products/'+ item.imagen}
                                        alt=""
                                    />
                                    <h3 style={{ marginTop: '0.6em', display: item.descripcion=='' ? '' : 'none' }} className='textAlignCenter superTitulo'>{item.descripcion}</h3>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>
        
    )
}

export default MyCarousel