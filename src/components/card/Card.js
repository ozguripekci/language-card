
import React from 'react'
import './Card.css'

const Card = ({cardsData}) => {
  return (
    

    <div className="container">
        <p> {'>>'} Card.js is working</p>

        {cardsData.map(element => {
            const {id, name, img, options} = element;
            return (
                <div className="card" key={id}>
                    <button onClick={options}>
                        <h5>{name}</h5>
                        <img className="cardImages" src={img}/>
                        <div className="info">
                            return (<p>{options}</p>)
                        
                    </div>
                    </button>
                    
                </div>
            )
        })

        }
        

        <div className="card-blue">

        </div>

        <div className="card-orange">

        </div>


    </div>
  )
}

export default Card