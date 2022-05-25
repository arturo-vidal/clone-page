import React from 'react';
import '../hojas-de -estilo/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt='foto de Emma' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> in {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} at <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.textotestimonio}"</p>
      </div>

    </div>

  );
}

export default Testimonio;