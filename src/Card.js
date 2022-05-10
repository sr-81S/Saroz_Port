import React from 'react'


const Card = (props) => {
  return (
    <>
       

        <div className='col-md-4 col-10 mx-auto'>
            <div className="card" >
                <img src={props.imgsrc} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"> {props.descri} .</p>
                    <a href={props.link} className="btn btn-primary"> {props.btn} </a>
                </div>
            </div>
        </div>

    </>
  )
}

export default Card