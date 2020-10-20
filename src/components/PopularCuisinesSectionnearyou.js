import React, { Fragment } from 'react'



const PopularCuisinesSectionnearyou = () => {
 const ary= ['10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10'];

   
    return (<Fragment>

        <div className='col-12 mt-5'>
           <h2>{'Popular cuisines near me'}</h2>
           
            <div className='row m-2'>
           
                {
                    ary.map((item) => {
                        return (

                           <a className={'m-1'}><li>{'PopularCuisines'}</li></a> 

                        )
                    })
                }
          
            </div>

        </div>
    </Fragment>
    )
}

export default PopularCuisinesSectionnearyou;