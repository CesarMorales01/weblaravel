import React from 'react'
import CopyRight from '../UIGeneral/CopyRight';
import '../../../css/general.css'
import WhastsappButton from '@/Components/WhatsappButton';

const Contact = (params) => {

  function goFb() {
    window.open(params.datos.linkfb, "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=800, height=600");
  }

  function goInsta() {
    window.open(params.datos.linkinsta, "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=800, height=600");
  }

  function goWhats() {
    let href = "https://api.whatsapp.com/send?phone=57" + params.datos.telefonos[0].telefono + "&text=Hola! He visitado tu página y me gustaria preguntar algo!";
    window.open(href, "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=800, height=600");
  }

  function goMaps() {
    // let href = 'https://goo.gl/maps/Ns4Gi6p4zBxk33g96'
    // window.open(href, "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=800, height=600");
  }

  return (
    <footer style={{ margin: '0.4em' }} className="page-footer font-small sombraBlanco">
      <div>
        <h5 style={{ marginTop: '1em', fontSize: '1.4em' }} className='textAlignCenter superTitulo'>¿Quiénes somos?</h5>
        <div style={{ marginTop: '2em' }} className="row justify-content-center">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img className='centerImgCarousel rounded' style={{ width: '50%', height: 'auto' }} src={params.url + 'Images/Products/' + params.datos.imagen} alt='' />
            </div>
            <div className="col-lg-6 col-md-6 align-self-center" style={{ marginTop: window.screen.width < 600 ? '2em' : '' }} >
              <p style={{ textAlign: 'center', margin: '1em' }}>
                {params.datos.descripcion_pagina}
              </p>
            </div>

            <div style={{ marginTop: '1em' }} className="col-lg-6 col-md-6">
              <h5 style={{ fontSize: '1.2em', padding: '0.5em', textTransform: 'uppercase' }} className='textAlignCenter superTitulo'>Contáctanos</h5>
              <p onClick={goMaps} style={{ marginTop: '0.5em', cursor: 'pointer' }}><i style={{ marginRight: '0.4em' }} className="fa-solid fa-location-dot fa-lg"></i>{params.datos.direccion_pagina}</p>
              {params.datos.telefonos ?
                <p style={{ marginTop: '1em' }}><i style={{ marginRight: '0.4em' }} className="fa-solid fa-phone-volume fa-lg"></i>
                  +57 {params.datos.telefonos[0].telefono}
                </p>
                :
                ''}
              <p style={{ marginTop: '1em' }}><i style={{ marginRight: '0.4em' }} className="fa-regular fa-envelope fa-lg"></i>{params.datos.correo}</p>
            </div>
            <div style={{ marginTop: '1em' }} className="col-lg-6 col-md-6">
              <h5 style={{ fontSize: '1.2em', padding: '0.5em', textTransform: 'uppercase', marginBottom: '0.8em' }} className='textAlignCenter superTitulo'>Siguenos</h5>
              <p style={{ marginBottom: '0.5em' }}><a onClick={goInsta} style={{ cursor: 'pointer', color: '#c82590' }}><i style={{ marginRight: '0.4em', color: '#c82590' }} className="fa-brands fa-instagram fa-lg"></i>{params.datos.linkinsta}</a></p>
              <p style={{ marginBottom: '0.5em' }}><a onClick={goFb} style={{ cursor: 'pointer', color: 'blue' }}><i style={{ marginRight: '0.4em', color: 'blue' }} className="fa-brands fa-facebook fa-lg"></i>{params.datos.linkfb}</a></p>
              <p style={{ marginBottom: '0.5em' }}><a onClick={goWhats} style={{ cursor: 'pointer', color: 'green' }}><i style={{ marginRight: '0.4em', color: 'green' }} className="fa-brands fa-whatsapp fa-lg"></i>+57 {params.datos.telefonos[0].telefono}</a></p>
            </div>
          </div>
        </div>
        <br />
      </div>
      <CopyRight url={params.url} version='' />
    </footer>
  )
}

export default Contact