import React from 'react'
import Card from './Card'
import Proj from './Proj'

const Projects = () => {
  return (
    <>
        <div className='my-5' >
            <h1 className='text-center'>My Projects On <strong>GitHub</strong></h1>
        </div>
        <div className='container-fluid mb-5'>
 	        <div className='row'>
            	<div className='col-10 mx-auto'>
                    <div className='row gy-4'>
                       {
                           Proj.map((val, ind)=>{
                               return(
                                <Card
                                imgsrc={val.imgsrc}
                                title={val.title}
                                descri={val.des}
                                link={val.link}
                                btn={val.btn}
                                />
                               )
                           })
                       }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects