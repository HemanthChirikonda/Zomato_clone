import React, { Fragment } from 'react'
import MainFilter from './FilterChoices/MainFilters'
import QUickFilter from './FilterChoices/QUickFilters'
import SortbyFilter from './FilterChoices/SortbyFilter'
import DeliveryTimeFilter from './FilterChoices/DeliveryTimeFilter'
import CuisineFilter from './FilterChoices/CuisineFilter'
import CostoftwoFilter from './FilterChoices/CostoftwoFilter'
import MinimumOrderFilter from './FilterChoices/MinimumOrderFilter'


const FilterChoicesSection = () => {
    return (<Fragment>
        {/* <div className='bg-white row'> */}
        <MainFilter />
        <QUickFilter />
        <SortbyFilter />
        <CuisineFilter />
        <DeliveryTimeFilter />
        <CostoftwoFilter />
        <MinimumOrderFilter />
        {/* </div> */}
    </Fragment>)
}



export default FilterChoicesSection;