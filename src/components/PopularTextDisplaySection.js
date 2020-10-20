import React, { Fragment } from 'react'
import PopularTextDisplay from './PopularTextDisplay'




const PopularTextDisplaySection=()=>{
    return(<div className='row m-5'>
                 
    <div className={'col-12'}>
        <div className={'title'}>
        <h1>{'Popular localities in and around Hyderabad'}</h1>
        </div>  
     </div> 
      <div className={'col-12 '}>
        <div className={"row popular-locations-container"}>
          <PopularTextDisplay/>
          <PopularTextDisplay/>
          <PopularTextDisplay/>
          <PopularTextDisplay/>
          <PopularTextDisplay/>
        </div>
      </div>
</div>)
}

export default PopularTextDisplaySection;