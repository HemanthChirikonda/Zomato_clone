import React, { Fragment } from 'react'
import CategoryCard from './CategoryCard'

const CategorySection =()=>{
    return(<Fragment>
         <div className='row m-5'>
                    <div className={'col-12  catagiryContainer'}>
                        <CategoryCard
                            src={'https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*'}
                            text={'Order Food Online'}
                        />
                        <CategoryCard
                            src={'https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*'}
                            text={'Go out for a meal'} />
                        <CategoryCard
                            src={'https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*'}
                            text={'Nightlife & Clubs'} />
                        <CategoryCard
                            src={'https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*'}
                            text={'Zomato Pro'}
                        />
                    </div>
                </div>
    </Fragment>)
}

export default CategorySection;