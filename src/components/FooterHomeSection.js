import React, { Fragment } from 'react'
import FooterCompany from './FooterCompany'
import FooterForFoodie from './FooterForFoodie'
import FooterForRestaurant from './FooterForRestaurant'
import FooterForYou from './FooterForYou'

const FooterHomeSection = () => {
    return (<Fragment>
        <div className={'container'}>
            <section className='row '>
                <div className={'col-8'}>

                </div>
                <div className={'col-4'}>
                    <select>

                        <option>   {'Country'}</option>
                    </select>
                    <select>
                        <option>  {'language'} </option>
                    </select>
                </div>
            </section>
            <div className={'row'}>
                <FooterCompany/>
                <FooterForFoodie/>
                <FooterForRestaurant/>
                <FooterForYou/>
            </div>
        </div>
    </Fragment>)
}


export default FooterHomeSection;