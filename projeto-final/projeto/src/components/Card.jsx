import React from 'react'
import ';/css/Card.css'

//IMPORTAR DADOS DE BACK-END (SIMULAÇÃO)
import { acomodacoes } from '../../backend/dados'
export default function Card() {


    function getRandonInt(min,max){
        min = Math.ceil(min);
        //ceil retornar o menor numero pra baixo
        max = Math.floor(max)
        // o floor torna o numer inteiro pra cima
        return Math.floor(Math.random() * (max - min + 1)) + min;
       

    /*criando a função de numeros randomico:
    essa função é a responsavel em gerar numeros aleatorios que iremos
    gerar uma kilometragem fake, para isso criamos uma função e passamos dois parametro o min que vai representar o numero minimo
    e o max que ira representar o numero maximo.
    
    pra fazer o arrendodamento usamos o math, o primeiro , o numero min
    usamos o ceil que arredonanda pra inteiro pra baixo(exemplo, se for 1,8 sera 1)
    e usamos o math.floor, o floor ele arredonando o numero para inteiro pra cima.
    e em seguida pedimos pra retornar pra nos essa função, pedimos pra fazer o arredondamento pra cima
    do numero randon com match.random, esse (metodo javascript random gera um numero entre 0 e 1) vezes o maximo menos o minimo + 1 +min
    e isso é um calculo que ira gerar um  numero randomico de acordo com a entrada que eu der,
    por exemplo eu coloco la 10 e o maximo 600 (termine o exemplo chat)
    
    */ 
    }

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
                      <p className='text-muted my-0'>{getRandonInt(10,800)}50 KM de distância</p>
                      <p className='text-muted'>{getRandonInt(1,31)} de jan - {getRandonInt(1,28)} de fev</p>
                      <p>{acomodacao.preco.toLocaleString='pt-br'} noite</p>
                      </div>
              
                    ))
            }
      
        </div>
 </div>
  )
}
