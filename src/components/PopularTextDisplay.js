import React, { Fragment } from 'react'

const PopularTextDisplay = () => {
    return (
        <div className={'col-4'}>
           <div className='row border rounded m-2 p-2'>
           <div className='col-10'>
               <h5>{'content'}</h5>
             </div>
             <div className={'col-2'}>
               {'>'}
             </div>
           </div>
        </div>
    )
}

export default PopularTextDisplay;