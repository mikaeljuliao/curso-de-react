import React from 'react'
import ';/css/Card.css'

//IMPORTAR DADOS DE BACK-END (SIMULAÇÃO)
import { acomodacoes } from '../../backend/dados'
export default function Card() {
  return (
    <div className='container-fluid'>
        <div className='container-airbnb row'>
            {
                acomodacoes.map((acomodacao, index) => (
                      <div key={acomodacao.id} className='col-xxl2'>
                      <img src={acomodacao.imagens[0]} className='img-fluid' />
                      <p className='d-flex justify-content-between mt-3 mb-0'>
                        <span style={{ display:'block', maxWidth:'200px'}} className='fw-bold text-truncate'>{acomodacao.cidade}, {acomodacao.pais}</span>
                        <span className='mdi mdi-star'>{acomodacao.nota}</span>
                      </p>
                      <p className='text-muted my-0'>50 KM de distância</p>
                      <p className='text-muted'>10 de jan - 28 fev</p>
                      <p>{acomodacao.preco.toLocaleString='pt-br'} noite</p>
                      </div>
              
                    ))
            }
      
        </div>
 </div>
  )
}
