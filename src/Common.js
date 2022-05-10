import React from 'react'
import { NavLink } from 'react-router-dom'
import '../src/index.css'

const Common = (props) => {
  return (
    <>
        <section id='header' className=' pb-5 container d-flex align-items-center justify-content-center'>
            <div className='container-fluid '>
 	            <div className='row'>
      	            <div className='col-10 mx-auto'>
                          <div className='row' >
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                            <h1>{props.head} <strong> {props.brand} </strong></h1>
                            <h2 className='my-3' > {props.desceiption} </h2>
                            <div className='mt-3' >
                                <a href={props.link} className='btn btn-outline-success rounded-pill' >
                                    {props.bn}
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-6 order-1 order-lg-2 header-img' >
                            <img src={props.imgsc} className='img-fluid' />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Common