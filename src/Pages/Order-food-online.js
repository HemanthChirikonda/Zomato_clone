import React, { Fragment } from 'react'
import FilterChoicesSection from '../components/Orderfood/FilterChoicesSection'
import Promotionsection from '../components/Orderfood/Promotionsection'
import Regularheader from '../components/Orderfood/Regularheader'
import ResturantCard from '../components/Orderfood/RestaurantCard'
import RestaurantCardSection from '../components/Orderfood/RestaurantcardSection'
import SearchSection from '../components/Orderfood/Searchsection'
import Title from '../components/Title'



const Orderfoodonline = () => {
    return (<Fragment>
        <Regularheader />
        <div className={'container-fluid bg-light p-1'}>
            <Promotionsection />
         
            <div className={'container'} style={{ width: '100%' }}>


                <div className={'row border'}>
                    <h2>{'Order food online in Indira Nagar, Khairatabad'}</h2>

                </div>

             <div className='row border'>
             <div className='col-2 border' style={{ fontSize: '0.7rem' }}>
                    <FilterChoicesSection />
                </div>
                <div className='col-10 border'>
                    <SearchSection />
                    <RestaurantCardSection />
                </div>


             </div>




            </div>


        </div>

    </Fragment>
    )
}


export default Orderfoodonline;
